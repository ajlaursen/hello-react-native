import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen/Screen";
import Card from "../components/Card/Card";
import colors from "../config/colors";

const listings = [
	{
		id: 1,
		title: "red jacket for sale",
		price: 100,
		image: require("../assets/jacket.jpg"),
	},
	{
		id: 2,
		title: "Couch for sale",
		price: 10000,
		image: require("../assets/couch.jpg"),
	},
];

export default function ListingScreen() {
	return (
		<Screen style={styles.screen}>
			<FlatList
				data={listings}
				keyExtractor={(listings) => listings.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						subTitle={"$" + item.price}
						image={item.image}
					></Card>
				)}
			></FlatList>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 20,
		backgroundColor: colors.light,
	},
});
