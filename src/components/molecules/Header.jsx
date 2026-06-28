import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const Header = ({
  navigation,
  title = "GasApp",
  showBack = true,
}) => {

  return (

    <View style={styles.container}>

      <View style={styles.left}>

        {showBack && (

          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >

            <Ionicons
              name="arrow-back"
              size={28}
              color="#0057D9"
            />

          </TouchableOpacity>

        )}

      </View>

     

      <View style={styles.center}>

        <Text style={styles.title}>
          {title}
        </Text>

      </View>

   

      <View style={styles.right}>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("CartPage")
          }
        >

          <Ionicons
            name="cart-outline"
            size={28}
            color="#0057D9"
          />

        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginLeft: 20 }}
          onPress={() =>
            navigation.navigate("ProfilePage")
          }
        >

          <Ionicons
            name="person-circle-outline"
            size={34}
            color="#0057D9"
          />

        </TouchableOpacity>

      </View>

    </View>

  );

};

export default Header;

const styles = StyleSheet.create({

  container: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    backgroundColor: "white",
    elevation: 5,
    marginBottom: 15,

  },

  left: {
    width: 40,
  },

  center: {
    flex: 1,
    alignItems: "center",
  },

  right: {
    width: 90,
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0057D9",

  },

});