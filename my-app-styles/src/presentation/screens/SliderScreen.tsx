import { FlatList } from "react-native"
import React from "react"
import { SliderItem } from "../components/slider/SliderItem"

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

export default function SliderScreen() {
  return (
    <FlatList
      data={images}
      horizontal
      pagingEnabled
      renderItem={({ item }) => (
        <SliderItem
          path={item.path}
          title={item.title}
          description={item.description}
        />
      )}
    />
  )
}
