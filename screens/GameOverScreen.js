import { View, Text, StyleSheet, Image } from "react-native";
import Title from "../Components/ui/Title";
import colors from "../constants/colors";
import PrimaryButton from "../Components/ui/PrimaryButton";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
	return (
		<View style={styles.rootContainer}>
			<Title>Game Over</Title>
			<View style={styles.imageContainer}>
				<Image source={require("../assets/boldi.jpg")} style={styles.image} />
			</View>
			<Text style={styles.summaryText}>
				Your phone needed <Text style={styles.Highlight}>{roundsNumber}</Text> rounds to guess the number
				<Text style={styles.Highlight}> {userNumber}</Text>.
			</Text>
			<PrimaryButton onPress={onStartNewGame}>NEW GAME</PrimaryButton>
		</View>
	);
};

export default GameOverScreen;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		padding: 24,
		justifyContent: "center",
		alignItems: "center",
	},
	imageContainer: {
		width: 350,
		height: 350,
		borderRadius: 200,
		borderWidth: 3,
		borderColor: colors.primary800,
		overflow: "hidden",
		marginVertical: 24,
	},
	image: {
		width: "100%",
		height: "100%",
	},
	summaryText: {
		fontFamily: "open-sans",
		fontSize: 24,
		textAlign: "center",
		marginBottom: 24,
	},
	Highlight: {
		color: colors.primary500,
		fontFamily: "open-sans-bold",
	},
});
