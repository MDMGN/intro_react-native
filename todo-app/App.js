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

export default function App() {
  const [open, setOpen] = useState(false) // Modal State
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Tarea 1",
    },
    {
      id: 2,
      title: "Tarea 2",
    },
    {
      id: 3,
      title: "Tarea 3",
    },
  ]) // TODOS STATE
  const handleFAB = () => setOpen(!open)

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

        <Modal visible={open} animationType={"slide"}>
          <Form setOpen={setOpen} setTodos={setTodos} />
        </Modal>
        {todos.length ? <Todos todos={todos} /> : <Message />}
      </View>
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
