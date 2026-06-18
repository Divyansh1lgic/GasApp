import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const GasDetailsPage = ({ route, navigation}) => {

  const dispatch = useDispatch();

  const { gas }= route.params;

  const[quantity, setQuantity]=useState(1);

  return (
    <View style={styles.container}>

      <TouchableOpacity
                  onPress={() =>
                  navigation.navigate("CartPage")
                   }
                    style={{ marginLeft: "auto", marginBottom: 2, }}
                 >
                    <Ionicons
                  name="cart-outline"
                  size={30}
                  color="#0057D9"
                  /> 
                </TouchableOpacity>

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
      <Image 
       source={require("../assets/images/oxygenCylinder.jpg")}
       style ={styles.image}
      />
      
      <Text style={styles.name}>
        {gas.name}
      </Text>

      <Text style={styles.price}>
        {gas.price}
      </Text>

      <Text style={styles.description}>
        High quality industrial gas suitable
        for manufacturing, welding and
        industrial applications.
      </Text>


      <Text
        style={{
          color: gas.available
            ? "green"
            : "red",
          marginTop: 10,
        }}
      >
        {gas.available
          ? "Available "
          : "Out Of Stock "}
      </Text>

      <View style = {styles.quantityContainer}>

        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
        >
             <Text style={styles.quantityText}>
            -
          </Text>
        </TouchableOpacity>

            <Text style={styles.quantity}>
              {quantity}
            </Text>

        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() =>
            setQuantity(quantity + 1)
          }
        >
          <Text style={styles.quantityText}>
            +
          </Text>
        </TouchableOpacity>


      </View>

            <TouchableOpacity
              style={styles.cartButton}
              onPress={() => {
                dispatch(
                  addToCart({
                    id:gas.id,
                    name:gas.name,
                    price:gas.price,
                    quantity,
                  })
                );
                console.log("Added to Cart");
                navigation.navigate("CartPage");

                }}
                >

              <Text style={styles.cartText}>
                Add To Cart
              </Text>
            </TouchableOpacity>



      
    </View>
  )
}

export default GasDetailsPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  backButton: {
  marginBottom: 15,
},

  image: {
    width: "100%",
    height: 250,
    borderRadius: 15,
    resizeMode: "contain",
  },

  name: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
  },

  price: {
    fontSize: 22,
    color: "#0057D9",
    marginTop: 10,
  },

  description: {
    marginTop: 15,
    fontSize: 16,
    lineHeight: 24,
  },

  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
  },

  quantityButton: {
    backgroundColor: "#0057D9",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },

  quantityText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },

  quantity: {
    fontSize: 20,
    marginHorizontal: 20,
  },

  cartButton: {
    marginTop: 30,
    backgroundColor: "#0057D9",
    padding: 15,
    borderRadius: 10,
  },

  cartText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});