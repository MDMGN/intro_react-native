import { View, Text, ScrollView, RefreshControl } from "react-native"
import React, { useState } from "react"

export default function PullToRefresh() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5])
  const [isRefreshing, setIsrefreshing] = useState(false)
  const onRefresh = () => {
    setIsrefreshing(true)
    const newArr = Array.from(
      { length: 5 },
      (_, index) => numbers.length + index + 1
    )
    setTimeout(() => {
      setNumbers((previusValue) => [...previusValue, ...newArr].reverse())
      setIsrefreshing(false)
    }, 1500)
  }
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          colors={["green", "blue", "red"]}
        />
      }
    >
      {numbers.map((el) => (
        <View style={{ flex: 1 }} key={el}>
          <Text>{el}</Text>
        </View>
      ))}
    </ScrollView>
  )
}
