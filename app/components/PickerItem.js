import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import AppText from "./AppText";

export default function PickerItem({ label, onPress }) {
	

	return (
		<TouchableOpacity onPress={onPress}>
			<AppText style={styles.text}>{label}</AppText>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	text: {
		padding: 20,
	},
});
