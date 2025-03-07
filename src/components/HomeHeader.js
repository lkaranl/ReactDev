import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const HomeHeader = () => {
  const { theme } = useTheme();

  return (
    <View style={[
      styles.header,
      {
        backgroundColor: theme.colors.cardBackground,
        borderBottomColor: theme.colors.border,
        ...theme.shadows.medium,
      }
    ]} />
  );
};

const styles = StyleSheet.create({
  header: {
    height: 2,
    borderBottomWidth: 1,
  },
});

export default HomeHeader; 