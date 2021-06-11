import React, { useState } from "react";
import { createPortal } from "react-dom";
import { View, StyleSheet, FlatList } from "react-native";

import Icon from "../components/Icon/Icon";
import ListItem from "../components/ListItem/ListItem";
import ListItemSerporator from "../components/ListItemSeperator";
import Screen from "../components/Screen/Screen";
import colors from "../config/colors";

const info = {
	id: 1,
	name: "Mosh Hamedani",
	email: "programmingwithmos@gmail.com",
	image: require("../assets/mosh.jpg"),
};

const menuItems = [
	{
		title: "My Listings",
		icon: {
			name: "format-list-bulleted",
			backgroundColor: colors.primary,
		},
	},
	{
		title: "My Messages",
		icon: {
			name: "email",
			backgroundColor: colors.secondary,
		},
	},
];

export default function MyAccountScreen() {
	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					title={info.name}
					subTitle={info.email}
					image={info.image}
					styles={styles.item}
				></ListItem>
			</View>
			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={(item) => item.title}
					ItemSeparatorComponent={ListItemSerporator}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							IconComponent={
								<Icon
									name={item.icon.name}
									backgroundColor={item.icon.backgroundColor}
								></Icon>
							}
							subTitle={item.subTitle}
							image={item.image}
						></ListItem>
					)}
				/>
			</View>
			<ListItem
				title="Log Out"
				IconComponent={
					<Icon name="logout" backgroundColor="#ffe66d"></Icon>
				}
			></ListItem>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 15,
		marginBottom: 15,
		backgroundColor: colors.white,
	},
	screen: {
		backgroundColor: colors.light,
	},
});
