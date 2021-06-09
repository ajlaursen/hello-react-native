import React from "react";
import { View, Text } from "react-native";
import WelcomeScreen from "./app/screens/WelcomScreens";
import VeiwImageScreen from "./app/screens/VeiwImageScreen";
import { MaterialCommunityIcons, Zocial } from "@expo/vector-icons";
import "react-native-gesture-handler";

import Screen from "./app/components/Screen/Screen";
import AppText from "./app/components/AppText/AppText";
import LoginButton from "./app/components/LoginButton/LoginButton";
import Card from "./app/components/Card/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessageScreen from "./app/screens/MessagesScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import Icon from "./app/components/Icon/Icon";
import ListItem from "./app/components/ListItem/ListItem";

let chairImage = require("./app/assets/chair.jpg");

export default function App() {
	return <MyAccountScreen />;
}
