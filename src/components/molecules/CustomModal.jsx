import React from "react";

import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const CustomModal = ({
  visible,
  title,
  message,
  buttonText,
  onPress,
}) => {

  return (

    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >

      <View style={styles.overlay}>

        <View style={styles.modalContainer}>

          <Text style={styles.icon}>
            ✅
          </Text>

          <Text style={styles.title}>
            {title}
          </Text>

          <Text style={styles.message}>
            {message}
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={onPress}
          >

            <Text style={styles.buttonText}>
              {buttonText}
            </Text>

          </TouchableOpacity>

        </View>

      </View>

    </Modal>

  );

};

export default CustomModal;

const styles = StyleSheet.create({

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalContainer: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    elevation: 8,
  },

  icon: {
    fontSize: 55,
    marginBottom: 15,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0057D9",
  },

  message: {
    marginTop: 10,
    textAlign: "center",
    color: "#555",
    fontSize: 16,
    lineHeight: 24,
  },

  button: {
    backgroundColor: "#0057D9",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginTop: 25,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },

});