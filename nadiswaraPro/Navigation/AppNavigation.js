import React, { useContext } from "react";
import { StyleSheet, View, ActivityIndicator, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppStack from "./AppStack";
import { navigationRef } from "./NavigationService";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function Loader() {
  return (
    <View style={styles.activityIndicatorContainer}>
      <ActivityIndicator size={"large"} style={styles.activityIndicator} />
    </View>
  );
}

const MainStack = ({ initialRouteName }) => (
  <Stack.Navigator initialRouteName={initialRouteName}>
    <Stack.Screen
      name="launchscreen"
      component={AuthStack}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="appstack"
      component={AppStack}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const AppNavigation = ({ initialRouteName }) => {
  const [accessToken, setAccessToken] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = await AsyncStorage.getItem("access_token");
        if (accessToken?.length > 0 && accessToken !== null) {
          setAccessToken(accessToken);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      {Platform.OS !== "ios" ? (
        <MainStack
          initialRouteName={
            accessToken.length > 0 ? "appstack" : initialRouteName
          }
        />
      ) : (
        <MainStack initialRouteName={"appstack"} />
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },

  activityIndicator: {
    marginHorizontal: 20,
    marginVertical: 10,
    position: "absolute",
    top: "50%",
  },
});

export default AppNavigation;
