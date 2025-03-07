import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const ExerciseContent = ({ exercise, onBack }) => {
  const { theme } = useTheme();
  const [showSolution, setShowSolution] = useState(false);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
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
        <View style={[styles.codeBlock, { backgroundColor: theme.colors.codeBackground }]}>
          <ScrollView horizontal>
            <Text style={[styles.code, { color: theme.colors.codeText }]}>
              {exercise.initialCode}
            </Text>
          </ScrollView>
        </View>
      </View>

      <View style={styles.solutionContainer}>
        <TouchableOpacity
          style={[
            styles.solutionButton,
            { backgroundColor: theme.colors.primary }
          ]}
          onPress={() => setShowSolution(!showSolution)}
        >
          <Text style={styles.solutionButtonText}>
            {showSolution ? 'Ocultar Solução' : 'Ver Solução'}
          </Text>
        </TouchableOpacity>

        {showSolution && (
          <View style={styles.solutionContent}>
            <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
              Solução:
            </Text>
            <View style={[styles.codeBlock, { backgroundColor: theme.colors.codeBackground }]}>
              <ScrollView horizontal>
                <Text style={[styles.code, { color: theme.colors.codeText }]}>
                  {exercise.solution}
                </Text>
              </ScrollView>
            </View>
          </View>
        )}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.backButton, { backgroundColor: theme.colors.cardBackground }]}
          onPress={onBack}
        >
          <Text style={[styles.backButtonText, { color: theme.colors.primary }]}>
            Voltar para Exercícios
          </Text>
        </TouchableOpacity>
      </View>
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
    borderColor: 'transparent',
  },
  backButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ExerciseContent; 