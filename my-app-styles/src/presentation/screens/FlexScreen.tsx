import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from "react-native"
import React, { useEffect, useState } from "react"

type widthMode = "landscape" | "portrait"

export default function FlexScreen() {
  const { width, height } = useWindowDimensions()
  const [widthMode, setWidthMode] = useState<widthMode>("portrait")

  useEffect(() => {
    if (width > height) {
      setWidthMode("landscape")
    }
  }, [width, height])

  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]}></View>
      <View style={[styles.box, styles.box2]}></View>
      <View style={[styles.box, styles.box3]}></View>
      <View style={[styles.box, styles.box1]}></View>
      <View style={[styles.box, styles.box2]}></View>
      <View style={[styles.box, styles.box3]}></View>
      <View style={[styles.box, styles.box1]}></View>
      <View style={[styles.box, styles.box2]}></View>
      <View style={[styles.box, styles.box3]}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 15,
  },
  box: {
    width: 100,
    height: 100,
  },
  box1: {
    backgroundColor: "red",
  },
  box2: {
    backgroundColor: "green",
  },
  box3: {
    backgroundColor: "blue",
  },
})
