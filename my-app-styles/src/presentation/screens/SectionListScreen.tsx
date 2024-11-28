import { View, Text, SectionList } from "react-native"
import React, { useEffect, useState } from "react"
import { ajax } from "../../config/helpers/ajax"
import apiURL from "../../config/api/superHeroe"
import { HeroResponse } from "../../infrastructure/interfaces/HeroResponse"
import { RefreshControl } from "react-native-gesture-handler"

type DataSection = {
  title: string
  data: string[]
}

export function SectionListScreen() {
  const [dataSections, setDataSecctions] = useState([] as DataSection[])
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [currentNumber, setCurrentNumber] = useState(2)

  const updateSections = (data: HeroResponse) => {
    setDataSecctions((previusValue) => {
      const { publisher, "full-name": fullName } = data.biography

      const indexSection = previusValue.findIndex(
        (item) => item.title === publisher
      )
      if (indexSection !== -1) {
        const updatedSections = [...previusValue]
        updatedSections[indexSection].data.push(fullName)
        return updatedSections
      } else {
        return [
          ...previusValue,
          {
            title: publisher,
            data: [fullName],
          },
        ]
      }
    })
  }
  const updateSections2 = (data: HeroResponse[]) => {
    data.forEach((hero) => {
      setDataSecctions((previusValue) => {
        const { publisher, "full-name": fullName } = hero.biography

        const indexSection = previusValue.findIndex(
          (item) => item.title === publisher
        )
        if (indexSection !== -1) {
          const updatedSections = [...previusValue]
          updatedSections[indexSection].data.push(fullName)
          return updatedSections
        } else {
          return [
            ...previusValue,
            {
              title: publisher,
              data: [fullName],
            },
          ]
        }
      })
    })
  }
  useEffect(() => {
    ajax({
      url: `${apiURL}/1`,
      cbSucces: (data: HeroResponse) => {
        updateSections(data)
      },
      cbError: (error) => {
        console.log({ error })
      },
    })
  }, [])

  const onRefresh = async () => {
    const newPages = Array.from(
      { length: 5 },
      (_, index) => index + currentNumber
    )

    const data = await Promise.all(
      newPages.map((page) =>
        fetch(`${apiURL}/${page}`).then((resp) => resp.json())
      )
    )
    updateSections2(data)
  }

  return (
    <View style={{ flex: 1 }}>
      <SectionList
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
        sections={dataSections}
        renderItem={({ item }) => (
          <Text style={{ textAlign: "center" }}>{item}</Text>
        )}
        renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
        ListEmptyComponent={() => (
          <Text
            style={{ fontSize: 25, fontWeight: "bold", textAlign: "center" }}
          >
            Loading...
          </Text>
        )}
        stickySectionHeadersEnabled
      />
    </View>
  )
}
