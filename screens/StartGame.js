import { TextInput, SafeAreaView, StyleSheet, View, Alert, Text } from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";
import colors from "../constants/colors";
import { useState } from "react";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const StartGame = ({ onPickNumber }) => {
  const [number, setNumber] = useState("");

  const resetNumber = () => {
    setNumber("");
  };

  const confirmNumber = () => {
    const selectedNumber = +number;

    if (isNaN(selectedNumber) || selectedNumber <= 0) {
      Alert.alert("Invalid number", "number has to be bigger than 0", [
        {
          text: "OK",
          style: "cancel",
          onPress: resetNumber,
        },
      ]);
      return;
    }

    onPickNumber(selectedNumber);
  };

  return (
    <View>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          value={number}
          onChangeText={(value) => setNumber(value)}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetNumber}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmNumber}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  numberInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    borderBottomColor: colors.yellowish,
    borderBottomWidth: 2,
    color: colors.yellowish,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default StartGame;
