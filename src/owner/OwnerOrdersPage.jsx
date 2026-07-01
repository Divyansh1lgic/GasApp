import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import {
  collection,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase/firestore";

import Header from "../components/molecules/Header";

const OwnerOrdersPage = ({ navigation }) => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {

      const querySnapshot = await getDocs(
        collection(db, "orders")
      );

      const orderList = [];

      querySnapshot.forEach((document) => {
        orderList.push({
          id: document.id,
          ...document.data(),
        });
      });

      setOrders(orderList);

    } catch (error) {
      console.log(error);
    }
  };

  const updateStatus = async (
    orderId,
    newStatus
  ) => {

    try {

      await updateDoc(
        doc(db, "orders", orderId),
        {
          status: newStatus,
        }
      );

      fetchOrders();

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <View style={styles.container}>

      <Header
        navigation={navigation}
        title="Customer Orders"
      />

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (

          <View style={styles.card}>

            <Text style={styles.customerName}>
              👤 {item.customerName}
            </Text>

            <Text style={styles.text}>
              📞 {item.phone}
            </Text>

            <Text style={styles.text}>
              📍 {item.address}
            </Text>

            <Text style={styles.text}>
              💳 {item.paymentMethod}
            </Text>

            <Text style={styles.text}>
              💰 ₹ {item.totalAmount}
            </Text>

            <Text style={styles.text}>
              🕒{" "}
              {item.orderedAt?.toDate().toLocaleString()}
            </Text>

            <Text style={styles.status}>
              Status : {item.status}
            </Text>

            <Text style={styles.itemsHeading}>
              Ordered Items
            </Text>

            {item.items?.map((gas, index) => (

              <View
                key={index}
                style={styles.itemCard}
              >

                <Text>
                  {gas.name}
                </Text>

                <Text>
                  Qty : {gas.quantity}
                </Text>

                <Text>
                  ₹ {gas.price}
                </Text>

              </View>

            ))}

            <View style={styles.buttonRow}>

              <TouchableOpacity
                style={styles.acceptButton}
                onPress={() =>
                  updateStatus(
                    item.id,
                    "Accepted"
                  )
                }
              >

                <Text style={styles.buttonText}>
                  Accept
                </Text>

              </TouchableOpacity>

              <TouchableOpacity
                style={styles.dispatchButton}
                onPress={() =>
                  updateStatus(
                    item.id,
                    "Out For Delivery"
                  )
                }
              >

                <Text style={styles.buttonText}>
                  Dispatch
                </Text>

              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deliveredButton}
                onPress={() =>
                  updateStatus(
                    item.id,
                    "Delivered"
                  )
                }
              >

                <Text style={styles.buttonText}>
                  Delivered
                </Text>

              </TouchableOpacity>

            </View>

          </View>

        )}
      />

    </View>

  );

};

export default OwnerOrdersPage;

const styles = StyleSheet.create({

  container:{
    flex:1,
    padding:20,
    backgroundColor:"#F5F7FA",
  },

  card:{
    backgroundColor:"white",
    borderRadius:15,
    padding:18,
    marginBottom:18,
    elevation:4,
  },

  customerName:{
    fontSize:22,
    fontWeight:"bold",
    color:"#0057D9",
    marginBottom:10,
  },

  text:{
    fontSize:16,
    marginTop:4,
  },

  status:{
    marginTop:10,
    fontWeight:"bold",
    fontSize:17,
    color:"green",
  },

  itemsHeading:{
    marginTop:15,
    fontSize:18,
    fontWeight:"bold",
  },

  itemCard:{
    backgroundColor:"#EFEFEF",
    padding:10,
    borderRadius:10,
    marginTop:8,
  },

  buttonRow:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:20,
  },

  acceptButton:{
    backgroundColor:"#0057D9",
    padding:10,
    borderRadius:10,
    flex:1,
    marginRight:5,
  },

  dispatchButton:{
    backgroundColor:"orange",
    padding:10,
    borderRadius:10,
    flex:1,
    marginHorizontal:5,
  },

  deliveredButton:{
    backgroundColor:"green",
    padding:10,
    borderRadius:10,
    flex:1,
    marginLeft:5,
  },

  buttonText:{
    color:"white",
    fontWeight:"bold",
    textAlign:"center",
  },

});