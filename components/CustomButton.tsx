import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface CustomButtonProps {
  label: string;
  size?: "large" | "medium" | "small";
  color?: "white" | "brown"
}

function CustomButton({label, size = "small", color = "white"}: CustomButtonProps) {
  const textVariantStyle = color === 'brown' 
    ? styles.textWhite
    : styles.textBlack;
  
  return (
    <Pressable style={({pressed}) => [styles.container, styles[size], styles[color], pressed && styles.pressed,]}>
      <Text style={[styles.text, textVariantStyle]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container:{
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  small: {
    width: 130,
    height: 60
  },
  medium: {
    width: 160,
    height: 60
  },
  large: {
    width: 327,
    height: 56,
    borderRadius: 16,
  },
  white: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "black",
  },
  brown: {
    backgroundColor: "#976A50",
  },
  text: {
    fontSize: 20,
    fontWeight: 500,
    color: '#000000',
    letterSpacing: 0.4,
    lineHeight: 20,
  },
  textBlack: {
    color: '#000000',
  },
  textWhite: {
    color: '#FFFFFF',
  },
  pressed: {
    opacity: 0.8,
  }
});

export default CustomButton;