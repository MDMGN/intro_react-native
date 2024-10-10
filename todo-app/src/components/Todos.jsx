import { View, FlatList, StyleSheet } from 'react-native'
import { Todo } from './Todo'

export function Todos({ todos }) {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        data={todos}
        keyExtractor={(todo) => todo.id}
        renderItem={({ item }) => <Todo todo={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
})
