import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Provider as PaperProvider } from 'react-native-paper';
import Menu from './components/Menu';
import PreferencePicker from './components/PreferencePicker';
import { GameType, PlayerType, PreferenceType } from './types';
import { getPlayerUUID } from './lib';

const EXAMPLE_OPTIONS: PreferenceType[] = [
  'Eating a baguette',
  'Doing extra work after hours',
  'The Christmas season',
  'Watching a mediocre movie',
  'Playing a board game',
];
export default function App() {
  const [player, setPlayer] = useState<PlayerType | null>(null);
  const [gameState, setGameState] = useState<GameType | null>(null);
  const [preferences, setPreferences] = useState<PreferenceType[]>(EXAMPLE_OPTIONS);
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  useEffect(() => getPlayerUUID(setPlayer), []);

  const setPlayerName = (name: string) => setPlayer({ uuid: '', ...player, name });

  let content = gameState ? (
    <PreferencePicker preferences={preferences} onUpdate={setPreferences} />
  ) : (
      <Menu playerName={player?.name || ''} setPlayerName={setPlayerName} />
    );

  console.log(player?.name);

  if (!fontsLoaded) return <AppLoading />;

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        {content}
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    fontFamily: 'Roboto_400Regular',
  },
});
