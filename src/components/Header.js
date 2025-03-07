import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, StatusBar, Animated, Pressable } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const AnimatedButton = ({ children, onPress, style, disabled = false }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  
  const handlePressIn = () => {
    if (!disabled) {
      Animated.spring(scaleAnim, {
        toValue: 0.9,
        friction: 7,
        tension: 100,
        useNativeDriver: true,
      }).start();
    }
  };
  
  const handlePressOut = () => {
    if (!disabled) {
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        tension: 40,
        useNativeDriver: true,
      }).start();
    }
  };
  
  return (
    <Pressable
      onPress={disabled ? null : onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
    >
      <Animated.View 
        style={[
          style, 
          { 
            transform: [{ scale: scaleAnim }],
            opacity: disabled ? 0.5 : 1
          }
        ]}
      >
        {children}
      </Animated.View>
    </Pressable>
  );
};

const Header = ({ onBack }) => {
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
        <AnimatedButton 
          style={[styles.backButton, { backgroundColor: theme.colors.primaryLight }]} 
          onPress={onBack}
          disabled={!onBack}
        >
          <Text style={[styles.backText, { color: theme.colors.primary }]}>
            ←
          </Text>
        </AnimatedButton>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color: theme.colors.text }]}>React Learning</Text>
        </View>
        <AnimatedButton 
          style={[styles.themeButton, { backgroundColor: theme.colors.primaryLight }]}
          onPress={toggleTheme}
        >
          <Text style={[styles.themeButtonText, { color: theme.colors.primary }]}>
            {isDarkMode ? '☀️' : '🌙'}
          </Text>
        </AnimatedButton>
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
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  backText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 2, // Ajuste fino para centralizar visualmente
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    marginRight: 40,
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

export default Header; 