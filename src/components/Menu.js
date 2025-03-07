import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
  Switch
} from 'react-native';
import { useTheme } from '../context/ThemeContext';

const Menu = ({ isVisible, onClose, onSelectOption }) => {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  const [animation] = useState(new Animated.Value(0));

  React.useEffect(() => {
    if (isVisible) {
      Animated.spring(animation, {
        toValue: 1,
        useNativeDriver: true,
        tension: 80,
        friction: 8,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible]);

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, 0],
  });

  const opacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const menuItems = [
    {
      id: 'theme',
      title: 'Tema Escuro',
      type: 'switch',
      value: isDarkMode,
      onValueChange: toggleTheme
    },
    {
      id: 'about',
      title: 'Sobre',
      type: 'button',
      onPress: () => {
        onSelectOption('about');
        onClose();
      }
    }
  ];

  if (!isVisible) return null;

  return (
    <Modal
      transparent
      visible={isVisible}
      onRequestClose={onClose}
      animationType="none"
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <Animated.View 
              style={[
                styles.menuContainer,
                {
                  backgroundColor: theme.colors.cardBackground,
                  borderColor: theme.colors.border,
                  transform: [{ translateY }],
                  opacity,
                  ...theme.shadows.medium,
                }
              ]}
            >
              {menuItems.map(item => (
                <View
                  key={item.id}
                  style={[
                    styles.menuItem,
                    { borderBottomColor: theme.colors.border }
                  ]}
                >
                  {item.type === 'switch' ? (
                    <>
                      <Text style={[styles.menuText, { color: theme.colors.text }]}>
                        {item.title}
                      </Text>
                      <Switch
                        value={item.value}
                        onValueChange={item.onValueChange}
                        trackColor={{ false: theme.colors.border, true: theme.colors.primary }}
                        thumbColor={theme.colors.cardBackground}
                      />
                    </>
                  ) : (
                    <TouchableOpacity
                      style={styles.menuButtonContainer}
                      onPress={item.onPress}
                    >
                      <Text style={[styles.menuText, { color: theme.colors.text }]}>
                        {item.title}
                      </Text>
                      <View style={styles.menuButton}>
                        <Text style={[styles.menuButtonText, { color: theme.colors.primary }]}>
                          →
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}
                </View>
              ))}
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menuContainer: {
    position: 'absolute',
    top: 100,
    right: 20,
    minWidth: 220,
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
  },
  menuText: {
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
  },
  menuButton: {
    padding: 4,
  },
  menuButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Menu; 