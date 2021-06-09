import React, { useState } from "react";
import { View, Text, FlatList, SafeAreaView, StyleSheet } from "react-native";

import ListItemSerporator from "../components/ListItemSeperator";
import ListItem from "../components/ListItem/ListItem";
import Screen from "../components/Screen/Screen";
import ListItmeDeleteAction from "../components/ListItemDeleteAction/ListItemDeleteAction";

const initialMessages = [
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
	const [refershing, setRefreshing] = useState(false);
	const [messages, setMessages] = useState(initialMessages);
	const handleDelete = (message) => {
		setMessages(messages.filter((m) => m.id !== message.id));
	};

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
						onPress={() => console.log("here")}
						renderRightActions={() => (
							<ListItmeDeleteAction
								onPress={() => handleDelete(item)}
							/>
						)}
					/>
				)}
				ItemSeparatorComponent={ListItemSerporator}
				refreshing={refershing}
				onRefresh={() =>
					setMessages([
						{
							id: 2,
							title: "T2",
							description: "d2",
							image: require("../assets/mosh.jpg"),
						},
					])
				}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({});
