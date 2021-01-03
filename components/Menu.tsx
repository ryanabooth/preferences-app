import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, Button, TextInput, Title } from 'react-native-paper';

export type Props = {
  playerName: string;
  setPlayerName: (name: string) => void;
  joinGame: (gameCode: string) => void;
  createGame: () => void;
}
export default function Menu({ playerName, setPlayerName, joinGame, createGame }: Props) {
  const [gameCode, setGameCode] = useState<string>('');
  return (
    <>
      <Appbar>
        <Appbar.Content title="Main Menu" />
      </Appbar>

      <View style={styles.pageContainer}>
        <View style={styles.container}>
          <Title style={styles.title}>SET NAME</Title>
          <TextInput
            label="Nickname"
            value={playerName}
            onChangeText={text => setPlayerName(text)}
            mode="outlined"
          />
        </View>

        <View style={styles.container}>
          <Title style={styles.title}>JOIN GAME</Title>
          <View style={styles.nickname}>
            <TextInput
              label="Game code"
              maxLength={4}
              value={gameCode}
              onChangeText={text => setGameCode(text.toUpperCase())}
              mode="outlined"
            />
            <Button style={{ ...styles.button, ...styles.joinButton }} mode="contained" onPress={() => joinGame(gameCode)} disabled={gameCode.length < 4}>
              JOIN
            </Button>
          </View>
        </View>

        <View style={styles.container}>
          <Title style={styles.title}>CREATE GAME</Title>
          <Button style={styles.button} mode="contained" onPress={createGame}>
            CREATE
          </Button>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  pageContainer: {
    display: 'flex',
    width: '100%',
    padding: 20,
    justifyContent: 'flex-start',
    flex: 1,
  },
  container: {
    flex: 0,
    width: '100%',
    marginBottom: 25,
  },
  button: {
    padding: 10,
  },
  joinButton: {
    marginTop: 10,
  },
});