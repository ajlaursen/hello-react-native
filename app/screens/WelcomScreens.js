import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";

export default function WelcomeScreen() {
	return (
		<ImageBackground
			style={styles.background}
			source={require("../assets/background.jpg")}
		>
			<View style={styles.logoText}>
				<Image
					source={require("../assets/logo-red.png")}
					style={styles.logo}
				></Image>
				<Text>Sell What You Don't Need!</Text>
			</View>
			<View style={styles.logIn}></View>
			<View style={styles.register}></View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	logIn: {
		width: "100%",
		height: 70,
		backgroundColor: "#fc5c65",
	},
	register: {
		width: "100%",
		height: 70,
		backgroundColor: "#4ecdc4",
	},
	logo: {
		height: 100,
		width: 100,
	},
	logoText: {
		position: "absolute",
		top: 100,
		alignItems: "center",
	},
});
