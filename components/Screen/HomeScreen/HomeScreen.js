import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomButton from "../../CustomButton/CustomButton";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={{ fontSize: 40, marginBottom: 100 }}>This is Home Page</Text>
      <CustomButton
        onPress={() => navigation.goBack()}
        text="Back to login"
        bgColor="#003CD6"
        fgColor="#FFFFFF"
      />
    </View>
  );
};

export default HomeScreen;
