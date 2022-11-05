import { View, StyleSheet, ViewStyle } from 'react-native';
import React from 'react';

interface props {
  children: JSX.Element | JSX.Element[];
  styles?: ViewStyle[];
}

const Container = ({ children, styles }: props) => {
  return <View style={[s.container, styles]}>{children}</View>;
};

export default Container;

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
