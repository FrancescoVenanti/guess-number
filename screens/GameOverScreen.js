import { View, Text, StyleSheet, Image, Dimensions, useWindowDimensions, ScrollView } from "react-native";
import Title from "../Components/ui/Title";
import colors from "../constants/colors";
import PrimaryButton from "../Components/ui/PrimaryButton";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
	const { width, height } = useWindowDimensions();

	let imageSize = 300;
	if (width < 380) {
		imageSize = 150;
	}
	if (height < 400) {
		imageSize = 80;
	}

	const imageStyle = {
		width: imageSize,
		height: imageSize,
		borderRadius: imageSize / 2,
	};

	return (
		<ScrollView style={styles.screen}>
			<View style={styles.rootContainer}>
				<Title>Game Over</Title>
				<View style={[styles.imageContainer, imageStyle]}>
					<Image source={require("../assets/boldi.jpg")} style={styles.image} />
				</View>
				<Text style={styles.summaryText}>
					Your phone needed <Text style={styles.Highlight}>{roundsNumber}</Text> rounds to guess the number
					<Text style={styles.Highlight}> {userNumber}</Text>.
				</Text>
				<PrimaryButton onPress={onStartNewGame}>NEW GAME</PrimaryButton>
			</View>
		</ScrollView>
	);
};

export default GameOverScreen;

//const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	rootContainer: {
		flex: 1,
		padding: 24,
		marginTop: 50,
		justifyContent: "center",
		alignItems: "center",
	},
	imageContainer: {
		/* width: deviceWidth * 0.7,
		height: deviceWidth * 0.7,
		borderRadius: 200, */
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
