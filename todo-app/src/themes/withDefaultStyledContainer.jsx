import { View, StyleSheet } from "react-native"
import Constants from "expo-constants"

export default function withDefaultStyledContainer(Component) {
  return function StyledComponent(props) {
    return (
      <View style={styles.container}>
        <Component {...props} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#000",
  },
})
