import React from "react";
import main from "./assets/main.png";
import {
  StyleSheet,
  Text,
  //View,
  Image,
  //TouchableOpacity,
  ScrollView,
} from "react-native";

export default function App() {
  console.disableYellowBox = true;
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>나만의 꿀팁</Text>
      <Image source={main} resizeMode={"cover"} style={styles.mainImage} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0000",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 60,
    marginLeft: 15,
  },
  mainImage: {
    width: "90%",
    height: 200,
    borderRadius: 10,
    marginTop: 20,
  },
});
