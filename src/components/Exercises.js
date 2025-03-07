import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { exercises } from '../data/exercisesData';

const Exercises = ({ category, onSelectExercise }) => {
  const { theme } = useTheme();
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);

  const categoryExercises = exercises[category] || [];
  
  const filteredExercises = selectedDifficulty 
    ? categoryExercises.filter(exercise => exercise.difficulty === selectedDifficulty)
    : categoryExercises;

  const difficulties = ['Iniciante', 'Intermediário', 'Avançado'];

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>
        Exercícios Práticos - {category === 'react' ? 'React' : 'React Native'}
      </Text>
      
      <View style={styles.filterContainer}>
        <Text style={[styles.filterLabel, { color: theme.colors.textSecondary }]}>
          Filtrar por dificuldade:
        </Text>
        <View style={styles.difficultyButtons}>
          <TouchableOpacity
            style={[
              styles.difficultyButton,
              { backgroundColor: selectedDifficulty === null ? theme.colors.primary : theme.colors.cardBackground }
            ]}
            onPress={() => setSelectedDifficulty(null)}
          >
            <Text style={[
              styles.difficultyButtonText,
              { color: selectedDifficulty === null ? '#fff' : theme.colors.textSecondary }
            ]}>
              Todos
            </Text>
          </TouchableOpacity>
          
          {difficulties.map(difficulty => (
            <TouchableOpacity
              key={difficulty}
              style={[
                styles.difficultyButton,
                { backgroundColor: selectedDifficulty === difficulty ? theme.colors.primary : theme.colors.cardBackground }
              ]}
              onPress={() => setSelectedDifficulty(difficulty)}
            >
              <Text style={[
                styles.difficultyButtonText,
                { color: selectedDifficulty === difficulty ? '#fff' : theme.colors.textSecondary }
              ]}>
                {difficulty}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      
      <ScrollView style={styles.exercisesList}>
        {filteredExercises.length > 0 ? (
          filteredExercises.map(exercise => (
            <TouchableOpacity
              key={exercise.id}
              style={[
                styles.exerciseCard,
                { 
                  backgroundColor: theme.colors.cardBackground,
                  ...theme.shadows.medium,
                }
              ]}
              onPress={() => onSelectExercise(exercise)}
            >
              <View style={styles.exerciseHeader}>
                <Text style={[styles.exerciseTitle, { color: theme.colors.text }]}>
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
              
              <Text style={[styles.exerciseDescription, { color: theme.colors.textSecondary }]}>
                {exercise.description}
              </Text>
              
              <View style={styles.requirementsContainer}>
                <Text style={[styles.requirementsTitle, { color: theme.colors.text }]}>
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
              
              <View style={styles.startButtonContainer}>
                <TouchableOpacity
                  style={[styles.startButton, { backgroundColor: theme.colors.primary }]}
                  onPress={() => onSelectExercise(exercise)}
                >
                  <Text style={styles.startButtonText}>Iniciar Exercício</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={[styles.emptyText, { color: theme.colors.textSecondary }]}>
              Nenhum exercício encontrado para esta dificuldade.
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  filterContainer: {
    marginBottom: 20,
  },
  filterLabel: {
    fontSize: 16,
    marginBottom: 8,
  },
  difficultyButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  difficultyButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    minWidth: 80,
    alignItems: 'center',
  },
  difficultyButtonText: {
    fontWeight: '600',
  },
  exercisesList: {
    flex: 1,
  },
  exerciseCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  exerciseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  exerciseTitle: {
    fontSize: 18,
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
  exerciseDescription: {
    fontSize: 14,
    marginBottom: 12,
    lineHeight: 20,
  },
  requirementsContainer: {
    marginBottom: 16,
  },
  requirementsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  requirementItem: {
    fontSize: 14,
    marginBottom: 4,
    paddingLeft: 8,
  },
  startButtonContainer: {
    alignItems: 'center',
  },
  startButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    minWidth: 150,
    alignItems: 'center',
  },
  startButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  emptyContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Exercises; 