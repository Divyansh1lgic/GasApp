import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Header from "../components/molecules/Header";

const HomePage = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
        <Header
          navigation={navigation}
          showBack={false}
          title="Home"
        />

      <Text style={styles.welcome}>
        Welcome 
      </Text>

      <Text style={styles.company}>
        Shiv Enterprises
      </Text>

      <Text style={styles.subtitle}>
        Industrial & Medical Gas Solutions
      </Text>

      <View style={styles.noticeCard}>
        <Text style={styles.noticeText}>
          Fast Delivery Available Across City
        </Text>
      </View>

      <Text style={styles.sectionTitle}>
        Featured Gases
      </Text>

      <TouchableOpacity
        style={styles.gasCard}
        onPress={() =>
          navigation.navigate("GasesPage")
        }
      >
        <Text style={styles.gasName}>
          Nitrogen Gas
        </Text>

        <Text style={styles.available}>
          Available 
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.gasCard}
         onPress={() =>
          navigation.navigate("GasesPage")
        }
      >
        <Text style={styles.gasName}>
          Oxygen Gas
        </Text>

        <Text style={styles.available}>
          Available 
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.gasCard}
         onPress={() =>
          navigation.navigate("GasesPage")
        }
      >
        <Text style={styles.gasName}>
          Argon Gas
        </Text>

        <Text style={styles.available}>
          Available 
        </Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>
        Quick Actions
      </Text>

      <TouchableOpacity
        style={styles.actionButton}
         onPress={() =>
                navigation.navigate("GasesPage")
            }
      >
        <Text style={styles.actionText}>
          View All Gases
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.actionButton}
         onPress={() =>
       navigation.navigate("ContactUs")}
      >
        <Text style={styles.actionText}>
          Contact Us
        </Text>
      </TouchableOpacity>

         <TouchableOpacity
            style={styles.actionButton}
             onPress={() =>
              navigation.navigate("Reviews")}
            >
        <Text style={styles.actionText}>
          Reviews
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 20,
  },

  welcome: {
    fontSize: 20,
    color: "#666",
  },

  company: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#0057D9",
  },

  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: "#555",
  },

  noticeCard: {
    backgroundColor: "#0057D9",
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
  },

  noticeText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 10,
  },

  gasCard: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 4,
  },

  gasName: {
    fontSize: 18,
    fontWeight: "bold",
  },

  available: {
    marginTop: 5,
    color: "green",
  },

  actionButton: {
    backgroundColor: "#0057D9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
  },

  actionText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});