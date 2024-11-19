import { StyleSheet } from "react-native"
import React from "react"
import AntDesign from "@expo/vector-icons/AntDesign"
import { ScrollView } from "react-native-gesture-handler"
import { MenuItem } from "../components/home"
import { Menu } from "react-native-paper"

export function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Menu.Item leadingIcon="redo" onPress={() => {}} title="Redo" />
      <MenuItem
        route="POSITION"
        title="Position"
        iconLeftName={<AntDesign name="totop" size={20} />}
      />
      <MenuItem
        route="SLIDER"
        title="Slider"
        iconLeftName={<AntDesign name="totop" size={20} />}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  boxOrange: {
    position: "relative",
    width: 100,
    height: 100,
    backgroundColor: "orange",
    borderWidth: 5,
    borderColor: "white",
  },
  boxBlue: {
    position: "relative",
    width: 100,
    height: 100,
    backgroundColor: "blue",
    borderWidth: 5,
    borderColor: "white",
  },
  boxRed: {
    position: "absolute",
    width: 100,
    height: 100,
    backgroundColor: "red",
    borderWidth: 5,
    borderColor: "white",
    margin: 5,
    top: 0,
    right: 0,
  },
})
