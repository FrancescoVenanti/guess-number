import { Text, StyleSheet } from "react-native";
import colors from "../../constants/colors";

const Instruction = ({ children, style }) => {
	return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default Instruction;

const styles = StyleSheet.create({
	instructionText: {
		fontFamily: "open-sans",
		fontSize: 24,
		color: colors.secondary500,
	},
});
