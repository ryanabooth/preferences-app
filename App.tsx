import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import Preference from './components/Preference';
import { PreferenceType } from './types';

const EXAMPLE_OPTIONS: PreferenceType[] = [
  { label: 'Eating a baguette' },
  { label: 'Doing extra work after hours' },
  { label: 'The Christmas season' },
  { label: 'Watching a mediocre movie' },
  { label: 'Playing a board game' },
];
export default function App() {
  const [preferences, setPreferences] = useState<PreferenceType[]>(EXAMPLE_OPTIONS);
  return (
    <SafeAreaView style={styles.container}>
      <DraggableFlatList
        data={preferences}
        renderItem={Preference}
        keyExtractor={(item) => `draggable-item-${item.label}`}
        onDragEnd={({ data }) => setPreferences(data)}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
