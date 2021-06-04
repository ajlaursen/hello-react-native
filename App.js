import React from "react";
import { View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomScreens";
import VeiwImageScreen from "./app/screens/VeiwImageScreen";

export default function App() {
	return (
		<View
			style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
		>
			<View
				style={{
					backgroundColor: "dodgerblue",
					width: 100,
					height: 100,
					borderWidth: 10,
					borderColor: "royalblue",
					borderRadius: 50,
					shadowColor: "grey",
					shadowOffset: { width: -10, height: 10 },
					shadowOpacity: 0.5,
					shadowRadius: 5,
					elevation: 10,
				}}
			></View>
		</View>
	);
}
