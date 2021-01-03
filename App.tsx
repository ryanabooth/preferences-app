import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import PreferencePicker from './components/PreferencePicker';
import { PreferenceType } from './types';

const EXAMPLE_OPTIONS: PreferenceType[] = [
  'Eating a baguette',
  'Doing extra work after hours',
  'The Christmas season',
  'Watching a mediocre movie',
  'Playing a board game',
];
export default function App() {
  const [preferences, setPreferences] = useState<PreferenceType[]>(EXAMPLE_OPTIONS);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <PreferencePicker preferences={preferences} onUpdate={setPreferences} />
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
