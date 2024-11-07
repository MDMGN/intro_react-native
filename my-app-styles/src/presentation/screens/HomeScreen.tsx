import { StyleSheet } from "react-native"
import React from "react"
import { ScrollView } from "react-native-gesture-handler"
import { MenuItem } from "../components/home"

export function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <MenuItem route="POSITION" title="Position" iconLeftName="totop" />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
