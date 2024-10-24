import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { StyleSheet, Text, View, Modal } from "react-native"
import {
  BackgroundRotateRound,
  FloatingActionButton,
  Form,
  Message,
  Todos,
} from "./src/components"
import Toast from "react-native-toast-message"

export default function App() {
  const [open, setOpen] = useState(false) // Modal State
  const [todo, setTodo] = useState(null)
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Tarea 1",
      date: "",
      description: "",
      completed: false,
    },
    {
      id: 2,
      title: "Tarea 2",
      date: "",
      description: "",

      completed: false,
    },
    {
      id: 3,
      title: "Tarea 3",
      description: "",
      date: "",
      completed: false,
    },
  ]) // TODOS STATE
  const handleFAB = () => setOpen(!open)

  const handleUpdateTodos = (todoUpdate) => {
    if (typeof todoUpdate === "object") {
      setTodos((previusTodo) =>
        previusTodo.map((todo) =>
          todo.id === todoUpdate.id ? todoUpdate : todo
        )
      )
    } else {
      setTodos((previusTodo) =>
        previusTodo.filter((todo) => todo.id !== todoUpdate)
      )
    }
  }

  return (
    <>
      <BackgroundRotateRound />
      <View style={styles.container}>
        <StatusBar mode="auto" />
        <Text
          style={{
            fontWeight: "bold",
            color: "#fff",
            fontSize: 30,
          }}
        >
          TODO APP
        </Text>

        <Modal visible={!!todo || open} animationType={"slide"}>
          <Form
            setOpen={setOpen}
            setTodos={setTodos}
            todo={todo}
            setTodo={setTodo}
            handleUpdateTodos={handleUpdateTodos}
          />
        </Modal>
        {todos.length ? (
          <Todos
            todos={todos}
            handleUpdateTodos={handleUpdateTodos}
            setTodo={setTodo}
          />
        ) : (
          <Message />
        )}
      </View>
      <Toast />
      <FloatingActionButton type="add" onPress={handleFAB} />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
})
