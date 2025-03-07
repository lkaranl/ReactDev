import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <View style={[
      styles.footer,
      {
        backgroundColor: theme.colors.cardBackground,
        borderTopColor: theme.colors.border,
      }
    ]}>
      <Text style={[styles.text, { color: theme.colors.textSecondary }]}>
        ReactDev • Desenvolvido por Karan Luciano
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
  },
});

export default Footer; 