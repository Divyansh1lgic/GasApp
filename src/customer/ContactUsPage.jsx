import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const ContactUsPage = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
        <Ionicons
          name="arrow-back"
          size={28}
          color="black"
        />
      </TouchableOpacity>

      <Text style={styles.heading}>
        Contact Us
      </Text>

      <Text style={styles.label}>
        Company Name
      </Text>

      <Text style={styles.value}>
        Shiv Enterprises
      </Text>

      <Text style={styles.label}>
        Phone
      </Text>

      <Text style={styles.value}>
        8303757555
      </Text>

      <Text style={styles.label}>
        WhatsApp
      </Text>

      <Text style={styles.value}>
        8303757555
      </Text>

      <Text style={styles.label}>
        Email
      </Text>

      <Text style={styles.value}>
        durgeshb.85@gmail.com
      </Text>

      <Text style={styles.label}>
        Address
      </Text>

      <Text style={styles.value}>
        255 LIG Jarauli Phase 1
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          Linking.openURL(
            "tel:8303757555"
          )
        }
      >
        <Text style={styles.buttonText}>
          Call Now
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default ContactUsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 20,
  },

  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
  },

  value: {
    fontSize: 16,
    color: "gray",
  },

  button: {
    backgroundColor: "#0057D9",
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});