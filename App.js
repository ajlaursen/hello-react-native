import React from "react";
import { View, Text } from "react-native";
import WelcomeScreen from "./app/screens/WelcomScreens";
import VeiwImageScreen from "./app/screens/VeiwImageScreen";
import { MaterialCommunityIcons, Zocial } from "@expo/vector-icons";

import AppText from "./app/components/AppText/AppText";
import LoginButton from "./app/components/LoginButton/LoginButton";
import Card from "./app/components/Card/Card";

let chairImage = require("./app/assets/chair.jpg");

export default function App() {
	return (
		<View
			style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}
		>
			<Card
				title="Red Jacket for sale"
				subTitle="$100"
				image={chairImage}
			/>
		</View>
	);
}
