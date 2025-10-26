import React from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';

interface SubmitButtonProps {
  label: string;
}

function SubmitButton({label}: SubmitButtonProps) {
  return (
    <Pressable style= {({pressed}) => [styles.container, pressed && styles.pressed]}>
      <Image source={require("@/assets/images/plusIcon.png")}/>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 40,
    alignItems: 'center',
    width: 327,
    height: 75,
    backgroundColor: "#976A50",
    paddingHorizontal: 24
  },
  text: {
    color: "white",
    marginLeft: 15,
  },
  pressed: {
    opacity: 0.8
  }
});

export default SubmitButton;