import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Icon({
	name,
	size = 40,
	backgroundColor = "#000",
	iconColor = "#fff",
}) {
	return (
		<View
			style={{
				width: size,
				height: size,
				borderRadius: size / 2,
				backgroundColor,
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<MaterialCommunityIcons
				name={name}
				color={iconColor}
				size={size / 2}
			></MaterialCommunityIcons>
		</View>
	);
}

const styles = StyleSheet.create({});
