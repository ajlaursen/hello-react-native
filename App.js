import React from "react";
import { View, Text } from "react-native";
import WelcomeScreen from "./app/screens/WelcomScreens";
import VeiwImageScreen from "./app/screens/VeiwImageScreen";
import { MaterialCommunityIcons, Zocial } from "@expo/vector-icons";

import AppText from "./app/components/AppText/AppText";

export default function App() {
	return (
		<View
			style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
		>
			<AppText>I love React Native!</AppText>
			<Zocial name="email" size={60} color="dodgerblue" />
		</View>
	);
}
