import { View, StyleSheet, ViewStyle } from 'react-native';
import React from 'react';

interface props {
  children: JSX.Element | JSX.Element[];
  style?: ViewStyle[];
}

const Container = ({ children, style }: props) => {
  return <View style={[s.container, style]}>{children}</View>;
};

export default Container;

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
