import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Share } from "react-native";
import * as Linking from "expo-linking";
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

export default function DetailPage({ navigation, route }) {
  console.disableYellowBox = true;
  const [tip, setTip] = useState({
    idx: 9,
    category: "재테크",
    title: "렌탈 서비스 금액 비교해보기",
    image:
      "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Frental.png?alt=media&token=97a55844-f077-4aeb-8402-e0a27221570b",
    desc: "요즘은 정수기, 공기 청정기, 자동차나 장난감 등 다양한 대여서비스가 활발합니다. 사는 것보다 경제적이라고 생각해 렌탈 서비스를 이용하는 분들이 늘어나고 있는데요. 다만, 이런 렌탈 서비스 이용이 하나둘 늘어나다 보면 그 금액은 겉잡을 수 없이 불어나게 됩니다. 특히, 렌탈 서비스는 빌려주는 물건의 관리비용까지 포함된 것이기에 생각만큼 저렴하지 않습니다. 직접 관리하며 사용할 수 있는 물건이 있는지 살펴보고, 렌탈 서비스 항목에서 제외해보세요. 렌탈 비용과 구매 비용, 관리 비용을 여러모로 비교해보고 고민해보는 것이 좋습니다. ",
    date: "2020.09.09",
  });

  useEffect(() => {
    console.log(route);
    //Card.js에서 navigation.navigate 함수를 쓸때 두번째 인자로 content를 넘겨줬죠?
    //content는 딕셔너리 그 자체였으므로 route.params에 고대~로 남겨옵니다.
    //즉, route.params 는 content죠!
    navigation.setOptions({
      //setOptions로 페이지 타이틀도 지정가능
      title: route.params.title,
      //StackNavigator에서 작성했던 옵션을 다시 수정할 수도 있다.
      headerStyle: {
        backgroundColor: "rgba(255,255,255,0.5)",
      },
      headerTitleAlign: "lef",
      headerTintColor: "#fff",
      headerBackTitleVisible: false,
      headerTransparent: true,
    });
    setTip(route.params);
  }, []);
  const popup = () => {
    Alert.alert("찜!");
  };
  const share = () => {
    Share.share({
      message: `${tip.title} \n\n ${tip.desc} ${tip.image}`,
    });
  };
  const link = () => {
    Linking.openURL("https://google.com");
  };
  return (
    // ScrollView에서의 flex 숫자는 의미가 없습니다. 정확히 보여지는 화면을 몇등분 하지 않고
    // 화면에 넣은 컨텐츠를 모두 보여주려 스크롤 기능이 존재하기 때문입니다.
    // 여기선 내부의 컨텐츠들 영역을 결정짓기 위해서 height 값과 margin,padding 값을 적절히 잘 이용해야 합니다.
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
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btn} onPress={() => popup()}>
                <Text style={styles.btnText}>팁 찜하기</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={() => share()}>
                <Text style={styles.btnText}>팁 공유하기</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={() => link()}>
                <Text style={styles.btnText}>링크 연결</Text>
              </TouchableOpacity>
            </View>
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
    marginTop: 50,
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
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  btn: {
    width: 90,
    height: 40,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "purple",
    justifyContent: "center",
    alignSelf: "center",
    margin: 10,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
  },
});
