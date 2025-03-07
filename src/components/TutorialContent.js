import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const TutorialContent = ({ tutorial, onBack }) => {
  const { theme } = useTheme();
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = tutorial.steps.length;

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const step = tutorial.steps[currentStep];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={[styles.header, { backgroundColor: theme.colors.cardBackground }]}>
          <Text style={[styles.title, { color: theme.colors.text }]}>{tutorial.title}</Text>
          <Text style={[styles.description, { color: theme.colors.textSecondary }]}>{tutorial.description}</Text>
        </View>
        
        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <View style={[styles.stepNumberContainer, { backgroundColor: theme.colors.primaryLight }]}>
              <Text style={[styles.stepNumber, { color: theme.colors.primary }]}>
                {currentStep + 1}
              </Text>
            </View>
            <View style={styles.stepTitleContainer}>
              <Text style={[styles.stepTitle, { color: theme.colors.text }]}>{step.title}</Text>
              <Text style={[styles.stepProgress, { color: theme.colors.textSecondary }]}>
                Passo {currentStep + 1} de {totalSteps}
              </Text>
            </View>
          </View>
          
          <Text style={[styles.stepContent, { color: theme.colors.text }]}>{step.content}</Text>
          
          <View style={styles.codeContainer}>
            <Text style={[styles.codeLabel, { color: theme.colors.textSecondary }]}>Código:</Text>
            <View style={[
              styles.codeBox,
              { 
                backgroundColor: theme.colors.codeBackground,
                borderColor: theme.colors.codeBorder,
                ...theme.shadows.small,
              }
            ]}>
              <Text style={[styles.code, { color: theme.colors.text }]}>{step.code}</Text>
            </View>
          </View>
        </View>
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
            { backgroundColor: theme.colors.primaryLight },
            currentStep === totalSteps - 1 && { backgroundColor: theme.colors.buttonDisabled }
          ]}
          onPress={handleNext}
          disabled={currentStep === totalSteps - 1}
        >
          <Text style={[
            styles.navButtonText,
            { color: theme.colors.primary },
            currentStep === totalSteps - 1 && { color: theme.colors.buttonTextDisabled }
          ]}>
            Próximo
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
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 32,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 12,
    letterSpacing: -0.5,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
  stepContainer: {
    padding: 24,
  },
  stepHeader: {
    flexDirection: 'row',
    marginBottom: 32,
  },
  stepNumberContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  stepNumber: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  stepTitleContainer: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 6,
    letterSpacing: -0.3,
  },
  stepProgress: {
    fontSize: 15,
  },
  stepContent: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 32,
  },
  codeContainer: {
    marginTop: 24,
  },
  codeLabel: {
    fontSize: 15,
    marginBottom: 12,
    fontWeight: '500',
  },
  codeBox: {
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
  },
  code: {
    fontFamily: 'monospace',
    fontSize: 14,
    lineHeight: 22,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderTopWidth: 1,
  },
  navButton: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 16,
    marginHorizontal: 8,
    alignItems: 'center',
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default TutorialContent; 