import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({title , onPress}) => {
  return (
  <>
  <TouchableOpacity style={styles.button} 
    onPress={onPress}>  

    <Text style={styles.text}>{title}</Text>

    </TouchableOpacity>

  </>
  );
};

export default Button
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2c80ff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});