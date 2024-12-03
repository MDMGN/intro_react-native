import { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  useAnimatedValue,
  Button,
  Animated,
} from "react-native"

export default function AnimateSpringScreen() {
  const animate = useAnimatedValue(0)
  const [isReversed, setIsReversed] = useState(false)

  const onAnimate = () => {
    Animated.spring(animate, {
      toValue: isReversed ? 0 : 1,
      damping: 20,
      stiffness: 100,
      useNativeDriver: true,
    }).start(() => setIsReversed(!isReversed))
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Animated.View
        style={[
          styles.box,
          {
            transform: [
              {
                translateY: animate.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -120],
                  extrapolate: "clamp",
                }),
              },
              {
                rotate: animate.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0deg", "180deg"],
                  extrapolate: "clamp",
                }),
              },
            ],
          },
        ]}
      />
      <Button title={!isReversed ? "Animate" : "Reverse"} onPress={onAnimate} />
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    width: 150,
    height: 150,
    backgroundColor: "#f00",
  },
})
