import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CodeBlock = ({ code, language, documentationUrl }) => {
  const { theme } = useTheme();

  const handleOpenDocs = () => {
    if (documentationUrl) {
      Linking.openURL(documentationUrl);
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.codeContainer, { backgroundColor: theme.colors.codeBackground }]}>
        <SyntaxHighlighter
          language={language || 'javascript'}
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
      
      {documentationUrl && (
        <TouchableOpacity 
          style={[styles.docsButton, { backgroundColor: theme.colors.primaryLight }]}
          onPress={handleOpenDocs}
          accessibilityLabel="Ver documentação"
          accessibilityHint="Toque para abrir a documentação externa"
        >
          <Icon name="menu-book" size={16} color={theme.colors.primary} />
          <Text style={[styles.docsButtonText, { color: theme.colors.primary }]}>
            Ver documentação
          </Text>
        </TouchableOpacity>
      )}
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
  docsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  docsButtonText: {
    marginLeft: 8,
    fontSize: 13,
    fontWeight: '500',
  },
});

export default CodeBlock; 