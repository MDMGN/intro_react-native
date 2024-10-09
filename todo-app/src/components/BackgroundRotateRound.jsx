import { StyleSheet, View } from "react-native";

export function BackgroundRotateRound() {
  return <View style={styles.background}></View>;
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    backgroundColor: "#1A2531",
    top: -250,
    right: 10,
    width: 1000,
    height: 1100,
    transform: [
      { rotate: "-70deg" },
      { translateX: -110 },
      { translateY: 100 },
    ],
    borderRadius: 300,
    borderWidth: 2,
  },
});
