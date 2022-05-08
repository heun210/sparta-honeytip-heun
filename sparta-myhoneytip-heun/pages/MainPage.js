import { StatusBar } from "expo-status-bar";
import React from "react";
import main from "../assets/main.png";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import data from "../data.json";
//import { SafeAreaView } from "react-native-web";

export default function MainPage() {
  //console.disableYellowBox = true;

  let tip = data.tip;
  let todayWeather = 10 + 17;
  let todayCondition = "흐림";
  return (
    <SafeAreaView style={styles.wrap}>
      <StatusBar style="dark" />

      <ScrollView style={styles.container}>
        <Text style={styles.title}>나만의 꿀팁</Text>
        <Text style={styles.weather}>
          오늘의 날씨: {todayWeather + "°C " + todayCondition}
        </Text>
        <Image source={main} resizeMode={"cover"} style={styles.mainImage} />
        {/* 중간 버튼 */}
        <ScrollView style={styles.btnScroll} horizontal={true}>
          <TouchableOpacity style={styles.btn01}>
            <Text style={styles.btnText}>생활</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn02}>
            <Text style={styles.btnText}>재태크</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn03}>
            <Text style={styles.btnText}>반려견</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn04}>
            <Text style={styles.btnText}>꿀팁 찜</Text>
          </TouchableOpacity>
        </ScrollView>
        {/* 카드전체 */}
        <View style={styles.cardContainer}>
          {/* 카드 한개 영역 */}
          {/* <View style={styles.card}>
      <Image
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fpizza.png?alt=media&token=1a099927-d818-45d4-b48a-7906fd0d2ad3",
        }}
        style={styles.cardImage}
      ></Image>
      <View style={styles.cardText}>
        <Text style={styles.cardTitle}>먹다 남은 피자를 촉촉하게!</Text>
        <Text
          style={styles.cardMain}
          numberOfLines="4"
          ellipsizeMode="tail"
        >
          먹다 남은 피자는 수분이 날라가기 때문에 처음처럼 맛있게 먹을 수
          없는데요. 이럴 경우 그릇에 물을 받아 전자레인지 안에서 1분
          30초에서 2분 정도 함께 돌려주면 촉촉하게 먹을 수 있습니다. 물이
          전자레인지 안에서 수증기를 일으키고, 피자에 촉촉함을 더해줍니다.
        </Text>
        <Text style={styles.cardDate}>2020.09.09</Text>
      </View>
    </View> */}
          {tip.map((content, i) => {
            return (
              <View style={styles.card} key={i}>
                <Image
                  source={{
                    uri: content.image,
                  }}
                  style={styles.cardImage}
                />
                <View style={styles.cardText}>
                  <Text
                    style={styles.cardTitle}
                    numberOfLines="1"
                    ellipsizeMode="tail"
                  >
                    {content.title}
                  </Text>
                  <Text
                    style={styles.cardMain}
                    numberOfLines="3"
                    //ellipsizeMode="tail"
                  >
                    {content.desc}
                  </Text>
                  <Text style={styles.cardDate}>{content.date}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  container: {
    backgroundColor: "#0000",
    margin: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  mainImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: "center",
    flex: 1,
  },
  btnScroll: {
    marginTop: 25,
    height: 60,
    flex: 1,
  },
  btn01: {
    width: 110,
    height: 50,
    backgroundColor: "#fdc453",
    borderRadius: 10,
    //flex: 1,
    justifyContent: "center",
  },
  btn02: {
    width: 110,
    height: 50,
    backgroundColor: "#fe8d6f",
    borderRadius: 15,
    marginLeft: 10,
    //flex: 1,
    justifyContent: "center",
  },
  btn03: {
    width: 110,
    height: 50,
    marginLeft: 10,
    backgroundColor: "#9adbc5",
    borderRadius: 15,

    //flex: 1,
    justifyContent: "center",
  },
  btn04: {
    width: 110,
    height: 50,
    marginLeft: 10,
    backgroundColor: "#f886a8",
    borderRadius: 15,

    // flex: 1,
    justifyContent: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
  },
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
    height: 100,
    justifyContent: "center",
    //alignContent: "center",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "800",
  },
  cardMain: {
    fontSize: 16,
  },
  cardDate: {
    fontSize: 10,
    color: "grey",
  },
  weather: {
    alignSelf: "flex-end",
  },
});