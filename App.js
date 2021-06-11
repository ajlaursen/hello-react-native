import React, { useState } from "react";
import { Switch } from "react-native";
import { MaterialCommunityIcons, Zocial } from "@expo/vector-icons";
import "react-native-gesture-handler";

import WelcomeScreen from "./app/screens/WelcomScreens";
import VeiwImageScreen from "./app/screens/VeiwImageScreen";
import Screen from "./app/components/Screen";
import AppText from "./app/components/AppText";
import LoginButton from "./app/components/LoginButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessageScreen from "./app/screens/MessagesScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import ListingScreen from "./app/screens/ListingScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

let chairImage = require("./app/assets/chair.jpg");

const categories = [
	{ label: "furniture", value: 1 },
	{ label: "colthing", value: 2 },
	{ label: "camera", value: 3 },
];

export default function App() {
	const [isNew, setIsNew] = useState(false);
	const [catergory, setcatergory] = useState();

	return (
		<Screen>
			<AppPicker
				icon="apps"
				placeholder={"category"}
				selectedItem={catergory}
				onSelectItem={(item) => setcatergory(item)}
				items={categories}
			></AppPicker>
			<AppTextInput icon="email"></AppTextInput>
		</Screen>
	);
}
