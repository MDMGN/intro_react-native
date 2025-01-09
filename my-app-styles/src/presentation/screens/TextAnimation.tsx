import { View, StyleSheet, Animated } from "react-native"
import { useEffect } from "react"
import { useSplitText } from "../hooks/shared/useSplitText"

export function TextAnimation() {
  const [SplitText, composition] = useSplitText({ text: "Texto 1" })
  const [SplitText2, composition2] = useSplitText({ text: "Texto 2" })
  useEffect(() => {
    Animated.loop(Animated.sequence([composition, composition2])).start()
  }, [])

  return (
    <View style={styles.container}>
      <SplitText textStyle={{ fontSize: 36 }} />
      <SplitText2 />
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
