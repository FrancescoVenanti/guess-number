import { StyleSheet, View, Text } from "react-native";
import colors from "../../constants/colors";

const GuessLogItem = ({ guess, index }) => {
	return (
		<View style={styles.guessItem}>
			<Text style={styles.guessText}>#{index}</Text>
			<Text style={styles.guessText}>{guess}</Text>
		</View>
	);
};

export default GuessLogItem;

const styles = StyleSheet.create({
	guessItem: {
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 16,
		marginVertical: 8,
		backgroundColor: colors.secondary500,
		borderColor: colors.primary800,
		borderWidth: 2,
		borderRadius: 16,
		elevation: 4,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.26,
	},
	guessText: {
		fontFamily: "open-sans",
		fontSize: 18,
	},
});
