import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, StatusBar } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const HomeHeader = () => {
  const { theme, isDarkMode, toggleTheme } = useTheme();

  return (
    <View style={[
      styles.header,
      {
        backgroundColor: theme.colors.cardBackground,
        borderBottomColor: theme.colors.border,
        ...theme.shadows.medium,
      }
    ]}>
      <View style={styles.statusBar} />
      <View style={styles.topBar}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color: theme.colors.text }]}>React Learning</Text>
        </View>
        <TouchableOpacity 
          style={[styles.themeButton, { backgroundColor: theme.colors.primaryLight }]}
          onPress={toggleTheme}
        >
          <Text style={[styles.themeButtonText, { color: theme.colors.primary }]}>
            {isDarkMode ? '☀️' : '🌙'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
  },
  statusBar: {
    height: Platform.OS === 'ios' ? 44 : StatusBar.currentHeight,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 56,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    marginRight: 40, // Para compensar o espaço do botão de tema
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: -0.5,
  },
  themeButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  themeButtonText: {
    fontSize: 18,
  },
});

export default HomeHeader; 