import { useState } from "react"
import { View, Text, ActivityIndicator, Image } from "react-native"
import { FlatList } from "react-native-gesture-handler"

export default function InfinityScroll() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5] as number[])
  const onLoadMore = () => {
    const newArray = Array.from(
      { length: 5 },
      (_, index) => numbers.length + index + 1
    )
    setTimeout(
      () => setNumbers((previusValue) => [...previusValue, ...newArray]),
      1500
    )
  }
  return (
    <View style={{ flex: 1 }}>
      {/* <FlatList
        data={numbers}
        onEndReachedThreshold={0.6}
        onEndReached={onLoadMore}
        ListFooterComponent={<ActivityIndicator size="large" />}
        keyExtractor={(item, index) => index + 1 + ""}
        renderItem={({ item }) => (
          <View
            style={{
              height: 300,
              width: "100%",
              backgroundColor: "gray",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ textAlign: "center", fontSize: 50, fontWeight: "bold" }}
            >
              {item}
            </Text>
          </View>
        )}
          
      /> */}
      <Image
        source={{ uri: "https://picsum.photos/id/237/200/300" }}
        height={300}
        width={200}
        resizeMode="cover"
      />
    </View>
  )
}
