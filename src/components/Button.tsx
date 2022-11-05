import React from "react";
import { vars } from "../styles/vars";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from "react-native";

interface props {
  text: string;
  styles?: ViewStyle[];
  textStyles?: TextStyle[];
  onPress: Function;
  bg?:
    | "primary"
    | "dark_primary"
    | "very_dark_primary"
    | "danger"
    | "dark_danger"
    | "success"
    | "info"
    | "dark_info"
    | "secondary"
    | "light_secondary"
    | "very_light_secondary";
}

const Button = ({ text, styles, textStyles, onPress, bg }: props) => {
  // Handling the background
  const handleBg = () => {
    if (!bg) return vars.colors.primary;

    const color = Object.entries(vars.colors).find(
      ([key, _value]) => key === bg
    );
    return color![1];
  };

  // Handling the text color
  const handleColorText = () => {
    if (!bg) return "#FFFFFF";
    if (bg.split("_").includes("secondary")) return "#000000";
    return "#FFFFFF";
  };

  const s = StyleSheet.create({
    button: {
      backgroundColor: handleBg(),
      paddingVertical: 8,
      paddingHorizontal: 14,
      borderRadius: vars.radius,
    },

    buttonText: {
      fontSize: 16,
      color: handleColorText(),
      textAlign: "center",
    },
  });

  return (
    <TouchableOpacity style={[s.button, styles]} onPress={() => onPress()}>
      <Text style={[s.buttonText, textStyles]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
