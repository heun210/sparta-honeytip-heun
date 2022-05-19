import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

//비구조 할당 방식으로 넘긴 속성 데이터를 꺼내 사용함
export default function Card({ content, navigation }) {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => {
        navigation.navigate("DetailPage", { idx: content.idx });
      }}
    >
      <View style={styles.card}>
        <Image style={styles.cardImage} source={{ uri: content.image }} />
        <View style={styles.cardText}>
          <Text style={styles.cardTitle} numberOfLines={1}>
            {content.title}
          </Text>
          <Text style={styles.cardDesc} numberOfLines={3}>
            {content.desc}
          </Text>
          <Text style={styles.cardDate}>{content.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 10,
  },
  card: {
    flex: 1,
    borderColor: "#eee",
    flexDirection: "row",
    height: 100,
    marginBottom: 20,
  },
  cardImage: {
    width: 100,
    flex: 1,
    borderRadius: 10,
  },
  cardText: {
    flex: 2,
    marginLeft: 10,
    //flexDirection: "column",
    height: 95,
    justifyContent: "space-around",
    alignContent: "center",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "800",
  },
  cardDesc: {
    fontSize: 16,
  },
  cardDate: {
    fontSize: 10,
    color: "#A6A6A6",
  },
});
