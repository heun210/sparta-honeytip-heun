import React from "react";
// 이제 모든 페이지 컴포넌트 들이 끼워져 있는 책갈피를 메인에 가지고 올 예정이므로
// 컴포넌트를 더이상 불러오지 않아도 된다.
//import MainPage from "./pages/MainPage";
//import AboutPage from "./pages/AboutPage";
//import DetailPage from "./pages/DetailPage";
import { StatusBar } from "expo-status-bar";

// 메인에 둘 네비게이션 도구들을 가지고 온다.
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";

export default function App() {
  console.disableYellowBox = true;
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <StackNavigator />
    </NavigationContainer>
    //<MainPage />;
    //return <AboutPage />;
    //return <DetailPage />;
  );
}
