import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";


const gases = [
  {
    id: 1,
    name: "Nitrogen Gas",
    price: 1000,
    available: true,
    image: require("../assets/images/NitrogenGas.jpg"),
  },
  {
    id: 2,
    name: "Oxygen Gas",
    price: 900,
    available: true,
    image: require("../assets/images/oxygenCylinder.jpg"),
  },
  {
    id: 3,
    name: "Argon Gas",
    price: 1500,
    available: false,
    image: require("../assets/images/agrongas.jpg"),
  },
  {
    id: 4,
    name: "Helium Gas",
    price: 2000,
    available: true,
    image: require("../assets/images/heliumgas.jpg"),
  },
];

const GasesPage = ({navigation}) => {
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

        <Text style = {styles.heading}>Industrial Gases</Text>
        
          <TouchableOpacity
           onPress={() =>
            navigation.navigate("CartPage")
             }
              style={{ marginLeft: "auto", marginBottom: 2, }}
            >
              <Ionicons
                name="cart-outline"
                size={28}
                color="#0057D9"
              />
            </TouchableOpacity>

        <FlatList 
        data={gases}
        keyExtractor={(item)=>
            item.id.toString()
        }
        renderItem={({item})=>(
            <View style={styles.card}>
              <Image
                  source={item.image}
                  style={styles.gasImage}
                />
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>₹{item.price}</Text>
                <Text style ={{
                    color:item.available?"green":"red",
                }}           
                >{item.available  ? "Available ✅"
                : "Out Of Stock ❌"}</Text>
                <TouchableOpacity 
                style={styles.button}
                onPress={()=>
                    navigation.navigate("GasDetails",{gas:item})
                }>

                <Text style={styles.buttonText}>
                    View Details
                </Text>

                </TouchableOpacity>


                
            </View>
          )}
        />

    </View>
  )
}

export default GasesPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F7FA",
  },

  backButton: {
    marginBottom: 15,
    },

  gasImage: {
  width: "100%",
  height: 180,
  borderRadius: 10,
  marginBottom: 10,
  resizeMode: "contain",
  },

  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
  },

  price: {
    marginTop: 5,
    marginBottom: 5,
  },

  button: {
    marginTop: 10,
    backgroundColor: "#0057D9",
    padding: 12,
    borderRadius: 10,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});