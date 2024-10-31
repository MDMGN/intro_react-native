import { StatusBar } from "expo-status-bar"
import { useContext, useEffect, useMemo, useState } from "react"
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
import { ThemeContext } from "./context/ThemeContext"
import AsyncStorage from "@react-native-async-storage/async-storage"

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

  useEffect(() => {
    const getlocalTodos = async () => {
      const localTodos = await AsyncStorage.getItem("todos")
      if (localTodos) {
        setTodos((currentTodos) => [...currentTodos, ...JSON.parse(localTodos)])
      }
    }
    getlocalTodos()
  }, [])

  useEffect(() => {
    const updatedTodos = async () => {
      const newTodos = JSON.stringify(todos)
      await AsyncStorage.setItem("todos", newTodos)
    }

    updatedTodos()
  }, [todos])

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
  const { theme } = useContext(ThemeContext)

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
  }, [filter, sorted, todos])

  console.log(todos)
  return (
    <>
      <StatusBar
        style={theme === "dark" ? "light" : "dark"}
        backgroundColor={theme === "dark" ? "#000" : "#fff"}
      />
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
