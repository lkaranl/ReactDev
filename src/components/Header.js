import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, StatusBar } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const Header = ({ onBack, onNavigate }) => {
  const { theme } = useTheme();

  const handleMenuPress = () => {
    onNavigate && onNavigate('menu');
  };

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
        {onBack ? (
          <TouchableOpacity 
            style={[styles.iconButton, { backgroundColor: theme.colors.primaryLight }]} 
            onPress={onBack}
          >
            <Text style={[styles.iconText, { color: theme.colors.primary }]}>
              ←
            </Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.iconPlaceholder} />
        )}

        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color: theme.colors.text }]}>
            Aprendendo React
          </Text>
        </View>

        {onNavigate ? (
          <TouchableOpacity 
            style={[styles.iconButton, { backgroundColor: theme.colors.primaryLight }]}
            onPress={handleMenuPress}
          >
            <Text style={[styles.iconText, { color: theme.colors.primary }]}>
              ⋮
            </Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.iconPlaceholder} />
        )}
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
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 56,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconPlaceholder: {
    width: 40,
  },
  iconText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: -0.5,
  },
});

export default Header; 