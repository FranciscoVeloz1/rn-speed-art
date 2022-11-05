import { StyleSheet } from 'react-native';
import { vars } from './vars';

export const border = StyleSheet.create({
  border: {
    borderWidth: 1,
  },

  border_primary: {
    borderColor: vars.colors.primary,
  },

  border_dark_primary: {
    borderColor: vars.colors.dark_primary,
  },

  border_very_dark_primary: {
    borderColor: vars.colors.very_dark_primary,
  },

  border_info: {
    borderColor: vars.colors.info,
  },

  border_dark_info: {
    borderColor: vars.colors.dark_info,
  },

  border_danger: {
    borderColor: vars.colors.danger,
  },

  border_dark_danger: {
    borderColor: vars.colors.dark_danger,
  },

  border_success: {
    borderColor: vars.colors.success,
  },

  border_secondary: {
    borderColor: vars.colors.secondary,
  },

  border_light_secondary: {
    borderColor: vars.colors.light_secondary,
  },

  border_very_light_secondary: {
    borderColor: vars.colors.very_light_secondary,
  },

  border_dark: {
    borderColor: vars.colors.dark,
  },

  border_white: {
    borderColor: vars.colors.white,
  },
});
