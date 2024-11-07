import React from "react";
import Header from "../../../BaseModule/Custom/Header";
import { styles } from "../Style/HomeScreenStyles/HomeMainScreen.styles";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native";

const Home = () => {
  return (
    <LinearGradient colors={["#E5ECF9", "#F6F7F9"]} style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Header />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;
