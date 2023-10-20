import { StyleSheet, Text } from "react-native";

import colors from "../../constants/colors";

const InstructionText = ({children, style}) => {
  return (
    <Text style={[styles.inputContainerTitle, style]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  inputContainerTitle: {
    fontSize: 24,
    color: colors.yellowish,
  },
})

export default InstructionText;