import React from "react";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Image,
	TouchableWithoutFeedback,
	TouchableOpacity,
	TouchableHighlight,
	Button,
	Alert,
	Platform,
	StatusBar,
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
			<Button
				title={"press me"}
				onPress={() =>
					Alert.prompt("my title", "my message", (text) =>
						console.log(text)
					)
				}
			></Button>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		// alignItems: "center",
		// justifyContent: "center",
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
});
