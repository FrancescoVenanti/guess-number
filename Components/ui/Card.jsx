import { View, StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";

const Card = ({ children }) => {
	return <View style={styles.inputContainer}>{children}</View>;
};

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
	inputContainer: {
		alignItems: "center",
		marginTop: deviceWidth < 380 ? 16 : 24,
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
