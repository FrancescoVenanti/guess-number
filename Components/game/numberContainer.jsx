import colors from "../../constants/colors";
import { View, Text, StyleSheet } from "react-native";

const NumberContainer = ({ children }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.number}>{children}</Text>
		</View>
	);
};

export default NumberContainer;

const styles = StyleSheet.create({
	container: {
		borderWidth: 4,
		borderColor: colors.secondary500,
		padding: 12,
		borderRadius: 8,
		marginVertical: 16,
		alignItems: "center",
		justifyContent: "center",
	},
	number: {
		color: colors.secondary500,
		fontSize: 24,
		fontFamily: "open-sans-bold",
	},
});
