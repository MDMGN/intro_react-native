import { View, Text, Pressable } from "react-native"
import React from "react"
import { type StackProps } from "../../navigation/StackGroup"
import { useNavigation } from "@react-navigation/native"
import AntDesign from "@expo/vector-icons/AntDesign"

//type route = "HOME" | "POSTION"  Valores que toma route
type Props = {
  title: string
  iconLeftName: React.ReactNode
  route: keyof StackProps
}

export function MenuItem({ title, iconLeftName, route }: Props) {
  const navigation = useNavigation()

  return (
    <View>
      {iconLeftName}
      <Text>{title}</Text>
      <Pressable onPress={() => navigation.navigate(route as never)}>
        <AntDesign name="rightcircleo" size={24} color="black" />
      </Pressable>
    </View>
  )
}
