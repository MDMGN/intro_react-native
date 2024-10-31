import { useContext } from "react"
import { StyleSheet, View } from "react-native"
import { ThemeContext } from "../context/ThemeContext"

export function BackgroundRotateRound() {
  const { theme } = useContext(ThemeContext)
  return (
    <View
      style={[
        styles.background,
        {
          backgroundColor: theme === "dark" ? "#000" : "#1A2531",
        },
      ]}
    ></View>
  )
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    marginTop: 50,
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
})
