import { Text, StyleSheet } from "react-native";

const Title = ({ children }) => {
	return <Text style={styles.Title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
	Title: {
		fontFamily: "open-sans-bold",
		fontSize: 24,
		color: "white",
		padding: 12,
		borderWidth: 2,
		borderColor: "white",
		textAlign: "center",
		borderRadius: 8,
	},
});
