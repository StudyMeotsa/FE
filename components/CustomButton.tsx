import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface CustomButtonProps {
  label: string;
  size?: "large" | "medium" | "small";
  color?: "white" | "brown" | "darkBrown";
}

function CustomButton({label, size = "small", color = "white"}: CustomButtonProps) {
  // color(배경색) 설정하면 자동으로 text 색 바뀜
  const textVariantStyle = color === 'brown' || color === 'darkBrown'
    ? styles.textWhite
    : styles.textBrown;
  
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
  // 제일 긴 버튼은 color='darkBrown'으로 사용해주세요.
  large: {
    width: 327,
    height: 56,
    borderRadius: 16,
    
    // iOS용 그림자 속성
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // Android용 그림자 속성
    elevation: 4,
  },
  white: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#572908",
  },
  brown: {
    backgroundColor: "#976A50",
  },
  darkBrown: {
    backgroundColor: "#794E47"
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: '#572908',
    letterSpacing: 0.4,
    lineHeight: 20,
  },
  textBrown: {
    color: '#572908',
  },
  textWhite: {
    color: '#FFFFFF',
  },
  pressed: {
    opacity: 0.8,
  }
});

export default CustomButton;