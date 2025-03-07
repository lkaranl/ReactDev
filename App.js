import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'react-native';
import TutorialList from './src/components/TutorialList';
import TutorialContent from './src/components/TutorialContent';
import Header from './src/components/Header';
import Home from './src/components/Home';
import Footer from './src/components/Footer';
import { ThemeProvider } from './src/context/ThemeContext';
import { tutorials } from './src/data/mockData';
import { useTheme } from './src/context/ThemeContext';

function AppContent() {
  const { theme, isDarkMode } = useTheme();
  const [selectedTutorial, setSelectedTutorial] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectTutorial = (tutorial) => {
    setSelectedTutorial(tutorial);
  };

  const handleBack = () => {
    if (selectedTutorial) {
      setSelectedTutorial(null);
    } else {
      setSelectedCategory(null);
    }
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const renderContent = () => {
    if (!selectedCategory) {
      return (
        <View style={styles.screenContainer}>
          <Home onSelectCategory={handleSelectCategory} />
          <Footer />
        </View>
      );
    }

    if (selectedTutorial) {
      return (
        <View style={styles.screenContainer}>
          <Header onBack={handleBack} />
          <View style={styles.content}>
            <TutorialContent tutorial={selectedTutorial} onBack={handleBack} />
          </View>
          <Footer />
        </View>
      );
    }

    return (
      <View style={styles.screenContainer}>
        <Header onBack={handleBack} />
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
        backgroundColor={theme.colors.cardBackground}
        animated={true}
      />
      {renderContent()}
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
