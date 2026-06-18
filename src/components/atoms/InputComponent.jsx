import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const InputComponent = ({placeholder, onchangeText, value}) => {
  return (
   <TextInput
   placeholder={placeholder}
   onChangeText={onchangeText}
   value={value}
   style={styles.input}
   />

  );
};

const styles = StyleSheet.create({
 input: {
  borderWidth: 1,
  borderColor: "#ddd",
  borderRadius: 10,
  padding: 15,
  marginVertical: 10,
 },
});