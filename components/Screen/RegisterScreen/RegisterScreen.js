import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "./styles";

//Importing CustomButton.js from components
import CustomButton from "../../CustomButton/CustomButton";

const RegisterScreen = ({ navigation }) => {
  const onRegister = () => {
    navigation.navigate("Home");
  };
  const onBackLogin = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={{ fontSize: 40, marginBottom: 100 }}>
        This is Registration Page
      </Text>
      <CustomButton
        onPress={onRegister}
        text="Register"
        bgColor="#003CD6"
        fgColor="#FFFFFF"
      />
      <CustomButton
        onPress={onBackLogin}
        text="Back to Log In"
        bgColor="#003CD6"
        fgColor="#FFFFFF"
      />
    </View>
  );
};

export default RegisterScreen;
