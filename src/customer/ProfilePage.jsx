import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { auth } from "../firebase/auth";
import { db } from "../firebase/firestore";
import {
  doc,
  getDoc,
} from "firebase/firestore";
import {
  signOut,
} from "firebase/auth";
import { Ionicons } from "@expo/vector-icons";


const ProfilePage = ({ navigation }) => {

  const [userData, setUserData] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetchUser();

  }, []);

  const fetchUser = async () => {

    try {

      const currentUser = auth.currentUser;

      if (currentUser) {

        const documentSnapshot = await getDoc(
          doc(
            db,
            "users",
            currentUser.uid
          )
        );

        if (documentSnapshot.exists()) {

          setUserData(
            documentSnapshot.data()
          );

        }

      }

    } catch (error) {

      console.log(error);

    }

    setLoading(false);

  };

  const logout = async () => {

    try {

      await signOut(auth);

      navigation.reset({
        index: 0,
        routes: [{ name: "SignupPage" }],
      });

    } catch (error) {

      alert(error.message);

    }

  };

  if (loading) {

    return (

      <View style={styles.loadingContainer}>

        <ActivityIndicator
          size="large"
          color="#0057D9"
        />

      </View>

    );

  }

  return (

    <View style={styles.container}>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() =>
          navigation.goBack()
        }
      >

        <Ionicons
          name="arrow-back"
          size={28}
          color="black"
        />

      </TouchableOpacity>

      <Text style={styles.heading}>
        My Profile
      </Text>

      <Image
        source={
          userData?.profileImage
            ? {
                uri: userData.profileImage,
              }
            : require("../assets/images/profile.png")
        }
        style={styles.image}
      />

      <View style={styles.card}>

        <Text style={styles.label}>
          Name
        </Text>

        <Text style={styles.value}>
          {userData?.name}
        </Text>

        <Text style={styles.label}>
          Email
        </Text>

        <Text style={styles.value}>
          {userData?.email}
        </Text>

        <Text style={styles.label}>
          Phone
        </Text>

        <Text style={styles.value}>
          {userData?.phone}
        </Text>

      </View>

      <TouchableOpacity
        style={styles.ordersButton}
        onPress={() =>
          navigation.navigate("OrdersPage")
        }
      >

        <Text style={styles.buttonText}>
          My Orders
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={logout}
      >

        <Text style={styles.buttonText}>
          Logout
        </Text>

      </TouchableOpacity>

    </View>

  );

};

export default ProfilePage;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 20,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  backButton: {
    marginTop: 10,
  },

  heading: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 25,
  },

  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
    alignSelf: "center",
    marginBottom: 25,
  },

  card: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    elevation: 5,
  },

  label: {
    fontSize: 14,
    color: "gray",
    marginTop: 15,
  },

  value: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },

  ordersButton: {
    marginTop: 40,
    backgroundColor: "#0057D9",
    padding: 15,
    borderRadius: 10,
  },

  logoutButton: {
    marginTop: 15,
    backgroundColor: "#E53935",
    padding: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
  },

});