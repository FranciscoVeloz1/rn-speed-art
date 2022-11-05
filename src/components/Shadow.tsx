import React from 'react';
import { vars } from '../styles/vars';
import { View, ViewStyle, StyleSheet } from 'react-native';

interface props {
  children: JSX.Element | JSX.Element[];
  styles?: ViewStyle[];
}

const Shadow = ({ children, styles }: props) => {
  return <View style={[s.shadow, s.elevation, styles]}>{children}</View>;
};

export default Shadow;

const s = StyleSheet.create({
  shadow: {
    backgroundColor: '#ffffff',
    borderRadius: vars.radius,
    width: '90%',
  },

  elevation: {
    elevation: 20,
    shadowColor: '#000000',
  },
});
