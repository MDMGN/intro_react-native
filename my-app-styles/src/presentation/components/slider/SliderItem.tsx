import {
  View,
  Image,
  Text,
  ImageSourcePropType,
  useWindowDimensions,
  ScrollView,
} from "react-native"
import React from "react"
import { useLandScape } from "../../hooks/shared/useLandScape"

type Props = {
  path: ImageSourcePropType
  title: string
  description: string
}

export function SliderItem({ path, description, title }: Props) {
  const { width } = useWindowDimensions()
  const { isLandScape } = useLandScape()
  return (
    <ScrollView>
      <View style={{ width: width, alignItems: "center" }}>
        <Image
          source={path}
          style={{
            width: width * 0.8,
            height: width * 0.8,
            resizeMode: isLandScape ? "cover" : "center",
          }}
        />
        <Text>{title}</Text>
        <Text> {description}</Text>
      </View>
    </ScrollView>
  )
}
