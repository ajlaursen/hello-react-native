import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import LoginButton from "../components/LoginButton";

import colors from "../config/colors";

export default function WelcomeScreen() {
	return (
		<ImageBackground
			style={styles.background}
			source={require("../assets/background.jpg")}
			blurRadius={2}
		>
			<View style={styles.logoText}>
				<Image
					source={require("../assets/logo-red.png")}
					style={styles.logo}
				></Image>
				<Text style={styles.tagLine}>Sell What You Don't Need!</Text>
			</View>
			<View style={styles.buttonContainer}>
				<LoginButton title="Login" color="primary" />
				<LoginButton title="Register" color="secondary" />
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	buttonContainer: {
		width: "100%",
		padding: 10,
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
	register: {
		width: "100%",
		height: 70,
		backgroundColor: colors.secondary,
	},
	tagLine: {
		fontSize: 25,
		fontWeight: "600",
		paddingVertical: 20,
	},
});
