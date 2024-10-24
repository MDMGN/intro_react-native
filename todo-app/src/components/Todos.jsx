import { View, FlatList, StyleSheet } from "react-native"
import { Todo } from "./Todo"

export function Todos({ todos, handleUpdateTodos, setTodo }) {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={todos}
        keyExtractor={(todo) => todo.id}
        renderItem={({ item }) => (
          <Todo
            todo={item}
            handleUpdateTodos={handleUpdateTodos}
            setTodo={setTodo}
          />
        )}
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
