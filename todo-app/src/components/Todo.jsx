import { View, Text, StyleSheet, Switch, Button, Alert } from "react-native"
import { formatDate } from "../helpers"

export function Todo({ todo, handleUpdateTodos, setTodo }) {
  const { id, title, date, description, completed } = todo

  const handleDeleteTodo = () => {
    Alert.alert(
      "¿Seguro que deseas eliminar la tarea?",
      `Eliminar tarea ${title}`,
      [
        {
          style: "cancel",
          text: "Cancelar",
        },
        {
          style: "default",
          text: "Aceptar",
          onPress: () => handleUpdateTodos(id),
        },
      ]
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.label}>Fecha: {<Text>{formatDate(date)}</Text>}</Text>
      <Text style={styles.label}>Descripción:{<Text>{description}</Text>}</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "500", fontSize: 18 }}>
          {completed ? "Completada" : "No completada"}{" "}
        </Text>
        <Switch
          value={completed}
          onValueChange={() =>
            handleUpdateTodos({ ...todo, completed: !completed })
          }
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginVertical: 20,
        }}
      >
        <Button title="Eliminar" color={"#f00"} onPress={handleDeleteTodo} />
        <Button title="Modificar" onPress={() => setTodo(todo)} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 10,
    paddingTop: 15,
    width: 300,
    shadowColor: "#fff",
    elevation: 3,
    paddingLeft: 20,
    borderRadius: 10,
    height: 250,
    backgroundColor: "rgba(0,0,0,.8)",
  },
  title: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
  },
  label: {
    fontSize: 17,
    color: "#fff",
    fontWeight: "bold",
    margin: 5,
  },
})
