import { StatusBar } from "expo-status-bar"
import { useMemo, useState } from "react"
import { StyleSheet, Text, View, Modal, Switch } from "react-native"
import {
  BackgroundRotateRound,
  FloatingActionButton,
  Form,
  Header,
  Message,
  Todos,
} from "./components"
import Toast from "react-native-toast-message"

export default function Main() {
  const [open, setOpen] = useState(false) // Modal State
  const [todo, setTodo] = useState(null)
  const [filter, setFilter] = useState(null)
  const [sorted, setSorted] = useState(false)
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Tarea 1",
      date: new Date("2024-09-05 19:28:07"),
      description: "",
      completed: false,
    },
    {
      id: 2,
      title: "Tarea 2",
      date: new Date(),
      description: "",

      completed: false,
    },
    {
      id: 3,
      title: "Tarea 3",
      description: "",
      date: new Date("2028-09-05 19:28:07"),
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

  const sortedAndFilterTodos = useMemo(() => {
    console.log("Desde useMemo")
    const filterTodos =
      filter === null
        ? [...todos]
        : todos.filter((todo) => filter === todo.completed)

    if (sorted) {
      filterTodos.sort((a, b) => (b.date > a.date ? 1 : -1))
    }
    return filterTodos
  }, [filter, sorted])

  console.log("Desde app")
  return (
    <>
      <StatusBar style="" backgroundColor="" />
      <BackgroundRotateRound />
      <View style={styles.container}>
        <Header setFilter={setFilter} sorted={sorted} setSorted={setSorted} />

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
            todos={sortedAndFilterTodos}
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
