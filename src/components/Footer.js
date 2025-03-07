import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const handleOpenGitHub = () => {
    Linking.openURL('https://github.com/karanluciano');
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
      <View style={styles.content}>
        <View style={styles.infoContainer}>
          <Text style={[styles.appName, { color: theme.colors.primary }]}>
            ReactDev
          </Text>
          <Text style={[styles.copyright, { color: theme.colors.textSecondary }]}>
            © {currentYear} Todos os direitos reservados
          </Text>
        </View>
        
        <TouchableOpacity 
          style={styles.authorContainer}
          onPress={handleOpenGitHub}
          activeOpacity={0.7}
        >
          <Text style={[styles.authorText, { color: theme.colors.textSecondary }]}>
            Desenvolvido por 
            <Text style={[styles.authorName, { color: theme.colors.text }]}> Karan Luciano</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopWidth: 1,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
  },
  appName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  copyright: {
    fontSize: 11,
  },
  authorContainer: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  authorText: {
    fontSize: 12,
  },
  authorName: {
    fontWeight: '600',
  },
});

export default Footer; 