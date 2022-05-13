import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import * as Linking from "expo-linking";

export default function AboutPage({ navigation, route }) {
  useEffect(() => {
    navigation.setOptions({
      title: "소개 페이지",
      headerStyle: {
        backgroundCOlor: "rgba(255,255,255,0.5)",
      },
      headerTitleAlign: "lef",
      headerTintColor: "#fff",
      headerBackTitleVisible: false,
      headerTransparent: true,
    });
  }, []);
  const link = () => {
    Linking.openURL("https://www.instagram.com/_h__0210");
  };
  return (
    <SafeAreaView style={styles.wrap}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            HI! 스파르타코딩 앱개발반에 오신것을 환영합니다
          </Text>
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.box}>
            <Image
              style={styles.boxImage}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4",
              }}
              resizeMode={"cover"}
            />
            <Text style={styles.mainText}>
              많은 내용을 간결하게 담아내려 노력했습니다!
            </Text>
            <Text style={styles.subText}>
              꼭 완주하셔서 꼭 여러분것으로 만들어가시길 바랍니다
            </Text>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText} onPress={() => link()}>
                @_h__0210
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: "#291d6c",
  },
  container: {
    margin: 20,
    marginTop: 20,
    flex: 1,
  },
  textContainer: {
    padding: 10,
    marginBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "800",
    paddingTop: 20,
    paddingRight: 2,
    textAlign: "center",
    paddingBottom: 30,
    lineHeight: 40,
  },
  boxContainer: {
    width: "100%",
    height: "100%",
  },
  box: {
    backgroundColor: "#fff",
    height: 500,
    borderRadius: 15,
    justifyContent: "center",
  },
  boxImage: {
    height: 150,
    width: 150,
    alignSelf: "center",
    borderRadius: 25,
    marginBottom: 20,
  },
  mainText: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    paddingLeft: 55,
    paddingRight: 55,
    lineHeight: 25,
    marginBottom: 15,
  },
  subText: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    paddingLeft: 55,
    paddingRight: 45,
    marginBottom: 20,
  },
  btn: {
    backgroundColor: "#5091fb",
    width: 120,
    height: 45,
    alignSelf: "center",
    borderRadius: 12,
    justifyContent: "center",
    marginTop: 15,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "500",
  },
});
