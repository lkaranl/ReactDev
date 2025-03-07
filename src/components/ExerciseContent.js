import React, { useState, useRef, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Animated, 
  Easing,
  Pressable
} from 'react-native';
import { useTheme } from '../context/ThemeContext';

const AnimatedButton = ({ onPress, style, textStyle, children, backgroundColor }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  
  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      friction: 8,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };
  
  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 5,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };
  
  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View 
        style={[
          style, 
          { 
            transform: [{ scale: scaleAnim }],
            backgroundColor
          }
        ]}
      >
        <Text style={textStyle}>{children}</Text>
      </Animated.View>
    </Pressable>
  );
};

const ExerciseContent = ({ exercise, onBack }) => {
  const { theme } = useTheme();
  const [showSolution, setShowSolution] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const solutionFadeAnim = useRef(new Animated.Value(0)).current;
  const solutionSlideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 400,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  useEffect(() => {
    if (showSolution) {
      Animated.parallel([
        Animated.timing(solutionFadeAnim, {
          toValue: 1,
          duration: 400,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(solutionSlideAnim, {
          toValue: 0,
          duration: 400,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        })
      ]).start();
    } else {
      solutionFadeAnim.setValue(0);
      solutionSlideAnim.setValue(30);
    }
  }, [showSolution]);

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      showsVerticalScrollIndicator={false}
    >
      <Animated.View 
        style={{ 
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }]
        }}
      >
        <View style={styles.header}>
          <Text style={[styles.title, { color: theme.colors.text }]}>
            {exercise.title}
          </Text>
          <View style={[
            styles.difficultyBadge,
            { 
              backgroundColor: 
                exercise.difficulty === 'Iniciante' ? '#4CAF50' :
                exercise.difficulty === 'Intermediário' ? '#FF9800' : '#F44336'
            }
          ]}>
            <Text style={styles.difficultyBadgeText}>{exercise.difficulty}</Text>
          </View>
        </View>

        <Text style={[styles.description, { color: theme.colors.textSecondary }]}>
          {exercise.description}
        </Text>

        <View style={styles.requirementsContainer}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            Requisitos:
          </Text>
          {exercise.requirements.map((req, index) => (
            <Text 
              key={index} 
              style={[styles.requirementItem, { color: theme.colors.textSecondary }]}
            >
              • {req}
            </Text>
          ))}
        </View>

        <View style={styles.codeContainer}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            Código Inicial:
          </Text>
          <View style={[
            styles.codeBlock, 
            { 
              backgroundColor: theme.colors.codeBackground,
              borderColor: theme.colors.border,
            }
          ]}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Text style={[styles.code, { color: theme.colors.codeText }]}>
                {exercise.initialCode}
              </Text>
            </ScrollView>
          </View>
        </View>

        <View style={styles.solutionContainer}>
          <AnimatedButton
            style={styles.solutionButton}
            textStyle={styles.solutionButtonText}
            onPress={() => setShowSolution(!showSolution)}
            backgroundColor={theme.colors.primary}
          >
            {showSolution ? 'Ocultar Solução' : 'Ver Solução'}
          </AnimatedButton>

          {showSolution && (
            <Animated.View 
              style={[
                styles.solutionContent,
                {
                  opacity: solutionFadeAnim,
                  transform: [{ translateY: solutionSlideAnim }]
                }
              ]}
            >
              <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
                Solução:
              </Text>
              <View style={[
                styles.codeBlock, 
                { 
                  backgroundColor: theme.colors.codeBackground,
                  borderColor: theme.colors.border,
                }
              ]}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <Text style={[styles.code, { color: theme.colors.codeText }]}>
                    {exercise.solution}
                  </Text>
                </ScrollView>
              </View>
            </Animated.View>
          )}
        </View>

        <View style={styles.buttonContainer}>
          <AnimatedButton
            style={[
              styles.backButton, 
              { borderColor: theme.colors.primary }
            ]}
            textStyle={[styles.backButtonText, { color: theme.colors.primary }]}
            onPress={onBack}
            backgroundColor={theme.colors.cardBackground}
          >
            Voltar para Exercícios
          </AnimatedButton>
        </View>
      </Animated.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
  },
  difficultyBadge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  difficultyBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 24,
  },
  requirementsContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  requirementItem: {
    fontSize: 16,
    marginBottom: 8,
    paddingLeft: 8,
    lineHeight: 22,
  },
  codeContainer: {
    marginBottom: 24,
  },
  codeBlock: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  code: {
    fontFamily: 'monospace',
    fontSize: 14,
    lineHeight: 20,
  },
  solutionContainer: {
    marginBottom: 24,
  },
  solutionButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 16,
  },
  solutionButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  solutionContent: {
    marginTop: 8,
  },
  buttonContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  backButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    borderWidth: 1,
  },
  backButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ExerciseContent; 