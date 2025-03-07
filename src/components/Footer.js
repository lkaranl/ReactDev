import React from 'react';
import { View, Text, StyleSheet, Linking, Pressable } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const handleOpenPortfolio = () => {
    Linking.openURL('https://lkaranl.github.io/');
  };

  return (
    <View style={[
      styles.footer,
      {
        backgroundColor: theme.colors.cardBackground,
        borderTopColor: theme.colors.border,
        ...theme.shadows.small,
      }
    ]}>
      <View style={styles.container}>
        <View style={styles.branding}>
          <Text style={[styles.logo, { color: theme.colors.primary }]}>
            ReactDev
          </Text>
          <Text style={[styles.copyright, { color: theme.colors.textSecondary }]}>
            © {currentYear}
          </Text>
        </View>

        <Pressable
          onPress={handleOpenPortfolio}
          style={({ pressed }) => [
            styles.devLink,
            { backgroundColor: pressed ? theme.colors.primaryLight : 'transparent' }
          ]}
          hitSlop={{ top: 8, bottom: 8, left: 12, right: 12 }}
        >
          <Text style={[styles.devText, { color: theme.colors.textSecondary }]}>
            desenvolvido por <Text style={{ color: theme.colors.primary }}>@karanluciano</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    borderTopWidth: 0.5,
    paddingVertical: 8,
  },
  container: {
    alignItems: 'center',
    gap: 4,
  },
  branding: {
    alignItems: 'center',
    gap: 1,
  },
  logo: {
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: -0.3,
  },
  copyright: {
    fontSize: 10,
    opacity: 0.7,
  },
  devLink: {
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 4,
  },
  devText: {
    fontSize: 10,
    opacity: 0.7,
  },
});

export default Footer; 