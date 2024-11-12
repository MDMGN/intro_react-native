import { View, Text, Pressable, StyleSheet } from "react-native"
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
    <View style={styles.container}>
      {iconLeftName}
      <Text style={styles.title}>{title}</Text>
      <Pressable onPress={() => navigation.navigate(route as never)}>
        <AntDesign name="rightcircleo" size={24} color="black" />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    padding: 20,
    borderWidth: 3.5,
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  title: {
    flex: 1,
    marginLeft: 20,
    textTransform: "uppercase",
    fontWeight: "500",
    lineHeight: 20,
  },
})
