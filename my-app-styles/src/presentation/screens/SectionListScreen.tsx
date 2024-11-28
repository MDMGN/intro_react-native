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

  useEffect(() => {
    ajax({
      url: `${apiURL}/1`,
      cbSucces: (data: HeroResponse) => {
        const { publisher, "full-name": fullName } = data.biography

        setDataSecctions((previusValue) => {
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
      },
      cbError: (error) => {
        console.log({ error })
      },
    })
  }, [])
  return (
    <View style={{ flex: 1 }}>
      <SectionList
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={() => {}} />
        }
        sections={dataSections}
        renderItem={({ item }) => <Text>{item}</Text>}
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
