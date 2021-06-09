import React from "react";
import { View, Text, FlatList, SafeAreaView, StyleSheet } from "react-native";

import ListItemSerporator from "../components/ListItemSeperator";
import ListItem from "../components/ListItem/ListItem";
import Screen from "../components/Screen/Screen";

const messages = [
	{
		id: 1,
		title: "T1",
		description: "d1",
		image: require("../assets/mosh.jpg"),
	},
	{
		id: 2,
		title: "T2",
		description: "d2",
		image: require("../assets/mosh.jpg"),
	},
];

export default function MessageScreen() {
	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={(message) => message.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subTitle={item.description}
						image={item.image}
					/>
				)}
				ItemSeparatorComponent={ListItemSerporator}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({});
