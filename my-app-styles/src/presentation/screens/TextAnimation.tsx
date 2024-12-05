import {
  View,
  Text,
  StyleSheet,
  useAnimatedValue,
  Animated,
} from "react-native"
import React, { useEffect } from "react"

export function TextAnimation() {
  const text = "Hello!"
  const splitText = text.split("")
  const anims = splitText.map((_) => useAnimatedValue(0))

  const animations = anims.map((anim) =>
    Animated.timing(anim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    })
  )

  useEffect(() => {
    Animated.stagger(200, animations).start()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.text}>
        {splitText.map((char, index) => (
          <Animated.Text
            key={index}
            style={{
              fontSize: 25,
              fontWeight: "bold",
              opacity: anims[index],
              transform: [
                {
                  translateX: anims[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [100, 0],
                  }),
                },
                {
                  translateY: anims[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [-100, 0],
                  }),
                },
                {
                  scale: anims[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.02, 1.2],
                  }),
                },
              ],
            }}
          >
            {char}
          </Animated.Text>
        ))}
      </View>
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
