import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";

export default function ListItmeDeleteAction() {
	return (
		<View style={styles.delete}>
			<MaterialCommunityIcons
				name="trash-can-outline"
				color="white"
				size={35}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	delete: {
		backgroundColor: colors.danger,
		width: 70,
		justifyContent: "center",
		alignItems: "center",
	},
});
