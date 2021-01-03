import React from 'react';
import { StyleSheet } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import Preference from './Preference';
import { PreferenceType } from '../types';

export type Props = {
  preferences: PreferenceType[];
  onUpdate: (preferences: PreferenceType[]) => void;
}
export default function PreferencePicker({ preferences, onUpdate }: Props) {
  return (
    <DraggableFlatList
      data={preferences}
      renderItem={Preference}
      keyExtractor={(item) => `draggable-item-${item}`}
      onDragEnd={({ data }) => onUpdate(data)}
    />
  );
}

const styles = StyleSheet.create({});