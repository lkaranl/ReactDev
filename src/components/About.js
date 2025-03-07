import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Image, Animated, Pressable } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const SocialButton = ({ icon, label, url, theme }) => {
  const scaleAnim = React.useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    Linking.openURL(url);
  };

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
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View
        style={[
          styles.socialButton,
          {
            backgroundColor: theme.colors.primaryLight,
            transform: [{ scale: scaleAnim }]
          }
        ]}
      >
        <Text style={styles.socialIcon}>{icon}</Text>
        <Text style={[styles.socialLabel, { color: theme.colors.primary }]}>
          {label}
        </Text>
      </Animated.View>
    </Pressable>
  );
};

const About = () => {
  const { theme } = useTheme();

  const socialLinks = [
    {
      icon: '🔗',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/karan-luciano-2b7598159/'
    },
    {
      icon: '🌐',
      label: 'Portfolio',
      url: 'https://lkaranl.github.io/'
    },
    {
      icon: '📸',
      label: 'Instagram',
      url: 'https://www.instagram.com/'
    }
  ];

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={[styles.card, { 
        backgroundColor: theme.colors.cardBackground,
        borderColor: theme.colors.border,
        ...theme.shadows.medium,
      }]}>
        <View style={styles.appSection}>
          <View style={[styles.logoContainer, { backgroundColor: theme.colors.primaryLight }]}>
            <Text style={[styles.logoText, { color: theme.colors.primary }]}>⚛️</Text>
          </View>
          <Text style={[styles.appName, { color: theme.colors.text }]}>
            ReactDev
          </Text>
          <Text style={[styles.appVersion, { color: theme.colors.textSecondary }]}>
            Versão 1.0.0
          </Text>
        </View>

        <Text style={[styles.description, { color: theme.colors.textSecondary }]}>
          O ReactDev é uma plataforma educacional dedicada ao aprendizado de React e React Native.
          Nossa missão é fornecer recursos de alta qualidade para desenvolvedores dominarem essas tecnologias.
        </Text>

        <View style={styles.featuresContainer}>
          {[
            'Tutoriais Interativos',
            'Exercícios Práticos',
            'Interface Moderna',
            'Temas Claro e Escuro',
            'Código Aberto'
          ].map((feature, index) => (
            <View 
              key={index}
              style={[styles.featureItem, { backgroundColor: theme.colors.primaryLight }]}
            >
              <Text style={[styles.featureText, { color: theme.colors.primary }]}>
                {feature}
              </Text>
            </View>
          ))}
        </View>

        <View style={[styles.divider, { backgroundColor: theme.colors.border }]} />

        <View style={styles.developerSection}>
          <Text style={[styles.developerTitle, { color: theme.colors.textSecondary }]}>
            Desenvolvido por
          </Text>
          <View style={styles.developerInfo}>
            <View style={[styles.avatarContainer, { backgroundColor: theme.colors.primaryLight }]}>
              <Text style={[styles.avatarText, { color: theme.colors.primary }]}>KL</Text>
            </View>
            <View style={styles.developerTextContainer}>
              <Text style={[styles.developerName, { color: theme.colors.text }]}>
                Karan Luciano
              </Text>
              <Text style={[styles.developerRole, { color: theme.colors.textSecondary }]}>
                Desenvolvedor Full Stack
              </Text>
            </View>
          </View>

          <View style={styles.socialContainer}>
            {socialLinks.map((link, index) => (
              <SocialButton
                key={index}
                icon={link.icon}
                label={link.label}
                url={link.url}
                theme={theme}
              />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  card: {
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
  },
  appSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  logoText: {
    fontSize: 48,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  appVersion: {
    fontSize: 14,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 24,
    justifyContent: 'center',
  },
  featureItem: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  featureText: {
    fontSize: 14,
    fontWeight: '500',
  },
  divider: {
    height: 1,
    marginBottom: 24,
  },
  developerSection: {
    alignItems: 'center',
  },
  developerTitle: {
    fontSize: 14,
    marginBottom: 16,
  },
  developerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  developerTextContainer: {
    flex: 1,
  },
  developerName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  developerRole: {
    fontSize: 14,
  },
  socialContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    gap: 6,
  },
  socialIcon: {
    fontSize: 16,
  },
  socialLabel: {
    fontSize: 13,
    fontWeight: '500',
  },
});

export default About; 