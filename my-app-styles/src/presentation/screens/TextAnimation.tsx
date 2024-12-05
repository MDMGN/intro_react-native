import { View, StyleSheet, useAnimatedValue, Animated } from "react-native"
import { useEffect } from "react"
import { useSpliText } from "../hooks/shared/useSplitText"

export function TextAnimation() {
  const { SpliText, composition } = useSpliText({ text: "Hola!" })
  const { SpliText: SplitText2, composition: composition2 } = useSpliText({
    text: "Hola2!",
  })

  useEffect(() => {
    Animated.loop(Animated.sequence([composition, composition2])).start()
  }, [])

  return (
    <View style={styles.container}>
      {SpliText}
      {SplitText2}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    flexDirection: "row",
  },
})
