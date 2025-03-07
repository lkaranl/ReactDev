import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, AccessibilityInfo } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CodeBlock = ({ 
  code = '', 
  language = 'javascript',
  documentationUrl = null 
}) => {
  const { theme } = useTheme();

  const handleOpenDocs = () => {
    if (documentationUrl) {
      Linking.openURL(documentationUrl);
      AccessibilityInfo.announceForAccessibility('Abrindo documentação externa');
    }
  };

  const handleCopyCode = () => {
    // Implementar funcionalidade de copiar código
    AccessibilityInfo.announceForAccessibility('Código copiado para a área de transferência');
  };

  const customStyle = {
    backgroundColor: 'transparent',
    padding: 0,
    margin: 0,
    fontFamily: 'monospace',
    fontSize: 13,
  };

  const customHighlighter = {
    'pre[class*="language-"]': {
      backgroundColor: 'transparent',
      padding: 0,
      margin: 0,
    },
    'code[class*="language-"]': {
      backgroundColor: 'transparent',
      padding: 0,
      margin: 0,
      fontFamily: 'monospace',
      fontSize: 13,
    },
    comment: {
      color: theme.isDark ? '#6A9955' : '#008000',
    },
    string: {
      color: theme.isDark ? '#FFA07A' : '#A31515',
    },
    keyword: {
      color: theme.isDark ? '#4FC3F7' : '#0000FF',
    },
    number: {
      color: theme.isDark ? '#81C784' : '#098658',
    },
    function: {
      color: theme.isDark ? '#FFD54F' : '#795E26',
    },
    operator: {
      color: theme.isDark ? '#4FC3F7' : '#0000FF',
    },
    punctuation: {
      color: theme.isDark ? '#4FC3F7' : '#0000FF',
    },
    'jsx-tag': {
      color: theme.isDark ? '#4FC3F7' : '#0000FF',
    },
    'jsx-attr': {
      color: theme.isDark ? '#B3E5FC' : '#001080',
    },
    'jsx-string': {
      color: theme.isDark ? '#FFA07A' : '#A31515',
    },
  };

  return (
    <View 
      style={styles.container}
      accessible={true}
      accessibilityLabel={`Exemplo de código em ${language}`}
      accessibilityHint="Este é um bloco de código com syntax highlighting"
    >
      <View style={[styles.codeContainer, { backgroundColor: theme.colors.codeBackground }]}>
        <SyntaxHighlighter
          language={language}
          fontSize={13}
          highlighter="prism"
          customStyle={customStyle}
          customHighlighter={customHighlighter}
        >
          {code}
        </SyntaxHighlighter>
      </View>
      
      <View style={styles.actions}>
        <TouchableOpacity 
          style={[styles.actionButton, { backgroundColor: theme.colors.primaryLight }]}
          onPress={handleCopyCode}
          accessibilityLabel="Copiar código"
          accessibilityHint="Toque para copiar o código para a área de transferência"
        >
          <Icon name="content-copy" size={16} color={theme.colors.primary} />
          <Text style={[styles.actionButtonText, { color: theme.colors.primary }]}>
            Copiar
          </Text>
        </TouchableOpacity>

        {documentationUrl && (
          <TouchableOpacity 
            style={[styles.actionButton, { backgroundColor: theme.colors.primaryLight }]}
            onPress={handleOpenDocs}
            accessibilityLabel="Ver documentação"
            accessibilityHint="Toque para abrir a documentação externa"
          >
            <Icon name="menu-book" size={16} color={theme.colors.primary} />
            <Text style={[styles.actionButtonText, { color: theme.colors.primary }]}>
              Ver documentação
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  codeContainer: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.08)',
    overflow: 'hidden',
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 8,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
  },
  actionButtonText: {
    marginLeft: 8,
    fontSize: 13,
    fontWeight: '500',
  },
});

export default CodeBlock; 