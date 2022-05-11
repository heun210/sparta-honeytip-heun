import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Alert,
} from "react-native";

export default function DetailPage() {
  console.disableYellowBox = true;
  const tip = {
    idx: 9,
    category: "재테크",
    title: "렌탈 서비스 금액 비교해보기",
    image:
      "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Frental.png?alt=media&token=97a55844-f077-4aeb-8402-e0a27221570b",
    desc: "요즘은 정수기, 공기 청정기, 자동차나 장난감 등 다양한 대여서비스가 활발합니다. 사는 것보다 경제적이라고 생각해 렌탈 서비스를 이용하는 분들이 늘어나고 있는데요. 다만, 이런 렌탈 서비스 이용이 하나둘 늘어나다 보면 그 금액은 겉잡을 수 없이 불어나게 됩니다. 특히, 렌탈 서비스는 빌려주는 물건의 관리비용까지 포함된 것이기에 생각만큼 저렴하지 않습니다. 직접 관리하며 사용할 수 있는 물건이 있는지 살펴보고, 렌탈 서비스 항목에서 제외해보세요. 렌탈 비용과 구매 비용, 관리 비용을 여러모로 비교해보고 고민해보는 것이 좋습니다. ",
    date: "2020.09.09",
  };
  const popup = () => {
    Alert.alert("찜!");
  };
  return (
    <SafeAreaView style={styles.wrap}>
      <StatusBar style="light" />
      <ScrollView style={styles.wrap}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{ uri: tip.image }}
            resize={"cover"}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{tip["title"]}</Text>
            <Text style={styles.sub}>{tip["desc"]}</Text>
            <TouchableOpacity style={styles.btn} onPress={() => popup()}>
              <Text style={styles.btnText}>팁 찜하기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: "#000",
    height: "100%",
  },
  container: {
    margin: 20,
  },
  image: {
    height: 400,
    width: "100%",
    borderRadius: 20,
    marginBottom: 20,
  },
  textContainer: {
    padding: 10,
    flex: 1,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    textAlign: "center",
    paddingBottom: 20,
  },
  sub: {
    color: "#fff",
    fontSize: 16,
    textAlign: "left",
    paddingBottom: 20,
  },
  btn: {
    width: 90,
    height: 40,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "purple",
    justifyContent: "center",
    alignSelf: "center",
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
  },
});
