import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const TutorialList = ({ tutorials, onSelectTutorial }) => {
  const { theme } = useTheme();

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={[
        styles.tutorialCard,
        { 
          backgroundColor: theme.colors.cardBackground,
          ...theme.shadows.medium,
        }
      ]}
      onPress={() => onSelectTutorial(item)}
    >
      <View style={styles.cardHeader}>
        <View style={[styles.numberContainer, { backgroundColor: theme.colors.primaryLight }]}>
          <Text style={[styles.number, { color: theme.colors.primary }]}>{index + 1}</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={[styles.tutorialTitle, { color: theme.colors.text }]}>{item.title}</Text>
          <Text style={[styles.tutorialDescription, { color: theme.colors.textSecondary }]} numberOfLines={2}>
            {item.description}
          </Text>
        </View>
      </View>
      
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { backgroundColor: theme.colors.progressBar }]}>
          <View style={[styles.progressFill, { backgroundColor: theme.colors.progressFill, width: '0%' }]} />
        </View>
        <View style={styles.stepInfo}>
          <Text style={[styles.stepCount, { color: theme.colors.textSecondary }]}>
            {item.steps.length} passos
          </Text>
          <Text style={[styles.stepTime, { color: theme.colors.textSecondary }]}>
            ~{Math.ceil(item.steps.length * 2)} min
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={tutorials}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={[
        styles.container,
        { backgroundColor: theme.colors.background }
      ]}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={<View style={{ height: 24 }} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
  },
  tutorialCard: {
    borderRadius: 20,
    padding: 24,
    marginBottom: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  numberContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  number: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleContainer: {
    flex: 1,
  },
  tutorialTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    letterSpacing: -0.3,
  },
  tutorialDescription: {
    fontSize: 15,
    lineHeight: 22,
  },
  progressContainer: {
    marginTop: 12,
  },
  progressBar: {
    height: 4,
    borderRadius: 2,
    marginBottom: 12,
  },
  progressFill: {
    height: '100%',
    borderRadius: 2,
  },
  stepInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stepCount: {
    fontSize: 14,
    fontWeight: '500',
  },
  stepTime: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default TutorialList; 