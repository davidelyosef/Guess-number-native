import { View, StyleSheet } from "react-native";
import colors from "../../constants/colors";

const Card = ({children}) => {
  return (
    <View style={styles.inputContainer}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    paddingBottom: 16,
    borderRadius: 12,
    backgroundColor: colors.darkRed,

    justifyContent: "center",
    alignItems: "center",

    elevation: 4,
    shadowColor: colors.black,
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    padding: 12,
  },
});

export default Card;