import { PlayerType } from './types';

const fetchPlayerUUID = async () => {
  // TODO: implement UUID fetch / generate
  const uuid = await Promise.resolve('FAKE');
  return uuid;
};

export const getPlayerUUID = (setPlayer: (player: PlayerType) => void) => {
  fetchPlayerUUID().then((uuid: string) => {
    setPlayer({
      name: 'player',
      uuid,
    });
  });
};