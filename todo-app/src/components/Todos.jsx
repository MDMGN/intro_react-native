import {  FlatList, Text } from 'react-native'

export  function Todos({todos}) {
  return (
    <FlatList
        style={{  marginVertical: 250}}
        data={todos}
        keyExtractor={(todo)=> todo.id}
        renderItem={ ( {item})=><Text> {item.title} </Text> }
    />
  )
}