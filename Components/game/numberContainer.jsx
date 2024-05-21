import colors from "../../constants/colors";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const NumberContainer = ({ children }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.number}>{children}</Text>
		</View>
	);
};

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
	container: {
		borderWidth: 4,
		borderColor: colors.secondary500,
		padding: deviceWidth < 380 ? 12 : 24,
		borderRadius: 8,
		marginVertical: deviceHeight < 600 ? 16 : 24,
		alignItems: "center",
		justifyContent: "center",
	},
	number: {
		color: colors.secondary500,
		fontSize: 24,
		fontFamily: "open-sans-bold",
	},
});
