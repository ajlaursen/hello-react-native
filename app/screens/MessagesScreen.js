import React from "react";
import {
	View,
	Text,
	FlatList,
	SafeAreaView,
	StyleSheet,
	Platform,
	StatusBar,
} from "react-native";

import ListItem from "../components/ListItem/ListItem";

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
		<SafeAreaView style={styles.screen}>
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
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	screen: {
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
});
