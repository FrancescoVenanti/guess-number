import { View, StyleSheet } from "react-native";
import colors from "../../constants/colors";

const Card = ({ children }) => {
	return <View style={styles.inputContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
	inputContainer: {
		alignItems: "center",
		marginTop: 20,
		padding: 16,
		marginHorizontal: 24,
		backgroundColor: colors.primary800,
		borderRadius: 8,
		elevation: 10,
		shadowColor: "black",
		shadowOffset: { width: 4, height: 4 },
		shadowRadius: 6,
		shadowOpacity: 0.25,
	},
});
