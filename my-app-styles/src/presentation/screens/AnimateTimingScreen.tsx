import React from "react"
import {
  Animated,
  View,
  StyleSheet,
  Button,
  useAnimatedValue,
  Easing,
} from "react-native"

export const Animate2Screen = () => {
  const animateY = useAnimatedValue(0)
  const animateX = useAnimatedValue(0)
  const onAnimateX = () => {
    Animated.timing(animateX, {
      toValue: 100,
      duration: 2500,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start()
  }
  const onAnimateY = () => {
    Animated.timing(animateY, {
      toValue: 200,
      duration: 2500,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start()
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
                translateX: animateX,
              },
              {
                translateY: animateY,
              },
            ],
          },
        ]}
      />
      <Button title="Animate X" onPress={onAnimateX} />
      <Button title="Animate Y" onPress={onAnimateY} />
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
