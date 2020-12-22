import React from 'react';
import { TouchableOpacity, Text, Dimensions } from 'react-native';
import { PreferenceType } from '../types';

type ItemProps = {
  item: PreferenceType;
  index?: number;
  drag: () => void;
  isActive: boolean;
};

const Preference = ({ item, index, drag, isActive }: ItemProps) => {
  return (
    <TouchableOpacity
      style={{
        height: 100,
        backgroundColor: isActive ? "blue" : `rgb(${Math.floor(Math.random() * 51) + ((index ?? 0) * 51)}, 25, 150)`,
        alignItems: "center",
        justifyContent: "center",
        width: Dimensions.get('window').width,
      }}
      onPressIn={drag}
    >
      <Text
        style={{
          fontWeight: "bold",
          color: "white",
          fontSize: 24,
          padding: 20,
        }}
      >
        {item.label}
      </Text>
    </TouchableOpacity>
  );
};

export default Preference;
