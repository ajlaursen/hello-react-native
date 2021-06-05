import React from "react";
import { View, Text } from "react-native";
import WelcomeScreen from "./app/screens/WelcomScreens";
import VeiwImageScreen from "./app/screens/VeiwImageScreen";
import { MaterialCommunityIcons, Zocial } from "@expo/vector-icons";

import AppText from "./app/components/AppText/AppText";
import LoginButton from "./app/components/LoginButton/LoginButton";
import Card from "./app/components/Card/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

let chairImage = require("./app/assets/chair.jpg");

export default function App() {
	return <VeiwImageScreen />;
}
