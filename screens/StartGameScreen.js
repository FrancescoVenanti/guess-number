import {
	TextInput,
	View,
	StyleSheet,
	Alert,
	Text,
	useWindowDimensions,
	KeyboardAvoidingView,
	ScrollView,
} from "react-native";
import PrimaryButton from "../Components/ui/PrimaryButton";
import { useState } from "react";
import colors from "../constants/colors";
import Title from "../Components/ui/Title";
import Card from "../Components/ui/Card";
import Instruction from "../Components/ui/Instruction";

const StartGameScreen = ({ onPickNumber }) => {
	const [enteredNumber, setEnteredNumber] = useState("");

	const { width, height } = useWindowDimensions();

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

	const marginTopDistance = height < 400 ? 20 : 100;

	return (
		<ScrollView style={styles.screen}>
			<KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30} style={styles.screen}>
				<View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
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
			</KeyboardAvoidingView>
		</ScrollView>
	);
};

export default StartGameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	rootContainer: {
		flex: 1,
		/* marginTop: 100, */
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
