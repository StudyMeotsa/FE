import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function UserThumbnail() {
  return(
    <View style={styles.container}>
      <Image source={require('@/assets/images/userImage.png')} style={styles.image}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 25.26,
    height: 25.26,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: "#000000",
    borderWidth: 1.2,
    backgroundColor: '#F0F0F0',
    marginLeft: 3,
  },
  image: {
    width: 25.26,
    height: 25.26,
  },
})