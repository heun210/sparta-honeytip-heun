import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
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
import Card from "../components/Card";
import Loading from "../components/Loading";
//import { SafeAreaView } from "react-native-web";

export default function MainPage({ navigation, route }) {
  console.disableYellowBox = true;

  // 기존 꿀팁을 저장하고 있을 상태
  const [state, setState] = useState([]);
  // 카테고리에 따라 다른 꿀팁을 그때그때 저장관리할 상태
  const [cateState, setCateState] = useState([]);

  //컴포넌트에 상태를 여러개 만들어도 됨
  //관리할 상태이름과 함수는 자유자재로 정의할 수 있음
  //초기 상태값으로 리스트, 참거짓형, 딕셔너리, 숫자, 문자 등등 다양하게 들어갈 수 있음.
  const [ready, setReady] = useState(true);

  useEffect(() => {
    //뒤의 1000 숫자는 1초를 뜻함
    //1초 뒤에 실행되는 코드들이 담겨 있는 함수
    setTimeout(() => {
      navigation.setOptions({
        title: "나만의 꿀팁",
      });
      //꿀팁 데이터로 모두 초기화 준비
      let tip = data.tip;
      setState(tip);
      setCateState(tip);
      setReady(false);
    }, 1000);
  }, []);

  const category = (cate) => {
    if (cate == "전체보기") {
      //전체보기면 원래 꿀팁 데이터를 담고 있는 상태값으로 다시 초기화
      setCateState(state);
    } else {
      setCateState(
        state.filter((d) => {
          return d.category == cate;
        })
      );
    }
  };
  let todayWeather = 10 + 17;
  let todayCondition = "흐림";

  //처음 ready 상태값은 true 이므로 ? 물음표 바로 뒤에 값이 반환(그려짐)됨
  //useEffect로 인해 데이터가 준비되고, ready 값이 변경되면 : 콜론 뒤의 값이 반환(그려짐)
  return ready ? (
    <Loading />
  ) : (
    <SafeAreaView style={styles.wrap}>
      <StatusBar backgroundColor="transparent" style="dark-content" />
      <ScrollView style={styles.container}>
        {/* <Text style={styles.title}>나만의 꿀팁</Text> */}
        <View style={styles.top}>
          <Text style={styles.weather}>
            오늘 날씨: {todayWeather + "°C " + todayCondition}
          </Text>
          <TouchableOpacity
            style={styles.btnPro}
            onPress={() => {
              navigation.navigate("AboutPage");
            }}
          >
            <Text style={styles.btnText}>소개페이지</Text>
          </TouchableOpacity>
        </View>

        <Image source={main} resizeMode={"cover"} style={styles.mainImage} />
        {/* 중간 버튼 */}
        <ScrollView style={styles.btnScroll} horizontal={true}>
          <TouchableOpacity
            style={styles.btnAll}
            onPress={() => {
              category("전체보기");
            }}
          >
            <Text style={styles.btnTextAll}>전체보기</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn01}
            onPress={() => {
              category("생활");
            }}
          >
            <Text style={styles.btnText}>생활</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn02}
            onPress={() => {
              category("재테크");
            }}
          >
            <Text style={styles.btnText}>재테크</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn03}
            onPress={() => {
              category("반려견");
            }}
          >
            <Text style={styles.btnText}>반려견</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn04}
            onPress={() => {
              navigation.navigate("LikePage");
            }}
          >
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
          {/* 반복문 */}
          {/* {tip.map((content, i) => {
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
          })} */}
          {/* 컴포넌트화 */}
          {/* {tip.map((content, i) => {
            return <Card content={content} key={i} />;
          })} */}
          {cateState.map((content, i) => {
            return <Card content={content} key={i} navigation={navigation} />;
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
    marginTop: 35,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  top: {
    width: 110,
    position: "relative",
    alignSelf: "flex-end",
  },
  weather: {
    //alignSelf: "flex-end",
    textAlign: "center",
    padding: 2,
    fontSize: 12,
  },
  btnPro: {
    width: 110,
    height: 40,
    backgroundColor: "#b4b6c3",
    justifyContent: "center",
    borderRadius: 10,
    alignSelf: "flex-end",
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

  btnAll: {
    width: 110,
    height: 50,
    backgroundColor: "#6C6B8A",
    borderRadius: 15,
    //flex: 1,
    justifyContent: "center",
  },
  btn01: {
    width: 110,
    height: 50,
    backgroundColor: "#9AAED1",
    borderRadius: 15,
    marginLeft: 10,
    //flex: 1,
    justifyContent: "center",
  },
  btn02: {
    width: 110,
    height: 50,
    backgroundColor: "#D1B3CB",
    borderRadius: 15,
    marginLeft: 10,
    //flex: 1,
    justifyContent: "center",
  },
  btn03: {
    width: 110,
    height: 50,
    marginLeft: 10,
    backgroundColor: "#E8C4C6",
    borderRadius: 15,

    //flex: 1,
    justifyContent: "center",
  },
  btn04: {
    width: 110,
    height: 50,
    marginLeft: 10,
    backgroundColor: "#EDA2A7",
    borderRadius: 15,

    // flex: 1,
    justifyContent: "center",
  },
  btnTextAll: {
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
  },
  cardContainer: {
    marginTop: 5,
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
    height: 80,
    justifyContent: "center",
    //alignSelf: "center",
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
    color: "#A6A6A6",
  },
});
