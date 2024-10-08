import { FlatList, Text } from "react-native";
import { Todo } from "./Todo";

export function Todos({ todos }) {
  return (
    <FlatList
      style={{ marginVertical: 250 }}
      data={todos}
      keyExtractor={(todo) => todo.id}
      renderItem={({ item }) => <Todo todo={item}></Todo>}
    />
  );
}
