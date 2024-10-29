import { StatusBar } from "expo-status-bar"
import { useMemo, useState } from "react"
import { StyleSheet, Text, View, Modal, Switch } from "react-native"
import {
  BackgroundRotateRound,
  FloatingActionButton,
  Form,
  Message,
  Todos,
} from "./components"
import Toast from "react-native-toast-message"
import DropdownSelect from "react-native-input-select"

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
        <Text
          style={{
            fontWeight: "bold",
            color: "#fff",
            fontSize: 30,
          }}
        >
          TODO APP
        </Text>
        <DropdownSelect
          label="Filtrar por..."
          labelStyle={{ fontWeight: "bold", fontSize: 15, color: "#fff" }}
          options={[
            {
              label: "Todos",
              value: null,
            },
            {
              label: "Completadas",
              value: true,
            },
            {
              label: "No completadas",
              value: false,
            },
          ]}
          onValueChange={setFilter}
          primaryColor={"blue"}
          dropdownContainerStyle={{ width: "80%", color: "#000" }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingHorizontal: 25,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 17 }}>
            Fecha mas reciente:
          </Text>
          <Switch value={sorted} onValueChange={setSorted} />
        </View>

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
