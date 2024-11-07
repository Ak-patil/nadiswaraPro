import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import {
  MaterialCommunityIcons,
  AntDesign,
  SimpleLineIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../Style/ProfileScreenStyles/ProfileScreen.styles";
import { LinearGradient } from "expo-linear-gradient";
import {
  useFonts,
  Raleway_600SemiBold,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";
import {
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import CustomDrawerHeader from "../../../BaseModule/Custom/CustomDrawerHeader";
import { SafeAreaView } from "react-native";
import { useDispatch } from "react-redux";
import { getProfileRequest } from "../Redux/Actions/MyprofileAction";

const Profile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  let [fontsLoaded, fontError] = useFonts({
    Raleway_600SemiBold,
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <LinearGradient colors={["#E5ECF9", "#F6F7F9"]} style={styles.container}>
        <SafeAreaView style={styles.container}>
          <CustomDrawerHeader>Profile</CustomDrawerHeader>

          <ScrollView>
            <LinearGradient
              colors={["#216FDE", "#0751BC"]}
              end={{ x: 1, y: 0.9 }}
              style={styles.mainBannerContainer}
            >
              <View style={styles.bannerContainer}>
                <View style={styles.userImageBorder}>
                  <Image
                    style={styles.userImage}
                    // source={require("../../../../assets/Images/mentor/mentor_1.png")}
                  />
                </View>
                <View style={styles.userNameSection}>
                  <Text
                    style={[
                      styles.userNameText,
                      { fontFamily: "Raleway_600SemiBold" },
                    ]}
                  >
                    Anandkumar Patil
                  </Text>
                </View>
              </View>

              <View style={styles.achiveContainer}>
                <View style={styles.achiveWrapper}>
                  <AntDesign name="book" size={20} color={"white"} />
                  <Text
                    style={[
                      styles.achiveText,
                      { fontFamily: "Nunito_600SemiBold" },
                    ]}
                  >
                    0 Course
                  </Text>
                </View>
                <View style={styles.achiveWrapper}>
                  <AntDesign name="clockcircleo" size={20} color={"white"} />
                  <Text
                    style={[
                      styles.achiveText,
                      { fontFamily: "Nunito_600SemiBold" },
                    ]}
                  >
                    0 Hours
                  </Text>
                </View>
                <View style={styles.achiveWrapper}>
                  <SimpleLineIcons name="book-open" size={18} color={"white"} />
                  <Text
                    style={[
                      styles.achiveText,
                      { fontFamily: "Nunito_600SemiBold" },
                    ]}
                  >
                    0 Modules
                  </Text>
                </View>
              </View>
            </LinearGradient>

            <View style={styles.accountDetailsContainer}>
              <Text
                style={[
                  [styles.accountText, { fontFamily: "Raleway_700Bold" }],
                ]}
              >
                Account Details
              </Text>
              <TouchableOpacity
                style={styles.detailWrapper}
                onPress={() => {
                  dispatch(getProfileRequest());
                  navigation.navigate("Edit Profile");
                }}
              >
                <View style={styles.detailLeftSection}>
                  <View style={styles.detailUserIcon}>
                    <FontAwesome
                      style={styles.iconCenter}
                      name="user-o"
                      size={20}
                      color={"black"}
                    />
                  </View>
                  <View>
                    <Text
                      style={[
                        styles.boldText,
                        { fontFamily: "Nunito_700Bold" },
                      ]}
                    >
                      Detail Profile
                    </Text>
                    <Text
                      style={[
                        styles.regularText,
                        { fontFamily: "Nunito_400Regular" },
                      ]}
                    >
                      Information Account
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                // onPress={() => navigation.navigate("Settings")}
                >
                  <AntDesign name="right" size={26} color={"#CBD5E0"} />
                </TouchableOpacity>
              </TouchableOpacity>
              <TouchableOpacity style={styles.detailWrapper}>
                <View style={styles.detailLeftSection}>
                  <View style={styles.detailUserIcon}>
                    <AntDesign
                      style={styles.iconCenter}
                      name="idcard"
                      size={20}
                      color={"black"}
                    />
                  </View>
                  <View>
                    <Text
                      style={[
                        styles.boldText,
                        { fontFamily: "Nunito_700Bold" },
                      ]}
                    >
                      Identify
                    </Text>
                    <Text
                      style={[
                        styles.regularText,
                        { fontFamily: "Nunito_400Regular" },
                      ]}
                    >
                      Verification status setting
                    </Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <AntDesign name="right" size={26} color={"#CBD5E0"} />
                </TouchableOpacity>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.detailWrapper}
                // onPress={() => navigation.navigate("Order History")}
              >
                <View style={styles.detailLeftSection}>
                  <View style={styles.detailUserIcon}>
                    <MaterialCommunityIcons
                      style={styles.iconCenter}
                      name="book-account-outline"
                      size={22}
                      color={"black"}
                    />
                  </View>
                  <View>
                    <Text
                      style={[
                        styles.boldText,
                        { fontFamily: "Nunito_700Bold" },
                      ]}
                    >
                      Order History
                    </Text>
                    <Text
                      style={[
                        styles.regularText,
                        { fontFamily: "Nunito_400Regular" },
                      ]}
                    >
                      Your Order History
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Order History")}
                >
                  <AntDesign name="right" size={26} color={"#CBD5E0"} />
                </TouchableOpacity>
              </TouchableOpacity>
              <TouchableOpacity style={styles.detailWrapper}>
                <View style={styles.detailLeftSection}>
                  <View style={styles.detailUserIcon}>
                    <FontAwesome
                      style={styles.iconCenter}
                      name="credit-card"
                      size={18}
                      color={"black"}
                    />
                  </View>
                  <View>
                    <Text
                      style={[
                        styles.boldText,
                        { fontFamily: "Nunito_700Bold" },
                      ]}
                    >
                      Payment Account
                    </Text>
                    <Text
                      style={[
                        styles.regularText,
                        { fontFamily: "Nunito_400Regular" },
                      ]}
                    >
                      Manage Your Payment
                    </Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <AntDesign name="right" size={26} color={"#CBD5E0"} />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default Profile;
