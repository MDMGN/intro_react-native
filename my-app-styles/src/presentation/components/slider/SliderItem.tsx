import { View, Image, Text, Button } from "react-native"
import React from "react"

type Props = {
  path: () => any
  description: string
}

export function SliderItem({ path, description }: Props) {
  return (
    <View>
      <Image source={path()} />
      <Text> {description}</Text>
      <Button title="" />
    </View>
  )
}
