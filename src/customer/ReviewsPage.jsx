import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const reviews = [
  {
    id: 1,
    name: "Amit Sharma",
    rating: "⭐⭐⭐⭐⭐",
    review:
      "Excellent service and fast delivery.",
  },

  {
    id: 2,
    name: "Rohit Verma",
    rating: "⭐⭐⭐⭐",
    review:
      "Good quality industrial gases.",
  },

  {
    id: 3,
    name: "Pankaj Singh",
    rating: "⭐⭐⭐⭐⭐",
    review:
      "Highly recommended supplier.",
  },
];

const ReviewsPage = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
        <Ionicons
          name="arrow-back"
          size={28}
          color="black"
        />
      </TouchableOpacity>

      <Text style={styles.heading}>
        Customer Reviews
      </Text>

      <FlatList
        data={reviews}
        keyExtractor={(item) =>
          item.id.toString()
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>
              {item.name}
            </Text>

            <Text>
              {item.rating}
            </Text>

            <Text>
              {item.review}
            </Text>
          </View>
        )}
      />

    </View>
  );
};

export default ReviewsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F7FA",
  },

  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 20,
  },

  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
  },

  name: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
});