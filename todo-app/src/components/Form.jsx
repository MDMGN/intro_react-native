import { useEffect, useRef, useState } from "react"
import { Text, Pressable, StyleSheet } from "react-native"
import InputTextField from "./InputTextField"
import withDefaultStyledContainer from "../themes/withDefaultStyledContainer"
import { DatePicker } from "./DatePicker"

function Form({ handle }) {
  const inputRefs = useRef({})

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
    <>
      <Pressable style={styles.btnClose} onPress={handle}>
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
      <DatePicker />
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
      <Pressable style={styles.btnAdd} onPress={() => {}}>
        <Text style={styles.btnText}>Agregar</Text>
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
