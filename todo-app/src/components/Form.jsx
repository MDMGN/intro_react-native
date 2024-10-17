import { useRef, useState } from "react"
import { Text, Pressable, StyleSheet } from "react-native"
import withDefaultStyledContainer from "../themes/withDefaultStyledContainer"
import InputTextField from "./InputTextField"
import DatePicker from "./DatePicker"

function Form({ setOpen, setTodos }) {
  const inputRefs = useRef({})

  const [data, setData] = useState({
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

  const handleAddTodos = () => {
    const isEmty = Object.values(data).some((value) => value.trim() === "")

    if (isEmty) {
      alert("Algún campo está vacio")
      return
    }

    setTodos((previusValue) => [
      ...previusValue,
      {
        id: Date.now().toString(36),
        ...data,
        completed: false,
      },
    ])

    setOpen(false)
    return
  }

  console.log(data)
  return (
    <>
      <Pressable style={styles.btnClose} onPress={() => setOpen(false)}>
        <Text style={styles.btnText}>X Cerrar</Text>
      </Pressable>
      <InputTextField
        ref={(ref) => (inputRefs.current["title"] = ref)}
        name={"title"}
        type={"text"}
        title={"Título"}
        placeholder={"Introducir título"}
        onChangeText={handleChangeText}
      />
      <DatePicker
        ref={(ref) => (inputRefs.current["date"] = ref)}
        title={"Fecha"}
        placeholder="Introducir fecha"
        onChangeText={handleChangeText}
        name={"date"}
      />
      <InputTextField
        ref={(ref) => (inputRefs.current["description"] = ref)}
        name={"description"}
        type={"text"}
        title={"Decripción"}
        placeholder={"Introducir descripción"}
        onChangeText={handleChangeText}
        multiline={true}
        numberOfLines={4}
        maxLength={120}
      />
      <Pressable
        onPress={handleAddTodos}
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.7 : 1,
          },
          styles.btnAdd,
        ]}
      >
        {({ pressed }) => (
          <Text style={[styles.btnText, { color: pressed ? "blue" : "white" }]}>
            Agregar
          </Text>
        )}
      </Pressable>
    </>
  )
}
const styles = StyleSheet.create({
  btnClose: {
    marginRight: 20,
    marginVertical: 20,
    alignSelf: "center",
  },
  btnText: {
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

export default withDefaultStyledContainer(Form)
