import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { theme } = useTheme();

  const handleOpenGitHub = () => {
    Linking.openURL('https://github.com/karanluciano/ReactDev');
  };

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
        <Text style={[styles.title, { color: theme.colors.text }]}>
          Sobre o ReactDev
        </Text>
        
        <Text style={[styles.description, { color: theme.colors.textSecondary }]}>
          O ReactDev é uma plataforma de aprendizado dedicada ao desenvolvimento com React e React Native. 
          Nossa missão é fornecer conteúdo educacional de qualidade e recursos práticos para ajudar 
          desenvolvedores a dominarem essas tecnologias.
        </Text>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            Recursos
          </Text>
          <View style={styles.featureList}>
            {[
              'Tutoriais interativos',
              'Exercícios práticos',
              'Exemplos de código',
              'Dicas e melhores práticas',
              'Suporte a temas claro e escuro'
            ].map((feature, index) => (
              <View 
                key={index} 
                style={[styles.featureItem, { borderColor: theme.colors.border }]}
              >
                <Text style={[styles.featureText, { color: theme.colors.text }]}>
                  • {feature}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            Tecnologias
          </Text>
          <Text style={[styles.description, { color: theme.colors.textSecondary }]}>
            Desenvolvido com React Native e Expo, utilizando as melhores práticas 
            de desenvolvimento mobile e padrões modernos de UI/UX.
          </Text>
        </View>

        <TouchableOpacity
          style={[styles.githubButton, { backgroundColor: theme.colors.primary }]}
          onPress={handleOpenGitHub}
        >
          <Text style={styles.githubButtonText}>
            Ver no GitHub
          </Text>
        </TouchableOpacity>

        <View style={styles.section}>
          <Text style={[styles.version, { color: theme.colors.textSecondary }]}>
            Versão 1.0.0
          </Text>
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
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  featureList: {
    gap: 8,
  },
  featureItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
  },
  featureText: {
    fontSize: 16,
  },
  githubButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 24,
  },
  githubButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  version: {
    textAlign: 'center',
    fontSize: 14,
  },
});

export default About; 