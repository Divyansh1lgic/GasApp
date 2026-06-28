import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Formik } from "formik";
import * as Yup from "yup";

import { launchImageLibrary } from "react-native-image-picker";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import { auth } from "../firebase/auth";
import { db } from "../firebase/firestore";

import Button from "../components/atoms/Button";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required"),

  email: Yup.string()
    .email("Invalid Email")
    .required("Email is required"),

  number: Yup.string()
    .matches(
      /^[0-9]{10}$/,
      "Enter valid number"
    )
    .required("Phone number required"),

  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .required("Password required"),
});

const SignupPage = ({ navigation }) => {

  const [profileImage, setProfileImage] =
    useState(null);

  const pickImage = () => {

    launchImageLibrary(
      {
        mediaType: "photo",
      },
      response => {

        if (
          !response.didCancel &&
          response.assets
        ) {
          setProfileImage(
            response.assets[0].uri
          );
        }
      }
    );
  };

  return (
    <ScrollView
      contentContainerStyle={
        styles.container
      }
    >
      <Text style={styles.title}>
        Create Account
      </Text>

      <TouchableOpacity
        onPress={pickImage}
        style={styles.imageContainer}
      >
        {profileImage ? (
          <Image
            source={{
              uri: profileImage,
            }}
            style={styles.profileImage}
          />
        ) : (
          <Text>
            Choose Profile Picture
          </Text>
        )}
      </TouchableOpacity>

      <Formik
        initialValues={{
          name: "",
          email: "",
          number: "",
          password: "",
        }}
        validationSchema={
          SignupSchema
        }
        onSubmit={async (
          values
        ) => {
          try {

            const userCredential =
              await createUserWithEmailAndPassword(
                auth,
                values.email,
                values.password
              );

            const user =
              userCredential.user;

            await setDoc(
              doc(
                 db,
                "users",
                 user.uid
              ),
              {
                uid: user.uid,
                name: values.name,
                email: values.email,
                phone:
                  values.number,
                profileImage:
                  profileImage ||
                  "",
                createdAt:
                  new Date(),
              }
            );

            alert(
              "Signup Successful"
            );

            navigation.navigate(
              "HomePage"
            );

          } catch (error) {

            console.log(error);

            alert(
              error.message
            );
          }
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <TextInput
              placeholder="Name"
              style={styles.input}
              value={values.name}
              onChangeText={handleChange(
                "name"
              )}
              onBlur={handleBlur(
                "name"
              )}
            />

            {touched.name &&
              errors.name && (
                <Text
                  style={
                    styles.error
                  }
                >
                  {errors.name}
                </Text>
              )}

            <TextInput
              placeholder="Email"
              style={styles.input}
              value={values.email}
              onChangeText={handleChange(
                "email"
              )}
              onBlur={handleBlur(
                "email"
              )}
            />

            {touched.email &&
              errors.email && (
                <Text
                  style={
                    styles.error
                  }
                >
                  {errors.email}
                </Text>
              )}

            <TextInput
              placeholder="Phone Number"
              keyboardType="phone-pad"
              style={styles.input}
              value={values.number}
              onChangeText={handleChange(
                "number"
              )}
              onBlur={handleBlur(
                "number"
              )}
            />

            {touched.number &&
              errors.number && (
                <Text
                  style={
                    styles.error
                  }
                >
                  {errors.number}
                </Text>
              )}

            <TextInput
              placeholder="Password"
              secureTextEntry
              style={styles.input}
              value={values.password}
              onChangeText={handleChange(
                "password"
              )}
              onBlur={handleBlur(
                "password"
              )}
            />

            {touched.password &&
              errors.password && (
                <Text
                  style={
                    styles.error
                  }
                >
                  {errors.password}
                </Text>
              )}

            <Button
              title="Sign Up"
              onPress={
                handleSubmit
              }
            />
            <TouchableOpacity
              onPress={() => navigation.navigate("LoginPage")}
            >
              <Text
                style={{
                  marginTop: 20,
                  textAlign: "center",
                  color: "#0057D9",
                  fontWeight: "bold",
                }}
              >
                Already have an account? Login
              </Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

export default SignupPage;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 20,
  },

  imageContainer: {
    alignSelf: "center",
    marginBottom: 20,
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  profileImage: {
    width: "100%",
    height: "100%",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },

  error: {
    color: "red",
    marginBottom: 10,
  },
});