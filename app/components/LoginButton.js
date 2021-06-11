import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";

export default function LoginButton({ title, onPress, color }) {
	return (
		<TouchableOpacity
			style={[styles.loginButton, { backgroundColor: colors[color] }]}
		>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
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
