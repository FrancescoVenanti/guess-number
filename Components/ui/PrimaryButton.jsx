import { View, Text, Pressable, StyleSheet } from "react-native";
import colors from "../../constants/colors";

const PrimaryButton = ({ children, onPress }) => {
	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				onPress={onPress}
				android_ripple={{ color: colors.primary600 }}
				style={({ pressed }) =>
					pressed ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer
				}
			>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
};

export default PrimaryButton;

const styles = StyleSheet.create({
	buttonOuterContainer: {
		margin: 4,
		borderRadius: 28,
		overflow: "hidden",
	},
	buttonInnerContainer: {
		backgroundColor: colors.primary500,
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 2,
	},
	buttonText: {
		color: colors.secondary500,
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",
	},
	pressed: {
		opacity: 0.75,
	},
});
