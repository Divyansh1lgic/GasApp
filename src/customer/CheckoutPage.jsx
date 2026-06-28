import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { Formik } from "formik";
import * as Yup from "yup";
import { Ionicons } from "@expo/vector-icons";

const CheckoutSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required"),

  phone: Yup.string()
    .matches(
      /^[0-9]{10}$/,
      "Enter valid number"
    )
    .required("Phone number required"),

  address: Yup.string()
    .required("Address required"),
});

const CheckoutPage = ({ navigation }) => {

  const [paymentMethod, setPaymentMethod] =
    useState("COD");

  return (
    <View style={styles.container}>

        <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons
          name="arrow-back"
          size={28}
          color="black"
        />
      </TouchableOpacity>
      <Text style={styles.heading}>
        Checkout
      </Text>

      <Formik
        initialValues={{
          name: "",
          phone: "",
          address: "",
        }}

        validationSchema={CheckoutSchema}

        onSubmit={(values) => {

          console.log(values);

          navigation.navigate(
            "OrderSuccess"
          );
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
              placeholder="Enter Name"
              style={styles.input}
              value={values.name}
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
            />

            {touched.name &&
              errors.name && (
                <Text style={styles.error}>
                  {errors.name}
                </Text>
              )}

            <TextInput
              placeholder="Enter Phone Number"
              style={styles.input}
              keyboardType="phone-pad"
              value={values.phone}
              onChangeText={handleChange("phone")}
              onBlur={handleBlur("phone")}
            />

            {touched.phone &&
              errors.phone && (
                <Text style={styles.error}>
                  {errors.phone}
                </Text>
              )}

            <TextInput
              placeholder="Enter Address"
              style={styles.input}
              value={values.address}
              onChangeText={handleChange("address")}
              onBlur={handleBlur("address")}
            />

            {touched.address &&
              errors.address && (
                <Text style={styles.error}>
                  {errors.address}
                </Text>
              )}

            <Text style={styles.paymentHeading}>
              Payment Method
            </Text>

            <TouchableOpacity
              style={styles.paymentButton}
              onPress={() =>
                setPaymentMethod("COD")
              }
            >
              <Text>
                Cash On Delivery
                {paymentMethod === "COD"
                  ? " ✅"
                  : ""}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.paymentButton}
              onPress={() =>
                setPaymentMethod("UPI")
              }
            >
              <Text>
                UPI
                {paymentMethod === "UPI"
                  ? " ✅"
                  : ""}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.placeOrderButton}
              onPress={handleSubmit}
            >
              <Text
                style={styles.placeOrderText}
              >
                Place Order
              </Text>
            </TouchableOpacity>

          </>
        )}
      </Formik>

    </View>
  );
};

export default CheckoutPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
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

  paymentHeading: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
  },

  paymentButton: {
    padding: 15,
    backgroundColor: "#eee",
    borderRadius: 10,
    marginTop: 10,
  },

  placeOrderButton: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
  },

  placeOrderText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});