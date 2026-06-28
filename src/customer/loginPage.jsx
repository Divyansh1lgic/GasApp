import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,        
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Formik} from 'formik';
import * as Yup from 'yup';
import Button from "../components/atoms/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/auth";

const LoginPage = ({navigation})=>{


const LoginSchema = Yup.object().shape({
//  number: Yup.string().matches(/^[0-9]{10}$/, "Enter valid 10 digit number").required("Enter your number"),
 
 email:Yup.string().email("Enter valid email").required("Enter your email"),

 password:Yup.string().min(6,"Atleast 6 digit password Required").required("Password needed"),
});


return(<ImageBackground
        source={require("../assets/images/loginpage.jpg")}
        style={styles.imagebackground}
        >
      <View style={styles.overlay}>
        <Text style={styles.title}>
            Login
            </Text>
            <Formik
            initialValues={{
                email: '',
                // number: '',
                password: '',
            }}
            validationSchema={LoginSchema}
             onSubmit={async (values) => {
              try {

                const userCredential =
                  await signInWithEmailAndPassword(
                    auth,
                    values.email,
                    values.password
                  );

                console.log(
                  "Logged In User:",
                  userCredential.user
                );

                navigation.navigate("HomePage");

              } catch (error) {

                console.log(error);

                alert(error.message);
              }
            }}>
                {({
                    handleChange,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                    handleBlur,

                }) => (<>
                    <TextInput 
                    placeholder=" Enter Your Email"
                    onChangeText={handleChange('email')}
                    value={values.email}
                    onBlur={handleBlur('email')}
                    style={styles.input}
                    />
                    {touched.email && errors.email && (
                        <Text style={styles.error}>
                            {errors.email}
                        </Text>
                        )}

                    {/* <TextInput 
                    placeholder=" Enter Your Number"
                    keyboardType="phone-pad"
                    onChangeText={handleChange('number')}
                    value={values.number}
                    onBlur={handleBlur('number')}
                    style={styles.input}
                    />

                    {touched.number && errors.number &&(
                        <Text style={styles.error}>
                            {errors.number}
                            </Text>
                    )} */}

                    <TextInput 
                    placeholder=" Enter Your Password"
                    secureTextEntry={true}
                    onChangeText={handleChange('password')}
                    value={values.password}
                    onBlur={handleBlur('password')}
                    style={styles.input}
                    />
                    {touched.password && errors.password &&(
                        <Text style ={styles.error}>
                            {errors.password}
                            </Text>
                    )}

                    <Button 
                    title='Login'
                    onPress={handleSubmit}
                    />

                    <TouchableOpacity
                      onPress={() => navigation.navigate("SignupPage")}
                    >
                      <Text
                        style={{
                          marginTop: 20,
                          textAlign: "center",
                          color: "#0057D9",
                          fontWeight: "bold",
                        }}
                      >
                        Don't have an account? Sign Up
                      </Text>
                    </TouchableOpacity>
                </>
              )
              }


                </Formik>
                    </View>
    </ImageBackground>
)
}

export default LoginPage;


const styles = StyleSheet.create({
  container: {
    flex: 1,
   justifyContent: "center",
    padding: 20, 
    
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "center",
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
    marginBottom: 15,
  },
 
  imagebackground:{ 
  flex: 1,
  resizeMode: "contain",
  justifyContent: "center", 
  },

  overlay: {
  flex: 1,
  backgroundColor: "rgba(0, 0, 0, 0.56)",
  justifyContent: "center",
  padding: 20,
}
});