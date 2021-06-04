import React from "react";
import { View, Text, StyleSheet } from "react-native";

import colors from "../../config/colors";

export default function LoginButton() {
	return (
		<View style={styles.loginButton}>
			<Text style={styles.text}>Login</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	loginButton: {
		backgroundColor: colors.primary,
		borderRadius: 25,
		justifyContent: "center",
		alignItems: "center",
		padding: 15,
		width: "100%",
	},
	text: {
		color: colors.white,
		fontSize: 18,
		textTransform: "uppercase",
		fontWeight: "bold",
	},
});
