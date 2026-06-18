import React from "react";

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import {
  useSelector,
  useDispatch,
} from "react-redux";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../redux/cartSlice";

import { Ionicons } from "@expo/vector-icons";

const CartPage = ({ navigation }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    state => state.cart.cartItems
  );

  const total = cartItems.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

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
        My Cart
      </Text>

      <FlatList
        data={cartItems}
        keyExtractor={item =>
          item.id.toString()
        }
        renderItem={({ item }) => (
          <View style={styles.card}>

            <Text style={styles.itemName}>
              {item.name}
            </Text>

            <Text style={styles.price}>
              ₹ {item.price}
            </Text>

            <View style={styles.qtyContainer}>

              <TouchableOpacity
                style={styles.qtyButton}
                onPress={() =>
                  dispatch(
                    decreaseQuantity(item.id)
                  )
                }
              >
                <Text style={styles.qtyText}>
                  -
                </Text>
              </TouchableOpacity>

              <Text style={styles.quantity}>
                {item.quantity}
              </Text>

              <TouchableOpacity
                style={styles.qtyButton}
                onPress={() =>
                  dispatch(
                    increaseQuantity(item.id)
                  )
                }
              >
                <Text style={styles.qtyText}>
                  +
                </Text>
              </TouchableOpacity>

            </View>

            <TouchableOpacity
              style={styles.removeButton}
              onPress={() =>
                dispatch(
                  removeFromCart(item.id)
                )
              }
            >
              <Text style={styles.removeText}>
                Remove Item
              </Text>
            </TouchableOpacity>

          </View>
        )}
      />

      <TouchableOpacity
        style={styles.clearButton}
        onPress={() =>
          dispatch(clearCart())
        }
      >
        <Text style={styles.clearText}>
          Clear Cart
        </Text>
      </TouchableOpacity>

      <Text style={styles.total}>
        Total: ₹ {total}
      </Text>

      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() =>
            navigation.navigate("CheckoutPage")
        }
        >
        <Text style={styles.checkoutText}>
            Proceed To Checkout
        </Text>
        </TouchableOpacity>

    </View>
  );
};

export default CartPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F7FA",
  },

  backButton: {
    marginBottom: 10,
  },

  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
  },

  itemName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0057D9",
  },

  price: {
    marginTop: 5,
    fontSize: 16,
  },

  qtyContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },

  qtyButton: {
    backgroundColor: "#0057D9",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  qtyText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },

  quantity: {
    marginHorizontal: 20,
    fontSize: 18,
    fontWeight: "bold",
  },

  removeButton: {
    backgroundColor: "red",
    padding: 12,
    borderRadius: 10,
    marginTop: 15,
  },

  removeText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },

  clearButton: {
    backgroundColor: "#555",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },

  clearText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },

  total: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
    color: "#0057D9",
  },

  checkoutButton: {
  backgroundColor: "green",
  padding: 15,
  borderRadius: 10,
  marginTop: 20,
},

checkoutText: {
  color: "white",
  textAlign: "center",
  fontWeight: "bold",
},

});