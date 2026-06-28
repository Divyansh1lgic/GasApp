import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";


const OrderSuccessPage = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
     
      <Text style={styles.icon}>
        ✅
      </Text>

      <Text style={styles.heading}>
        Order Placed Successfully
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate(
            "HomePage"
          )
        }
      >
        <Text style={styles.buttonText}>
          Back To Home
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default OrderSuccessPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    fontSize: 60,
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },

  button: {
    backgroundColor: "#0057D9",
    padding: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});