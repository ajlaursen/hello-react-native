import React, { useState } from "react";
import { createPortal } from "react-dom";
import { View, StyleSheet } from "react-native";

import ListItem from "../components/ListItem/ListItem";
import Screen from "../components/Screen/Screen";
import colors from "../config/colors";

const info = {
	id: 1,
	name: "Mosh Hamedani",
	email: "programmingwithmos@gmail.com",
	image: require("../assets/mosh.jpg"),
};

export default function MyAccountScreen() {
	return (
		<Screen styles={styles.accountScreen}>
			<View style={styles.listItemContainer}>
				<ListItem
					title={info.name}
					subTitle={info.email}
					image={info.image}
					styles={styles.item}
				></ListItem>
			</View>
      
		</Screen>
	);
}

const styles = StyleSheet.create({
	accountScreen: {
		backgroundColor: colors.black,
	},
	listItemContainer: {
		marginTop: 15,
		marginBottom: 15,
		backgroundColor: colors.white,
	},
});
