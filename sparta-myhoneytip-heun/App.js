import { StatusBar } from "expo-status-bar";
import React from "react";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import { safeAreaVie } from "react-native";

export default function App() {
  //return <MainPage />;
  return <AboutPage />;
}
