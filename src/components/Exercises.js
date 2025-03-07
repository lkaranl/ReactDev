import React, { useState, useRef, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  Animated, 
  Pressable,
  Easing
} from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { exercises } from '../data/exercisesData';

const AnimatedTouchable = ({ children, onPress, style }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  
  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.97,
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
      <Animated.View style={[style, { transform: [{ scale: scaleAnim }] }]}>
        {children}
      </Animated.View>
    </Pressable>
  );
};

const DifficultyButton = ({ title, isSelected, onPress, theme }) => {
  return (
    <TouchableOpacity
      style={[
        styles.difficultyButton,
        { 
          backgroundColor: isSelected ? theme.colors.primary : theme.colors.cardBackground,
          borderWidth: 1,
          borderColor: isSelected ? theme.colors.primary : theme.colors.border,
        }
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[
        styles.difficultyButtonText,
        { color: isSelected ? '#fff' : theme.colors.textSecondary }
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

// Componente para renderizar um item de exercício com animação
const ExerciseItem = ({ exercise, index, onSelectExercise, theme }) => {
  const slideAnim = useRef(new Animated.Value(50)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        delay: index * 100,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 300,
        delay: index * 100,
        useNativeDriver: true,
      })
    ]).start();
  }, [index]);
  
  return (
    <Animated.View 
      style={{
        transform: [{ translateY: slideAnim }],
        opacity: opacityAnim
      }}
    >
      <AnimatedTouchable
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
          {exercise.requirements.map((req, reqIndex) => (
            <Text 
              key={reqIndex} 
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
            activeOpacity={0.8}
          >
            <Text style={styles.startButtonText}>Iniciar Exercício</Text>
          </TouchableOpacity>
        </View>
      </AnimatedTouchable>
    </Animated.View>
  );
};

const Exercises = ({ category, onSelectExercise }) => {
  const { theme } = useTheme();
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [exercisesData, setExercisesData] = useState([]);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  
  const categoryExercises = exercisesData[category] || [];
  
  const filteredExercises = selectedDifficulty 
    ? categoryExercises.filter(exercise => exercise.difficulty === selectedDifficulty)
    : categoryExercises;

  const difficulties = ['Iniciante', 'Intermediário', 'Avançado'];

  useEffect(() => {
    // Simular carregamento de dados
    setTimeout(() => {
      setExercisesData(require('../data/exercisesData').exercises);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }).start();
    }, 300);
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Animated.View style={[styles.headerContainer, { opacity: fadeAnim }]}>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          Exercícios Práticos - {category === 'react' ? 'React' : 'React Native'}
        </Text>
        
        <View style={styles.filterContainer}>
          <Text style={[styles.filterLabel, { color: theme.colors.textSecondary }]}>
            Filtrar por dificuldade:
          </Text>
          <View style={styles.difficultyButtons}>
            <DifficultyButton 
              title="Todos" 
              isSelected={selectedDifficulty === null}
              onPress={() => setSelectedDifficulty(null)}
              theme={theme}
            />
            
            {difficulties.map(difficulty => (
              <DifficultyButton
                key={difficulty}
                title={difficulty}
                isSelected={selectedDifficulty === difficulty}
                onPress={() => setSelectedDifficulty(difficulty)}
                theme={theme}
              />
            ))}
          </View>
        </View>
      </Animated.View>
      
      <ScrollView 
        style={styles.exercisesList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.exercisesListContent}
      >
        <Animated.View style={{ opacity: fadeAnim }}>
          {filteredExercises.length > 0 ? (
            filteredExercises.map((exercise, index) => (
              <ExerciseItem 
                key={exercise.id}
                exercise={exercise}
                index={index}
                onSelectExercise={onSelectExercise}
                theme={theme}
              />
            ))
          ) : (
            <View style={styles.emptyContainer}>
              <Text style={[styles.emptyText, { color: theme.colors.textSecondary }]}>
                Nenhum exercício encontrado para esta dificuldade.
              </Text>
            </View>
          )}
        </Animated.View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    padding: 16,
    paddingBottom: 0,
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
    marginBottom: 12,
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
  exercisesListContent: {
    padding: 16,
    paddingBottom: 40,
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
    marginTop: 40,
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Exercises; 