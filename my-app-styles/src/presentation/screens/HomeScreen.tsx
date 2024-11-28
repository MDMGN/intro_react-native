import { StyleSheet, View } from "react-native"
import React from "react"
import AntDesign from "@expo/vector-icons/AntDesign"
import { ScrollView } from "react-native-gesture-handler"
import { MenuItem } from "../components/home"
import { Menu } from "react-native-paper"

export function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
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
        <MenuItem
          route="SCROLL"
          title="Scroll Infinity"
          iconLeftName={<AntDesign name="totop" size={20} />}
        />
        <MenuItem
          route="PULLTOREFRESH"
          title="Pull to Refresh"
          iconLeftName={<AntDesign name="totop" size={20} />}
        />
        <MenuItem
          route="Animate"
          title="Animate React Native"
          iconLeftName={<AntDesign name="totop" size={20} />}
        />
        <MenuItem
          route="SECTIONLIST"
          title="Section List / Fetch API"
          iconLeftName={<AntDesign name="totop" size={20} />}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
  },
})
