import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

export default ({ onPress, text, size, theme }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (size === "double") {
    buttonStyles.push(styles.buttonDouble);
  }

  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
  } else if ( theme === "num") {
    buttonStyles.push(styles.buttonNum);
  } else if (theme === "equal") {
    buttonStyles.push(styles.buttonEqual);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

// set dimmenstion
const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#333333",
    flex: 1,
    height: Math.floor(buttonWidth - 20),
    alignItems: "center",
    justifyContent: "center",
    //borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  text: {
    color: "#000",
    fontSize: 18,
  },
  textSecondary: {
    color: "#060606",
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40,
  },
  buttonSecondary: {
    backgroundColor: "#91EAFD",
  },
  buttonAccent: {
    backgroundColor: "#9FFD91",
  },
  buttonNum: {
    backgroundColor: "#F8FD91",
  },

  buttonEqual: {
    backgroundColor: "#D191FD",
  }

});