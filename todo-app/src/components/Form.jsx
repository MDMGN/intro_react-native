import { useState } from "react"
import { View, Text, Pressable, TextInput, StyleSheet } from "react-native"
import Constants from "expo-constants"
import { InputTextField } from "./InputTextField"

export function Form({ handle }) {
  const [data, setData] = useState({
    id: Date.now().toString(36),
    title: "",
    date: "",
    description: "",
  })

  const handleChangeText = (name, value) => {
    setData((previusValue) => ({
      ...previusValue,
      [name]: value,
    }))
  }
  console.log(data)
  return (
    <View style={styles.container}>
      <Pressable style={styles.btnClose} onPress={handle}>
        <Text style={styles.btnCloseText}>X Cerrar</Text>
      </Pressable>

      <InputTextField
        name={"title"}
        type={"text"}
        title={"Título"}
        placeholder={"Introducir título"}
        onChangeText={handleChangeText}
      />
      <InputTextField
        name={"date"}
        type={"text"}
        title={"Fecha"}
        placeholder={"Introducir fecha"}
        onChangeText={handleChangeText}
      />
      <InputTextField
        name={"description"}
        type={"text"}
        title={"Decripción"}
        placeholder={"Introducir descripción"}
        onChangeText={handleChangeText}
        multiline={true}
        numberOfLines={4}
        maxLength={120}
      />
      <Pressable style={styles.btnAdd} onPress={() => {}}>
        <Text style={styles.btnCloseText}>Agregar</Text>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#000",
  },
  btnClose: {
    marginRight: 20,
    marginVertical: 20,
    alignSelf: "center",
  },
  btnCloseText: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#fff",
    textAlign: "center",
  },
  btnAdd: {
    alignSelf: "center",
    marginVertical: 20,
    backgroundColor: "#0FD",
    width: 300,
    height: 50,
    justifyContent: "center",
    textTransform: "uppercase",
    borderRadius: 20,
  },
})
