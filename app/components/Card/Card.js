import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import AppText from "../AppText/AppText";
import colors from "../../config/colors";

export default function Card({ title, subTitle, image }) {
	return (
		<View>
			<Image style={styles.image} source={image} />
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>{title}</AppText>
				<AppText style={styles.subTitle}>{subTitle}</AppText>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 25,
		backgroundColor: colors.white,
		marginBottom: 20,
		overflow: "hidden",
	},
	detailsContainer: {
		padding: 20,
	},
	image: {
		width: "100%",
		height: 200,
		padding: 20,
	},
	subTitle: {
		color: colors.secondary,
		fontWeight: "bold",
	},
	title: {
		marginBottom: 7,
	},
});
