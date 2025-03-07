import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, AccessibilityInfo } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { vs, darcula } from 'react-syntax-highlighter/styles/prism';
import * as Clipboard from 'expo-clipboard';

const CodeBlock = ({ 
  code = '', 
  language = 'javascript',
  documentationUrl = null 
}) => {
  const { theme, isDarkMode } = useTheme();

  const handleOpenDocs = () => {
    if (documentationUrl) {
      Linking.openURL(documentationUrl);
      AccessibilityInfo.announceForAccessibility('Abrindo documentação externa');
    }
  };

  const handleCopyCode = async () => {
    await Clipboard.setStringAsync(code);
    AccessibilityInfo.announceForAccessibility('Código copiado para a área de transferência');
  };

  // Escolha o estilo baseado no tema
  const syntaxStyle = isDarkMode ? darcula : vs;

  return (
    <View 
      style={styles.container}
      accessible={true}
      accessibilityLabel={`Exemplo de código em ${language}`}
      accessibilityHint="Este é um bloco de código com syntax highlighting"
    >
      <View style={[
        styles.codeContainer, 
        { 
          backgroundColor: theme.colors.codeBackground,
          borderColor: theme.colors.border 
        }
      ]}>
        <SyntaxHighlighter
          language={language}
          style={syntaxStyle}
          fontSize={13}
          highlighter="prism"
          customStyle={{
            backgroundColor: 'transparent',
            padding: 0,
            margin: 0,
            fontFamily: 'monospace',
          }}
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
    fontSize: 13,
    fontWeight: '500',
  },
});

export default CodeBlock; 