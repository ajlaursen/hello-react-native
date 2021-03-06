import React, { useState } from "react";
import {
	View,
	TextInput,
	StyleSheet,
	TouchableWithoutFeedback,
	Modal,
	Button,
	FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/defaultStyles";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

export default function AppPicker({
	icon,
	items,
	onSelectItem,
	placeholder,
	selectedItem,
}) {
	const [modalVisible, setModalVisible] = useState("false");

	return (
		<>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={styles.container}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							size={20}
							color={defaultStyles.colors.medium}
							style={styles.icon}
						></MaterialCommunityIcons>
					)}
					<AppText style={styles.text}>
						{selectedItem ? selectedItem.label : placeholder}
					</AppText>
					<MaterialCommunityIcons
						name="chevron-down"
						size={20}
						color={defaultStyles.colors.medium}
					></MaterialCommunityIcons>
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={modalVisible} animationType="slide">
				<Screen>
					<Button
						title="close"
						onPress={() => setModalVisible(false)}
					></Button>
					<FlatList
						data={items}
						keyExtractor={(item) => item.value.toString()}
						renderItem={({ item }) => (
							<PickerItem
								label={item.label}
								onPress={() => {
									setModalVisible(false);
									onSelectItem(item);
								}}
							></PickerItem>
						)}
					></FlatList>
				</Screen>
			</Modal>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.colors.light,
		borderRadius: 25,
		flexDirection: "row",
		width: "100%",
		padding: 15,
		marginVertical: 10,
	},
	icon: {
		marginRight: 10,
	},
	text: {
		flex: 1,
	},
});
