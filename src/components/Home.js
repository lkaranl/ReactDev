import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Animated, Pressable } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import HomeHeader from './HomeHeader';

const AnimatedTouchable = ({ children, onPress, style }) => {
  const scaleAnim = React.useRef(new Animated.Value(1)).current;
  
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
      <Animated.View style={[style, { transform: [{ scale: scaleAnim }] }]}>
        {children}
      </Animated.View>
    </Pressable>
  );
};

const Home = ({ onSelectCategory, onSelectExercises }) => {
  const { theme } = useTheme();

  const categories = [
    {
      id: 'react',
      title: 'React',
      description: 'Aprenda React do zero ao avançado',
      icon: '⚛️',
      color: '#61DAFB',
    },
    {
      id: 'reactNative',
      title: 'React Native',
      description: 'Desenvolva aplicativos mobile com React Native',
      icon: '📱',
      color: '#00D8FF',
    },
  ];

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <HomeHeader />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
            Escolha uma categoria para começar
          </Text>

          <View style={styles.categoriesContainer}>
            {categories.map((category) => (
              <AnimatedTouchable
                key={category.id}
                style={[
                  styles.categoryCard,
                  { 
                    backgroundColor: theme.colors.cardBackground,
                    ...theme.shadows.medium,
                  }
                ]}
                onPress={() => onSelectCategory(category.id)}
              >
                <View style={[styles.iconContainer, { backgroundColor: `${category.color}20` }]}>
                  <Text style={styles.icon}>{category.icon}</Text>
                </View>
                <View style={styles.categoryContent}>
                  <Text style={[styles.categoryTitle, { color: theme.colors.text }]}>
                    {category.title}
                  </Text>
                  <Text style={[styles.categoryDescription, { color: theme.colors.textSecondary }]}>
                    {category.description}
                  </Text>
                </View>
                <View style={[styles.arrowContainer, { backgroundColor: theme.colors.primaryLight }]}>
                  <Text style={[styles.arrow, { color: theme.colors.primary }]}>→</Text>
                </View>
              </AnimatedTouchable>
            ))}
          </View>

          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            Exercícios Práticos
          </Text>
          <Text style={[styles.sectionDescription, { color: theme.colors.textSecondary }]}>
            Pratique seus conhecimentos com exercícios interativos
          </Text>

          <View style={styles.exercisesContainer}>
            {categories.map((category) => (
              <AnimatedTouchable
                key={`exercise-${category.id}`}
                style={[
                  styles.exerciseCard,
                  { 
                    backgroundColor: theme.colors.cardBackground,
                    ...theme.shadows.medium,
                  }
                ]}
                onPress={() => onSelectExercises(category.id)}
              >
                <View style={[styles.exerciseIconContainer, { backgroundColor: `${category.color}20` }]}>
                  <Text style={styles.exerciseIcon}>{category.icon}</Text>
                </View>
                <View style={styles.exerciseContent}>
                  <Text style={[styles.exerciseTitle, { color: theme.colors.text }]}>
                    Exercícios de {category.title}
                  </Text>
                  <Text style={[styles.exerciseDescription, { color: theme.colors.textSecondary }]}>
                    Pratique com exemplos reais
                  </Text>
                </View>
                <View style={[styles.exerciseArrowContainer, { backgroundColor: theme.colors.primaryLight }]}>
                  <Text style={[styles.exerciseArrow, { color: theme.colors.primary }]}>→</Text>
                </View>
              </AnimatedTouchable>
            ))}
          </View>
        </View>
      </ScrollView>
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
  content: {
    paddingTop: 24,
    paddingBottom: 40,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
  },
  categoriesContainer: {
    padding: 20,
    gap: 20,
  },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
    borderRadius: 20,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  icon: {
    fontSize: 28,
  },
  categoryContent: {
    flex: 1,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
    letterSpacing: -0.3,
  },
  categoryDescription: {
    fontSize: 15,
    lineHeight: 22,
  },
  arrowContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
  arrow: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 8,
    paddingHorizontal: 20,
  },
  sectionDescription: {
    fontSize: 16,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  exercisesContainer: {
    padding: 20,
    gap: 16,
    paddingBottom: 40,
  },
  exerciseCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
  },
  exerciseIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  exerciseIcon: {
    fontSize: 24,
  },
  exerciseContent: {
    flex: 1,
  },
  exerciseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  exerciseDescription: {
    fontSize: 14,
  },
  exerciseArrowContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  exerciseArrow: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home; 