import { View, StyleSheet } from "react-native"
import Constants from "expo-constants"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export default function withDefaultStyledContainer(Component) {
  return function StyledComponent(props) {
    const { theme, setTheme } = useContext(ThemeContext)
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: theme === "dark" ? "#000" : "#1A2531",
          },
        ]}
      >
        <Component {...props} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
})
