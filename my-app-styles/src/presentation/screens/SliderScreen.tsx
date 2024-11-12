import { FlatList } from "react-native"
import React from "react"
import { SliderItem } from "../components/slider/SliderItem"

const images = [1, 2, 3]

export default function SliderScreen() {
  return <FlatList data={images} renderItem={(item) => <SliderItem />} />
}
