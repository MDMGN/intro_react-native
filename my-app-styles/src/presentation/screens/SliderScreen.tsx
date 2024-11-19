import {
  Button,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
} from "react-native"
import React, { useRef, useState } from "react"
import { SliderItem } from "../components/slider/SliderItem"
import { NavigationProp } from "@react-navigation/native"
import { StackProps } from "../navigation/StackGroup"

const images = [
  {
    title: "Title 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, cum ex eveniet repellendus ea mollitia totam culpa omnis accusantium fugit rem voluptatem atque nostrum ab necessitatibus magnam architecto perspiciatis recusandae.",
    path: require("../../../assets/images/image_1.png"),
  },
  {
    title: "Title 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, cum ex eveniet repellendus ea mollitia totam culpa omnis accusantium fugit rem voluptatem atque nostrum ab necessitatibus magnam architecto perspiciatis recusandae.",
    path: require("../../../assets/images/image_2.png"),
  },
  {
    title: "Title 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, cum ex eveniet repellendus ea mollitia totam culpa omnis accusantium fugit rem voluptatem atque nostrum ab necessitatibus magnam architecto perspiciatis recusandae.",
    path: require("../../../assets/images/image_3.png"),
  },
  {
    title: "Title 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, cum ex eveniet repellendus ea mollitia totam culpa omnis accusantium fugit rem voluptatem atque nostrum ab necessitatibus magnam architecto perspiciatis recusandae.",
    path: require("../../../assets/images/image_4.png"),
  },
  {
    title: "Title 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, cum ex eveniet repellendus ea mollitia totam culpa omnis accusantium fugit rem voluptatem atque nostrum ab necessitatibus magnam architecto perspiciatis recusandae.",
    path: require("../../../assets/images/image_5.png"),
  },
]

export default function SliderScreen({
  navigation,
}: {
  navigation: NavigationProp<StackProps>
}) {
  const refFlatList = useRef<FlatList>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextPage = (index: number) => {
    refFlatList.current?.scrollToIndex({ index: index, animated: true })
  }

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent

    const currentIdx = Math.floor(contentOffset.x / layoutMeasurement.width)

    setCurrentIndex(currentIdx < 0 ? 0 : currentIdx)
  }

  return (
    <View>
      <FlatList
        ref={refFlatList}
        data={images}
        horizontal
        pagingEnabled
        onScroll={onScroll}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <SliderItem
            path={item.path}
            title={item.title}
            description={item.description}
          />
        )}
      />
      <Button title="Siguiente" onPress={() => nextPage(currentIndex + 1)} />
    </View>
  )
}
