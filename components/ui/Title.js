import { Text, StyleSheet } from "react-native";

import colors from "../../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.white,
    textAlign: "center",
    borderWidth: 3,
    borderColor: colors.white,
    padding: 4,
    marginBottom: 24,
  },
});

export default Title;
