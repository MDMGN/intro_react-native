import { View, Image, Text, ImageSourcePropType } from "react-native"
import React from "react"

type Props = {
  path: ImageSourcePropType
  title: string
  description: string
}

export function SliderItem({ path, description, title }: Props) {
  return (
    <View>
      <Image source={path} />
      <Text>{title}</Text>
      <Text> {description}</Text>
    </View>
  )
}
