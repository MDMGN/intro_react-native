import { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  useAnimatedValue,
  Button,
  Animated,
} from "react-native"

export default function AnimateStagger() {
  const animate = Array.from({ length: 5 }, () => useAnimatedValue(0))
  const animations = animate.map((anim) =>
    Animated.timing(anim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    })
  )
  const onAnimate = () => {
    Animated.loop(Animated.stagger(1000, animations)).start()
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 20,
        padding: 20,
      }}
    >
      {animate.map((anim, index) => (
        <Animated.View key={index} style={[styles.box, { opacity: anim }]} />
      ))}
      <View />
      <Button title={"Animate"} onPress={onAnimate} />
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: "#f00",
  },
})
