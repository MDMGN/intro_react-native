import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, View, Modal } from 'react-native'
import { FloatingActionButton, Form, Message, Todos } from './src/components'

export default function App() {
  const [open, setOpen] = useState(false) // Modal State
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Tarea 1',
    },
    {
      id: 2,
      title: 'Tarea 2',
    },
    {
      id: 3,
      title: 'Tarea 3',
    },
  ]) // TODOS STATE

  const handleFAB = () => setOpen(!open)

  return (
    <View style={styles.container}>
      <StatusBar mode="auto" />
      <Text
        style={{
          fontWeight: 'bold',
          color: '#000',
          fontSize: 20,
        }}
      >
        TODO APP
      </Text>

      <Modal visible={open} animationType={'slide'}>
        <Form handle={handleFAB} />
      </Modal>
      <FloatingActionButton type="add" onPress={handleFAB} />
      {todos.length ? <Todos todos={todos} /> : <Message />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
})
