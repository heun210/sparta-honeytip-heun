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
import { firebase_db } from "../firebaseConfig";
import Constants from "expo-constants";

export default function DetailPage({ navigation, route }) {
  let user_idx = Constants.installationId;
  console.log(user_idx);
  console.disableYellowBox = true;
  const [tip, setTip] = useState({});

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
    const { idx } = route.params;
    firebase_db
      .ref("/tip/" + idx)
      .once("value")
      .then((snapshot) => {
        let tip = snapshot.val();
        setTip(tip);
      });
  }, []);
  /* const popup = () => {
    Alert.alert("팝업!");
  }; */
  const like = () => {
    const user_id = Constants.installationId;
    firebase_db
      .ref("/like/" + user_id + "/" + tip.idx)
      .set(tip, function (error) {
        console.log(error);
        Alert.alert("찜 완료!");
      });
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
              <TouchableOpacity style={styles.btn} onPress={() => like()}>
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
