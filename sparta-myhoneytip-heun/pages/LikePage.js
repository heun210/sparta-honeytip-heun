import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import LikeCard from "../components/LikeCard";
import Card from "../components/Card";
import Constants from "expo-constants";
import { firebase_db } from "../firebaseConfig";


export default function LikePage({ navigation, route }) {
  console.disableYellowBox = true;
  const [tip, setTip] = useState([]);
  const [ready, setReady] = useState(true);

  useEffect(() => {
    navigation.setOptions({
      title: "꿀팁 찜",
      headerStyle: {
        backgroundColor: "rgba(255,255,255,0.5)",
      },
      headerTitleAlign: "lef",
      headerTintColor: "#000",
      headerBackTitleVisible: false,
      headerTransparent: true,
    });
    const user_id = Constants.installationId;
    firebase_db
      .ref("/like/" + user_id)
      .once("value")
      .then((snapshot) => {
        let tip = snapshot.val();
        if (tip.length > 0) {
          setTip(tip);
          setReady(false);
        }
      });
  }, []);
  const reload = () => {
    const user_id = Constants.installationId;
    firebase_db
      .ref("like/" + user_id)
      .once("value")
      .then((snapshot) => {
        if (snapshot.exists()) {
          let tip = snapshot.val();
          setTip(tip);
          setReady(false);
        } else {
          setReady(true);
          setTip([]);
        }
      });
  };

  return (
    <SafeAreaView style={styles.wrap}>
      <StatusBar style="black" />
      <ScrollView style={styles.container}>
        {tip.map((content, i) => {
          return (
            <LikeCard
              content={content}
              key={i}
              navigation={navigation}
              reload={reload}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: "#fff",
    height: "100%",
  },
  container: {
    margin: 20,
    marginTop: 50,
    marginBottom: 0,
  },
});
