import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, BackHandler } from 'react-native';
import { StatusBar } from 'react-native';
import TutorialList from './src/components/TutorialList';
import TutorialContent from './src/components/TutorialContent';
import Header from './src/components/Header';
import Home from './src/components/Home';
import Footer from './src/components/Footer';
import Exercises from './src/components/Exercises';
import ExerciseContent from './src/components/ExerciseContent';
import About from './src/components/About';
import { ThemeProvider } from './src/context/ThemeContext';
import { tutorials } from './src/data/mockData';
import { useTheme } from './src/context/ThemeContext';
import Menu from './src/components/Menu';

function AppContent() {
  const { theme, isDarkMode } = useTheme();
  const [selectedTutorial, setSelectedTutorial] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [viewMode, setViewMode] = useState('home'); // 'home', 'tutorials', 'exercises', 'about'
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleSelectTutorial = (tutorial) => {
    setSelectedTutorial(tutorial);
  };

  const handleBack = () => {
    if (selectedExercise) {
      setSelectedExercise(null);
      return true;
    } else if (selectedTutorial) {
      setSelectedTutorial(null);
      return true;
    } else if (viewMode === 'about') {
      setViewMode('home');
      return true;
    } else if (selectedCategory) {
      setSelectedCategory(null);
      setViewMode('home');
      return true;
    }
    return false;
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setViewMode('tutorials');
  };

  const handleSelectExercises = (category) => {
    setSelectedCategory(category);
    setViewMode('exercises');
  };

  const handleSelectExercise = (exercise) => {
    setSelectedExercise(exercise);
  };

  const handleNavigate = (screen) => {
    if (screen === 'menu') {
      setIsMenuVisible(true);
    } else {
      setViewMode(screen);
      setIsMenuVisible(false);
    }
  };

  const handleMenuClose = () => {
    setIsMenuVisible(false);
  };

  const handleMenuOption = (option) => {
    if (option === 'about') {
      setViewMode('about');
    }
    setIsMenuVisible(false);
  };

  useEffect(() => {
    const backAction = () => {
      if (isMenuVisible) {
        setIsMenuVisible(false);
        return true;
      }
      return handleBack();
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, [selectedExercise, selectedTutorial, selectedCategory, viewMode, isMenuVisible]);

  const renderContent = () => {
    if (viewMode === 'about') {
      return (
        <View style={styles.screenContainer}>
          <Header onBack={handleBack} onNavigate={handleNavigate} />
          <View style={styles.content}>
            <About />
          </View>
          <Footer />
        </View>
      );
    }

    if (viewMode === 'home') {
      return (
        <View style={styles.screenContainer}>
          <Header onNavigate={handleNavigate} />
          <Home 
            onSelectCategory={handleSelectCategory} 
            onSelectExercises={handleSelectExercises}
          />
          <Footer />
        </View>
      );
    }

    if (viewMode === 'exercises') {
      if (selectedExercise) {
        return (
          <View style={styles.screenContainer}>
            <Header onBack={handleBack} onNavigate={handleNavigate} />
            <View style={styles.content}>
              <ExerciseContent exercise={selectedExercise} onBack={handleBack} />
            </View>
            <Footer />
          </View>
        );
      }

      return (
        <View style={styles.screenContainer}>
          <Header onBack={handleBack} onNavigate={handleNavigate} />
          <View style={styles.content}>
            <Exercises
              category={selectedCategory}
              onSelectExercise={handleSelectExercise}
            />
          </View>
          <Footer />
        </View>
      );
    }

    if (selectedTutorial) {
      return (
        <View style={styles.screenContainer}>
          <Header onBack={handleBack} onNavigate={handleNavigate} />
          <View style={styles.content}>
            <TutorialContent tutorial={selectedTutorial} onBack={handleBack} />
          </View>
          <Footer />
        </View>
      );
    }

    return (
      <View style={styles.screenContainer}>
        <Header onBack={handleBack} onNavigate={handleNavigate} />
        <View style={styles.content}>
          <TutorialList
            tutorials={tutorials[selectedCategory]}
            onSelectTutorial={handleSelectTutorial}
          />
        </View>
        <Footer />
      </View>
    );
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? theme.colors.cardBackground : '#FFFFFF'}
        animated={true}
      />
      {renderContent()}
      <Menu 
        isVisible={isMenuVisible}
        onClose={handleMenuClose}
        onSelectOption={handleMenuOption}
      />
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
