import React from 'react';
import { vars } from '../styles/vars';
import { View, ViewStyle, StyleSheet } from 'react-native';

interface props {
  children: JSX.Element | JSX.Element[];
  style?: ViewStyle[];
}

const Shadow = ({ children, style }: props) => {
  return <View style={[s.shadow, s.elevation, style]}>{children}</View>;
};

export default Shadow;

const s = StyleSheet.create({
  shadow: {
    backgroundColor: '#ffffff',
    borderRadius: vars.radius,
  },

  elevation: {
    elevation: 20,
    shadowColor: '#000000',
  },
});
