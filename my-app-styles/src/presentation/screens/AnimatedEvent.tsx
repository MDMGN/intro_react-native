import {
  View,
  Text,
  StyleSheet,
  Animated,
  useAnimatedValue,
} from "react-native"
import React from "react"
import { globalStyles } from "../themes/globalStyles"
import { ScrollView } from "react-native-gesture-handler"

export default function AnimatedEvent() {
  const items = Array.from({ length: 20 }, (_, index) => index)
  const opacityScroll = useAnimatedValue(0)

  return (
    <View style={globalStyles.container}>
      <Animated.View
        style={[
          styles.card,
          {
            backgroundColor: "red",
            opacity: opacityScroll.interpolate({
              inputRange: [0, 100],
              outputRange: [0.5, 1],
              extrapolate: "clamp",
            }),
          },
        ]}
      >
        <Text style={globalStyles.title}>Scrolling</Text>
      </Animated.View>
      <ScrollView
        scrollEventThrottle={0.9}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: opacityScroll } } },
        ])}
      >
        {items.map((el) => (
          <View style={styles.card} key={el}>
            <Text style={globalStyles.title}>{el}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    height: 100,
    width: "80%",
    backgroundColor: "#f0f",
    margin: 5,
    alignSelf: "center",
  },
})
