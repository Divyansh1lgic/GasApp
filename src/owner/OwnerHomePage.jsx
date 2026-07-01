import React from "react";
import {
View,
Text,
StyleSheet,
TouchableOpacity,
} from "react-native";

import { signOut } from "firebase/auth";
import { auth } from "../firebase/auth";

const OwnerHomePage = ({ navigation }) => {

const logout = async () => {

await signOut(auth);

navigation.replace("LandingPage");

};

return (

<View style={styles.container}>

<Text style={styles.heading}>
Owner Dashboard
</Text>
<TouchableOpacity
    style={styles.button}
    onPress={() =>
        navigation.navigate("OwnerOrdersPage")
    }
>

    <Text style={styles.buttonText}>
        View Customer Orders
    </Text>

</TouchableOpacity>

<TouchableOpacity
style={styles.card}
onPress={() =>
navigation.navigate("InventoryPage")
}
>
<Text style={styles.cardText}>
🛢 Inventory
</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.card}
onPress={() =>
navigation.navigate("CustomersPage")
}
>
<Text style={styles.cardText}>
👤 Customers
</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.card}
onPress={() =>
navigation.navigate("AnalyticsPage")
}
>
<Text style={styles.cardText}>
📈 Analytics
</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.logout}
onPress={logout}
>

<Text style={styles.logoutText}>
Logout
</Text>

</TouchableOpacity>

</View>

);

};

export default OwnerHomePage;

const styles = StyleSheet.create({

container:{
flex:1,
padding:20,
backgroundColor:"#F5F7FA",
},

heading:{
fontSize:30,
fontWeight:"bold",
marginBottom:30,
},

card:{
backgroundColor:"white",
padding:25,
borderRadius:15,
marginBottom:18,
elevation:4,
},

cardText:{
fontSize:20,
fontWeight:"bold",
},

logout:{
marginTop:"auto",
backgroundColor:"red",
padding:15,
borderRadius:10,
},

logoutText:{
color:"white",
textAlign:"center",
fontWeight:"bold",
fontSize:18,
},

});