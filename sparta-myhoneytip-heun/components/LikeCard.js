import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  window,
} from "react-native";
import { firebase_db } from "../firebaseConfig";
import Constants from "expo-constants";
import { Alert } from "react-native-web";

//비구조 할당 방식으로 넘긴 속성 데이터를 꺼내 사용함
export default function LikeCard({ content, navigation }) {
  const remove = () => {
    const user_id = Constants.installationId;
    firebase_db
      .ref("/like/" + user_id + "/" + content.idx)
      .remove()
      .then(function () {
        alert("삭제 완료");
        navigation.navigate("LikePage");
      });
  };
  /* function remove() {
    const user_id = Constants.installationId;
    const editorRef = firebase_db.ref("/like/" + user_id + "/" + content.idx);
    alert("delete");
    navigation.navigate("MainPage");
  } */
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => {
        navigation.navigate("DetailPage", content);
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
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate("DetailPage", content);
          }}
        >
          <Text style={styles.btnText}>자세히보기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => remove()}>
          <Text style={styles.btnText}>찜 해제</Text>
        </TouchableOpacity>
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
  btnContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: -20,
  },

  btn: {
    width: 90,
    height: 40,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "purple",
    justifyContent: "center",
    margin: 10,
    marginTop: 0,
  },
  btnText: {
    color: "purple",
    textAlign: "center",
  },
});
