import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, AccessibilityInfo, Animated, Easing, Vibration } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const TutorialContent = ({ tutorial, onBack }) => {
  const { theme } = useTheme();
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = tutorial.steps.length;

  // Animações
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;
  const progressAnim = useRef(new Animated.Value(0)).current;

  // Efeito para animar a barra de progresso
  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: ((currentStep + 1) / totalSteps) * 100,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, [currentStep]);

  const animateTransition = (direction) => {
    // Feedback tátil
    Vibration.vibrate(50);

    // Animar saída
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: direction === 'next' ? -50 : 50,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Atualizar o passo
      if (direction === 'next') {
        setCurrentStep(currentStep + 1);
      } else {
        setCurrentStep(currentStep - 1);
      }

      // Resetar animações
      slideAnim.setValue(direction === 'next' ? 50 : -50);
      
      // Animar entrada
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    });
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      animateTransition('next');
      AccessibilityInfo.announceForAccessibility(`Passo ${currentStep + 2} de ${totalSteps}`);
    } else {
      onBack();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      animateTransition('prev');
      AccessibilityInfo.announceForAccessibility(`Passo ${currentStep} de ${totalSteps}`);
    }
  };

  const step = tutorial.steps[currentStep];

  return (
    <View style={styles.container}>
      <View style={[styles.progressBar, { backgroundColor: theme.colors.border }]}>
        <Animated.View 
          style={[
            styles.progressFill, 
            { 
              backgroundColor: theme.colors.primary,
              width: progressAnim.interpolate({
                inputRange: [0, 100],
                outputRange: ['0%', '100%']
              })
            }
          ]} 
        />
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={[styles.header, { backgroundColor: theme.colors.cardBackground }]}>
          <Text 
            style={[styles.title, { color: theme.colors.text }]}
            accessibilityRole="header"
            accessibilityLabel={`Tutorial: ${tutorial.title}`}
          >
            {tutorial.title}
          </Text>
          <Text 
            style={[styles.description, { color: theme.colors.textSecondary }]}
            accessibilityLabel={tutorial.description}
          >
            {tutorial.description}
          </Text>
        </View>
        
        <Animated.View 
          style={[
            styles.stepContainer,
            {
              opacity: fadeAnim,
              transform: [{ translateX: slideAnim }]
            }
          ]}
        >
          <View style={styles.stepHeader}>
            <View 
              style={[styles.stepNumberContainer, { backgroundColor: theme.colors.primaryLight }]}
              accessibilityLabel={`Passo ${currentStep + 1} de ${totalSteps}`}
            >
              <Text style={[styles.stepNumber, { color: theme.colors.primary }]}>
                {currentStep + 1}
              </Text>
            </View>
            <View style={styles.stepTitleContainer}>
              <Text 
                style={[styles.stepTitle, { color: theme.colors.text }]}
                accessibilityRole="header"
                accessibilityLabel={step.title}
              >
                {step.title}
              </Text>
              <Text style={[styles.stepProgress, { color: theme.colors.textSecondary }]}>
                Passo {currentStep + 1} de {totalSteps}
              </Text>
            </View>
          </View>
          
          <Text 
            style={[styles.stepContent, { color: theme.colors.text }]}
            accessibilityLabel={step.content}
          >
            {step.content}
          </Text>
          
          <View style={styles.codeContainer}>
            <Text 
              style={[styles.codeLabel, { color: theme.colors.textSecondary }]}
              accessibilityLabel="Exemplo de código"
            >
              Código:
            </Text>
            <View style={[
              styles.codeBox,
              { 
                backgroundColor: theme.colors.codeBackground,
                borderColor: theme.colors.codeBorder,
                ...theme.shadows.small,
              }
            ]}>
              <Text 
                style={[styles.code, { color: theme.colors.text }]}
                accessibilityLabel={`Código: ${step.code}`}
              >
                {step.code}
              </Text>
            </View>
          </View>
        </Animated.View>
      </ScrollView>

      <View style={[
        styles.navigation,
        { 
          backgroundColor: theme.colors.cardBackground,
          borderTopColor: theme.colors.border,
          ...theme.shadows.medium,
        }
      ]}>
        <TouchableOpacity 
          style={[
            styles.navButton,
            { backgroundColor: theme.colors.primaryLight },
            currentStep === 0 && { backgroundColor: theme.colors.buttonDisabled }
          ]}
          onPress={handlePrevious}
          disabled={currentStep === 0}
          accessibilityLabel="Voltar para o passo anterior"
          accessibilityHint={currentStep === 0 ? "Você está no primeiro passo" : "Toque para voltar"}
        >
          <Text style={[
            styles.navButtonText,
            { color: theme.colors.primary },
            currentStep === 0 && { color: theme.colors.buttonTextDisabled }
          ]}>
            Anterior
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[
            styles.navButton,
            { 
              backgroundColor: currentStep === totalSteps - 1 
                ? theme.colors.primary 
                : theme.colors.primaryLight 
            },
            currentStep === totalSteps - 1 && { ...theme.shadows.small }
          ]}
          onPress={handleNext}
          accessibilityLabel={currentStep === totalSteps - 1 ? "Concluir tutorial" : "Ir para o próximo passo"}
          accessibilityHint={currentStep === totalSteps - 1 ? "Toque para voltar à lista de tutoriais" : "Toque para avançar"}
        >
          <Text style={[
            styles.navButtonText,
            { 
              color: currentStep === totalSteps - 1 
                ? theme.colors.background 
                : theme.colors.primary 
            }
          ]}>
            {currentStep === totalSteps - 1 ? 'Concluir' : 'Próximo'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  progressBar: {
    height: 3,
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  scrollView: {
    flex: 1,
    marginTop: 3,
  },
  header: {
    padding: 24,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.08)',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    opacity: 0.8,
  },
  stepContainer: {
    padding: 20,
  },
  stepHeader: {
    flexDirection: 'row',
    marginBottom: 24,
    alignItems: 'center',
  },
  stepNumberContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  stepNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  stepTitleContainer: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    letterSpacing: -0.3,
  },
  stepProgress: {
    fontSize: 13,
    opacity: 0.7,
  },
  stepContent: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 24,
    opacity: 0.9,
  },
  codeContainer: {
    marginTop: 20,
  },
  codeLabel: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: '500',
    opacity: 0.7,
  },
  codeBox: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
  code: {
    fontFamily: 'monospace',
    fontSize: 13,
    lineHeight: 20,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.08)',
    backgroundColor: 'rgba(255,255,255,0.95)',
  },
  navButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 6,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  navButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
});

export default TutorialContent; 