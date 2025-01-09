import {
  View,
  StyleSheet,
  useAnimatedValue,
  Animated,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native"

type Props = {
  text: string
  isChar?: boolean
}

type SplitTextProps = {
  textContainer?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
}
export function useSplitText({
  text,
  isChar = true,
}: Props): [React.FC<SplitTextProps>, Animated.CompositeAnimation] {
  const splitText = text.split(isChar ? "" : " ")
  const anims = splitText.map((_) => useAnimatedValue(0))

  const animations = anims.map((anim) =>
    Animated.timing(anim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    })
  )

  const composition = Animated.stagger(200, animations)

  const SplitText = ({ textStyle, textContainer }: SplitTextProps) => {
    return (
      <View style={[styles.textContainer, textContainer]}>
        {splitText.map((char, index) => (
          <Animated.Text
            key={index}
            style={[
              styles.text,
              textStyle,
              {
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
                  {
                    skewY: anims[index].interpolate({
                      inputRange: [0, 1],
                      outputRange: ["105deg", "0deg"],
                    }),
                  },
                  {
                    rotateY: anims[index].interpolate({
                      inputRange: [0, 1],
                      outputRange: ["360deg", "0deg"],
                    }),
                  },
                ],
                color: anims[index].interpolate({
                  inputRange: [0, 1],
                  outputRange: ["black", "red"],
                  extrapolate: "clamp",
                }),
              },
            ]}
          >
            {char}
          </Animated.Text>
        ))}
      </View>
    )
  }
  return [SplitText, composition]
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    flexDirection: "row",
  },
  text: {
    fontSize: 100,
    fontWeight: "900",
    letterSpacing: 10,
  },
})
