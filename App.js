import { StatusBar } from "expo-status-bar";
import React from "react";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Image,
	TouchableWithoutFeedback,
	TouchableOpacity,
	TouchableHighlight
} from "react-native";

export default function App() {
	let x = 1;

	const handlePress = () => console.log("text clicked");

	return (
		<SafeAreaView style={styles.container}>
			<Text numberOfLines={1} onPress={handlePress}>
				Hello World again
			</Text>
			<TouchableHighlight onPress={() => console.log("pressed Image")}>
				<Image
					blurRadius={0.75}
					source={{
						width: 150,
						height: 150,
						uri: "https://via.placeholder.com/150",
					}}
				/>
			</TouchableHighlight>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
