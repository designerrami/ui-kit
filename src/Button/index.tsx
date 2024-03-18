import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ onPress, title, ...props }) => {
  return (
    <TouchableOpacity onPress={onPress} {...props}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
