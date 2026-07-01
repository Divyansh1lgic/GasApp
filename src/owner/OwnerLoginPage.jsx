import React from "react";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
} from "react-native";

import { Formik } from "formik";
import * as Yup from "yup";

import Button from "../components/atoms/Button";

const OwnerSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email")
    .required("Email Required"),

  password: Yup.string()
    .min(6)
    .required("Password Required"),
});

const OwnerLoginPage = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/images/loginpage.jpg")}
      style={styles.background}
    >
      <View style={styles.overlay}>

        <Text style={styles.title}>
          Owner Login
        </Text>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}

          validationSchema={OwnerSchema}

          onSubmit={(values) => {

            if (
              values.email === "owner@gmail.com" &&
              values.password === "12345678"
            ) {
              navigation.replace("OwnerHomePage");
            } else {
              alert("Invalid Owner Credentials");
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
                placeholder="Owner Email"
                style={styles.input}
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
              />

              {touched.email && errors.email && (
                <Text style={styles.error}>
                  {errors.email}
                </Text>
              )}

              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.input}
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
              />

              {touched.password && errors.password && (
                <Text style={styles.error}>
                  {errors.password}
                </Text>
              )}

              <Button
                title="Login as Owner"
                onPress={handleSubmit}
              />

            </>
          )}

        </Formik>

      </View>
    </ImageBackground>
  );
};

export default OwnerLoginPage;

const styles = StyleSheet.create({

  background:{
    flex:1,
    justifyContent:"center",
  },

  overlay:{
    flex:1,
    justifyContent:"center",
    padding:20,
    backgroundColor:"rgba(0,0,0,0.55)",
  },

  title:{
    fontSize:32,
    fontWeight:"bold",
    color:"white",
    alignSelf:"center",
    marginBottom:30,
  },

  input:{
    backgroundColor:"white",
    borderRadius:10,
    padding:15,
    marginBottom:10,
  },

  error:{
    color:"red",
    marginBottom:10,
  },

});