import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import {
  setTestDeviceIDAsync,
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from "expo-ads-admob";

//비구조 할당 방식으로 넘긴 속성 데이터를 꺼내 사용함
export default function Card({ content, navigation }) {
  useEffect(() => {
    Platform.OS === "ios"
      ? AdMobInterstitial.setAdUnitID("ca-app-pub-5580582454716866/5762469089")
      : AdMobInterstitial.setAdUnitID("ca-app-pub-5580582454716866/9154919183");

    AdMobInterstitial.addEventListener("interstitialDidLoad", () =>
      console.log("interstitialDidLoad")
    );
    AdMobInterstitial.addEventListener("interstitialDidFailToLoad", () =>
      console.log("interstitialDidFailToLoad")
    );
    AdMobInterstitial.addEventListener("interstitialDidOpen", () =>
      console.log("interstitialDidOpen")
    );
    AdMobInterstitial.addEventListener("interstitialDidClose", () => {
      //광고가 끝나면 다음 코드 줄이 실행!
      console.log("interstitialDidClose");
      navigation.navigate("DetailPage", { idx: content.idx });
    });
  }, []);

  const goDetail = async () => {
    try {
      await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
      await AdMobInterstitial.showAdAsync();
    } catch (e) {
      console.log(e);
    }
    await navigation.navigate("DetailPage", { idx: content.idx });
  };

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => {
        goDetail();
        /* navigation.navigate("DetailPage", { idx: content.idx }); */
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
