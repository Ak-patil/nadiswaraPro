import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styles } from "../Style/ProfileScreenStyles/EditProfileScreen.styles";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import CustomBackHeader from "../../../BaseModule/Custom/CustomBackHeader";
import { useDispatch, useSelector } from "react-redux";
import { updateProfileRequest } from "../Redux/Actions/MyprofileAction";
import { appendObjectToForm } from "../../../BaseModule/Utils/helpers";
import { getProfileDataSelector } from "../Redux/Reducer/MyprofileSelector";

const EditProfile = () => {
  const dispatch = useDispatch();
  const profileState = useSelector((state) => getProfileDataSelector(state));

  const [profileInfo, setProfileInfo] = useState({
    name: "",
    email: "",
    phone_number: "",
    address: "",
    age: "",
    gender: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (profileState?.data?.data) {
      const { user_name, phone_number, age, gender, address, email } =
        profileState.data.data;
      setProfileInfo({
        name: user_name || "",
        email: email || "",
        phone_number: phone_number || "",
        address: address || "",
        age: age || "",
        gender: gender || "",
      });
    }
  }, [profileState]);

  const handleProfileInfo = async () => {
    const { name, email, phone_number, address, age, gender } = profileInfo;

    const profileData = {
      user_name: name,
      gender: gender,
      age: age,
      photo_uri: null,
      phone_number: phone_number,
    };
    const updatedForm = appendObjectToForm(profileData);
    dispatch(updateProfileRequest(updatedForm));
  };

  return (
    <>
      <LinearGradient
        colors={["#E5ECF9", "#F6F7F9"]}
        style={styles.mainContainer}
      >
        <CustomBackHeader>Edit Profile</CustomBackHeader>
        <ScrollView>
          <View style={styles.container}>
            <Image
              source={require("../../../assets/Images/user.png")}
              style={styles.profileImage}
            />
            <Text style={styles.title}>Edit Profile</Text>
            {error && (
              <View style={styles.errorContainer}>
                <FontAwesome name="close" size={20} color={"red"} />
                <Text style={styles.errorText}>{error}</Text>
              </View>
            )}
            <TextInput
              style={styles.textInput}
              placeholder="username"
              placeholderTextColor="#888"
              keyboardType="default"
              value={profileInfo.name}
              onChangeText={(value) =>
                setProfileInfo({ ...profileInfo, name: value })
              }
            />
            {/* <TextInput
              style={styles.textInput}
              placeholder="example@gmail.com"
              placeholderTextColor="#888"
              keyboardType="email-address"
              value={profileInfo.name}
              onChangeText={(value) =>
                setProfileInfo({ ...profileInfo, email: value })
              }
            /> */}
            <TextInput
              style={styles.textInput}
              placeholder="+91 93333 44555"
              placeholderTextColor="#888"
              keyboardType="phone-pad"
              value={profileInfo.phone_number}
              onChangeText={(value) =>
                setProfileInfo({ ...profileInfo, phone_number: value })
              }
            />

            <TextInput
              style={styles.textInput}
              placeholder="Age"
              placeholderTextColor="#888"
              keyboardType="numeric"
              value={profileInfo.age}
              onChangeText={(value) =>
                setProfileInfo({ ...profileInfo, age: value })
              }
            />
            <TextInput
              style={styles.textInput}
              placeholder="Gender"
              placeholderTextColor="#888"
              keyboardType="default"
              value={profileInfo.gender}
              onChangeText={(value) =>
                setProfileInfo({ ...profileInfo, gender: value })
              }
            />
            {/* <TextInput
              style={styles.textInput}
              placeholder="Melbon, Australia"
              placeholderTextColor="#888"
              keyboardType="default"
              value={profileInfo.name}
              onChangeText={(value) =>
                setProfileInfo({ ...profileInfo, address: value })
              }
            /> */}
            <TouchableOpacity
              style={styles.saveButton}
              onPress={handleProfileInfo}
            >
              <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </>
  );
};

export default EditProfile;
