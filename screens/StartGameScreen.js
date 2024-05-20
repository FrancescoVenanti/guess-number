import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../Components/ui/PrimaryButton";
import { useState } from "react";
import colors from "../constants/colors";
import Title from "../Components/ui/Title";
import Card from "../Components/ui/Card";
import Instruction from "../Components/ui/Instruction";

const StartGameScreen = ({ onPickNumber }) => {
	const [enteredNumber, setEnteredNumber] = useState("");

	function numberInuptHandler(enteredNumber) {
		setEnteredNumber(enteredNumber);
	}

	function resetInputHandler() {
		setEnteredNumber("");
	}

	function confirmInputHandler() {
		const chosenNumber = parseInt(enteredNumber);
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert("Invalid Number!", "Number has to be between 1 and 99.", [
				{ text: "Okay", style: "destructive", onPress: resetInputHandler },
			]);
			return;
		}

		onPickNumber(enteredNumber);
	}

	return (
		<View style={styles.rootContainer}>
			<Title>Guess my number</Title>
			<Card>
				<Instruction>Enter a number</Instruction>
				<TextInput
					style={styles.numberInput}
					maxLength={2}
					keyboardType="number-pad"
					autoCapitalize="none"
					autoCorrect={false}
					value={enteredNumber}
					onChangeText={numberInuptHandler}
				/>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
					</View>
				</View>
			</Card>
		</View>
	);
};

export default StartGameScreen;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		marginTop: 100,
		alignItems: "center",
	},

	numberInput: {
		marginVertical: 8,
		width: 50,
		height: 50,
		fontSize: 32,
		fontWeight: "bold",
		borderBottomColor: colors.secondary500,
		borderBottomWidth: 2,
		color: colors.secondary500,
		textAlign: "center",
	},
	buttonsContainer: {
		flexDirection: "row",
		justifyContent: "center",
		width: "100%",
		paddingHorizontal: 15,
	},
	buttonContainer: {
		flex: 1,
	},
});
