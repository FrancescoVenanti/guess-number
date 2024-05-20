import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import PrimaryButton from "../Components/ui/PrimaryButton";
import Title from "../Components/ui/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../Components/game/numberContainer";
import Card from "../Components/ui/Card";
import Instruction from "../Components/ui/Instruction";
import { Ionicons } from "@expo/vector-icons";

function generateRandomBetween(min, max, exclude) {
	const rndNum = Math.floor(Math.random() * (max - min)) + min;
	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
}

let min = 1;
let max = 100;

const GameScreen = ({ userChoice, gameOverHandler }) => {
	const initlalGuess = generateRandomBetween(1, 100, userChoice);
	const [currentGuess, setCurrentGuess] = useState(initlalGuess);
	const [rounds, setRounds] = useState([initlalGuess]);

	useEffect(() => {
		if (currentGuess == userChoice) {
			gameOverHandler();
		}
	}, [currentGuess, userChoice, gameOverHandler]);

	useEffect(() => {
		min = 1;
		max = 100;
	}, []);

	function nextGuessHandler(direction) {
		if (
			(direction === "lower" && currentGuess < userChoice) ||
			(direction === "greater" && currentGuess > userChoice)
		) {
			Alert.alert("Don't lie!", "You know that this is wrong...", [{ text: "Sorry!", style: "cancel" }]);
			return;
		}
		if (direction === "lower") {
			max = currentGuess;
		} else {
			min = currentGuess + 1;
		}
		console.log(min, max);
		const newRndNumber = generateRandomBetween(min, max, currentGuess);
		setCurrentGuess(newRndNumber);
		setRounds((currentRounds) => [newRndNumber, ...currentRounds]);
	}
	return (
		<View style={styles.screen}>
			<Title>Oppo's guess </Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card>
				<Instruction style={styles.InstructionText}>Is it higher or lower?</Instruction>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
							<Ionicons name="remove" size={24} color={"white"} />
						</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
							<Ionicons name="add" size={24} color={"white"} />
						</PrimaryButton>
					</View>
				</View>
			</Card>
			<View>
				{/* {rounds.map((round) => (
					<Text key={round}>{round}</Text>
				))} */}
				<FlatList
					data={rounds}
					renderItem={(itemData) => (
						<View>
							<Text>{itemData.item}</Text>
						</View>
					)}
					keyExtractor={(item) => item}
				/>
			</View>
		</View>
	);
};

export default GameScreen;

const styles = StyleSheet.create({
	screen: {
		padding: 24,
		marginTop: 100,
	},
	InstructionText: {
		marginBottom: 16,
	},
	buttonsContainer: {
		flexDirection: "row",
	},
	buttonContainer: {
		flex: 1,
	},
});
