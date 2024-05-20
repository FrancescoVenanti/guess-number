import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
	const [userNumber, setUserNumber] = useState();
	const [gameOver, setGameOver] = useState(true);
	const [roundsNumber, setRoundsNumber] = useState(0);

	const [fontsLoaded] = useFonts({
		"open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	function pickedNumberHandler(selectedNumber) {
		setUserNumber(selectedNumber);
		setGameOver(false);
	}
	function gameOverHandler() {
		setGameOver(true);
	}
	let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

	if (userNumber) {
		screen = <GameScreen userChoice={userNumber} gameOverHandler={gameOverHandler} />;
	}

	function startNewGameHandler() {
		setUserNumber(null);
		setRoundsNumber(0);
	}

	if (gameOver && userNumber) {
		screen = (
			<GameOverScreen userNumber={userNumber} roundsNumber={roundsNumber} onStartNewGame={startNewGameHandler} />
		);
	}

	return (
		<LinearGradient colors={[colors.primary700, colors.secondary500]} style={styles.rootScreen}>
			<ImageBackground
				source={require("./assets/dadi.png")}
				resizeMode="cover"
				imageStyle={styles.backgroundImage}
				style={styles.rootScreen}
			>
				<SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
	backgroundImage: {
		opacity: 0.15,
	},
});
