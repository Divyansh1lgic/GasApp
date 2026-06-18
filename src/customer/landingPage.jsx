import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import Button from "../components/atoms/Button";

const LandingPage = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <Image
        source={require("../assets/images/agrongas.jpg")}
        style={styles.image}
      />

      <Text style={styles.title}>
        Industrial Gas Solutions
      </Text>

      <Text style={styles.subtitle}>
        Reliable, Safe & Fast Delivery
      </Text>

          <Button
        title="Get Started"
        onPress={() =>
          navigation.navigate("LoginPage")
        }
      />

    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },

  image: {
    width: "100%",
    height: 450,
    borderRadius: 15,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },

  subtitle: {
    textAlign: "center",
    fontSize: 16,
    color: "gray",
    marginBottom: 30,
    marginTop: 10,
  },
});