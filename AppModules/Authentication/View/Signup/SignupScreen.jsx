import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../Style/RegisterScreen.styles";
import axios from "axios";
import { Toast } from "react-native-toast-notifications";
import {
  Entypo,
  Fontisto,
  Ionicons,
  SimpleLineIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { appendObjectToForm } from "../../../../BaseModule/Utils/helpers";
import { signupViaEmailRequest } from "../../Redux/Actions/AuthAction";
import { signupViaEmailStateSelector } from "../../Redux/Reducer/AuthSelector";

const SignupScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isButtonSpinner, setButtonSpinner] = useState(false);

  const signupViaEmailState = useSelector((state) =>
    signupViaEmailStateSelector(state)
  );

  const [userInfo, setUserInfo] = useState({
    firstName: "test",
    email: "test5098@gmail.com",
    password: "Test@1234",
    confirmPassword: "Test@1234",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [required, setRequired] = useState("");

  const handleRegister = async () => {
    setButtonSpinner(true);
    if (
      userInfo.firstName &&
      userInfo.email &&
      userInfo.password &&
      userInfo.confirmPassword
    ) {
      setRequired("");

      if (userInfo.password !== userInfo.confirmPassword) {
        setError({ ...error, confirmPassword: "Passwords do not match" });
        setButtonSpinner(false);
        return;
      }

      const userData = {
        email: userInfo.email,
        password1: userInfo.password,
        password2: userInfo.confirmPassword,
      };
      const updatedForm = appendObjectToForm(userData);

      dispatch(signupViaEmailRequest(updatedForm));
    } else {
      setRequired("Fill Up The All Required Fields");
      setButtonSpinner(false);
    }
  };

  const handleEmailValidation = (value) => {
    const email = value;

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(email)) {
      setError({ ...error, email: "Invalid Email" });
      setUserInfo({ ...userInfo, email: "" });
    } else {
      setError({ ...error, email: "" });
      setUserInfo({ ...userInfo, email: value });
    }
  };

  const handlePasswordValidation = (value) => {
    const password = value;

    const passwordSpecialCharacter = /(?=.*[!@#$&*])/;
    const passwordOneNumber = /(?=.*[0-9])/;
    const passwordSixValue = /(?=.{6,})/;

    if (!passwordSpecialCharacter.test(password)) {
      setError({
        ...error,
        password: "Write at least one special character",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else if (!passwordOneNumber.test(password)) {
      setError({
        ...error,
        password: "Write at least one number",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else if (!passwordSixValue.test(password)) {
      setError({
        ...error,
        password: "Write at least 6 characters",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else {
      setError({
        ...error,
        password: "",
      });
      setUserInfo({ ...userInfo, password: value });
    }
  };

  const handleConfirmPasswordValidation = (value) => {
    const confirmPassword = value;

    if (confirmPassword !== userInfo.password) {
      setError({
        ...error,
        confirmPassword: "Passwords do not match",
      });
    } else {
      setError({
        ...error,
        confirmPassword: "",
      });
      setUserInfo({ ...userInfo, confirmPassword: value });
    }
  };

  return (
    <LinearGradient colors={["#E5ECF9", "#F6F7F9"]} style={styles.container}>
      <ScrollView>
        <Image
          style={styles.signupImage}
          source={require("../../../../assets/Images/Sign_in/signup.png")}
        />
        <Text
          style={[styles.getStartedText, { fontFamily: "Raleway_700Bold" }]}
        >
          Let's get started!
        </Text>

        <View>
          <Text
            style={[
              styles.accountCreateText,
              { fontFamily: "Nunito_400Regular" },
            ]}
          >
            Create an account to online-learning to get all features
          </Text>
          {required && (
            <View style={styles.errorContainer}>
              <Entypo name="cross" size={24} color={"red"} />
              <Text style={styles.errorText}>{required}</Text>
            </View>
          )}
        </View>
        <View style={styles.inputContainer}>
          <View>
            <TextInput
              style={styles.input}
              keyboardType="name-phone-pad"
              placeholder="First Name"
              onChangeText={(value) =>
                setUserInfo({ ...userInfo, firstName: value })
              }
            />
            <FontAwesome
              style={styles.icon1}
              name="user-o"
              size={20}
              color={"black"}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              placeholder="Email Address"
              onChangeText={handleEmailValidation}
            />
            <Fontisto
              style={styles.icon1}
              name="email"
              size={20}
              color={"black"}
            />
            {error.email && (
              <View style={styles.errorContainer1}>
                <Entypo name="cross" size={24} color={"red"} />
                <Text style={styles.errorText1}>{error.email}</Text>
              </View>
            )}
          </View>

          <View>
            <TextInput
              style={styles.input}
              keyboardType="default"
              secureTextEntry={!isPasswordVisible}
              placeholder="Password"
              onChangeText={handlePasswordValidation}
            />
            <TouchableOpacity
              style={styles.visibleIcon}
              onPress={() => setPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? (
                <Ionicons name="eye-off-outline" size={23} color={"#747474"} />
              ) : (
                <Ionicons name="eye-outline" size={23} color={"#747474"} />
              )}
            </TouchableOpacity>
            <SimpleLineIcons
              style={styles.icon2}
              name="lock"
              size={20}
              color={"black"}
            />
            {error.password && (
              <View style={styles.errorContainer1}>
                <Entypo name="cross" size={24} color={"red"} />
                <Text style={styles.errorText1}>{error.password}</Text>
              </View>
            )}
          </View>

          <View>
            <TextInput
              style={styles.input}
              keyboardType="default"
              secureTextEntry={!isPasswordVisible}
              placeholder="Confirm Password"
              onChangeText={handleConfirmPasswordValidation}
            />
            <SimpleLineIcons
              style={styles.icon2}
              name="lock"
              size={20}
              color={"black"}
            />
            {error.confirmPassword && (
              <View style={styles.errorContainer1}>
                <Entypo name="cross" size={24} color={"red"} />
                <Text style={styles.errorText1}>{error.confirmPassword}</Text>
              </View>
            )}
          </View>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleRegister}
          >
            {signupViaEmailState?.isLoading ? (
              <ActivityIndicator size={"small"} color={"white"} />
            ) : (
              <Text
                style={[styles.buttonText, { fontFamily: "Raleway_700Bold" }]}
              >
                Sign up
              </Text>
            )}
          </TouchableOpacity>

          <View style={styles.signupRedirect}>
            <Text
              style={[
                styles.signupTextStyle,
                { fontFamily: "Raleway_600SemiBold" },
              ]}
            >
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text
                style={[
                  styles.signupTextStyle,
                  { fontFamily: "Raleway_600SemiBold" },
                  styles.signupText,
                ]}
              >
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default SignupScreen;
