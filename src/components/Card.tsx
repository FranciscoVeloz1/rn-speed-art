import React from 'react';
import { vars } from '../styles/vars';
import { View, ViewStyle, StyleSheet } from 'react-native';

interface props {
  children: JSX.Element | JSX.Element[];
  style?: ViewStyle[];
  border?:
    | 'primary'
    | 'dark_primary'
    | 'very_dark_primary'
    | 'danger'
    | 'dark_danger'
    | 'success'
    | 'info'
    | 'dark_info'
    | 'secondary'
    | 'light_secondary'
    | 'very_light_secondary';
}

const Card = ({ children, style, border }: props) => {
  // Handling the background
  const handleBorder = () => {
    if (!border) return vars.colors.secondary;

    const color = Object.entries(vars.colors).find(([key, _value]) => key === border);
    return color![1];
  };

  const s = StyleSheet.create({
    card: {
      backgroundColor: '#ffffff',
      borderRadius: vars.radius,
      borderColor: handleBorder(),
      borderWidth: 1,
      width: '90%',
    },
  });

  return <View style={[s.card, style]}>{children}</View>;
};

export default Card;
