import React from 'react';
import { vars } from '../styles/vars';
import {
  TextInput,
  StyleSheet,
  ViewStyle,
  TextStyle,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';

interface props {
  placeholder: string;
  onChangeText: (text: string) => void;
  placeholderColor?: string;
  value?: string;
  style?: ViewStyle[] | TextStyle[];
  secureTextEntry?: boolean;
  onSubmitEditing?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
  keyboardType?: KeyboardTypeOptions;
  ref?: React.MutableRefObject<TextInput>;
  autoComplete?:
    | 'birthdate-day'
    | 'birthdate-full'
    | 'birthdate-month'
    | 'birthdate-year'
    | 'cc-csc'
    | 'cc-exp'
    | 'cc-exp-day'
    | 'cc-exp-month'
    | 'cc-exp-year'
    | 'cc-number'
    | 'email'
    | 'gender'
    | 'name'
    | 'name-family'
    | 'name-given'
    | 'name-middle'
    | 'name-middle-initial'
    | 'name-prefix'
    | 'name-suffix'
    | 'password'
    | 'password-new'
    | 'postal-address'
    | 'postal-address-country'
    | 'postal-address-extended'
    | 'postal-address-extended-postal-code'
    | 'postal-address-locality'
    | 'postal-address-region'
    | 'postal-code'
    | 'street-address'
    | 'sms-otp'
    | 'tel'
    | 'tel-country-code'
    | 'tel-national'
    | 'tel-device'
    | 'username'
    | 'username-new'
    | 'off';
}

const Input = ({
  style,
  value,
  placeholder,
  placeholderColor,
  autoComplete,
  secureTextEntry,
  onSubmitEditing,
  keyboardType,
  onChangeText,
  ref,
}: props) => {
  return (
    <TextInput
      style={[s.input, style]}
      value={value}
      autoComplete={autoComplete}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      onSubmitEditing={onSubmitEditing}
      keyboardType={keyboardType}
      onChangeText={onChangeText}
      placeholderTextColor={placeholderColor ? placeholderColor : vars.colors.secondary}
      ref={ref}
    />
  );
};

export default Input;

const s = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: vars.radius,
    borderColor: vars.colors.secondary,
    height: 44,
    width: '90%',
    backgroundColor: '#ffffff',
  },
});
