import { useState } from "react"
import { View, Text, ActivityIndicator, Image } from "react-native"
import { FlatList } from "react-native-gesture-handler"

export default function InfinityScroll() {
  const [numbers, setNumbers] = useState([
    "https://picsum.photos/id/1/200/300",
    "https://picsum.photos/id/2/200/300",
    "https://picsum.photos/id/3/200/300",
    "https://picsum.photos/id/4/200/300",
    "https://picsum.photos/id/5/200/300",
  ] as string[])
  const onLoadMore = () => {
    const newArray = Array.from(
      { length: 5 },
      (_, index) =>
        `https://picsum.photos/id/${numbers.length + index + 1}/200/300`
    )
    setTimeout(
      () => setNumbers((previusValue) => [...previusValue, ...newArray]),
      1500
    )
  }
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={numbers}
        onEndReachedThreshold={0.6}
        onEndReached={onLoadMore}
        ListFooterComponent={<ActivityIndicator size="large" />}
        keyExtractor={(item, index) => index + 1 + ""}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        renderItem={({ item }) => (
          <View
            style={{
              height: 300,
              width: "100%",
              backgroundColor: "gray",
              justifyContent: "center",
            }}
          >
            <Image
              source={{ uri: item }}
              height={300}
              width={200}
              resizeMode="cover"
            />
          </View>
        )}
      />
      {/*   <Image
        source={{ uri: `https://picsum.photos/id/237/200/300` }}
        height={300}
        width={200}
        resizeMode="cover"
      /> */}
    </View>
  )
}
