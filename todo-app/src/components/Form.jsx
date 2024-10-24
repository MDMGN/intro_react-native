import { useEffect, useRef, useState } from "react"
import {
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native"
import withDefaultStyledContainer from "../themes/withDefaultStyledContainer"
import InputTextField from "./InputTextField"
import DatePicker from "./DatePicker"
import Toast from "react-native-toast-message"

function Form({ setOpen, setTodos, todo, setTodo, handleUpdateTodos }) {
  const inputRefs = useRef({})

  const [data, setData] = useState({
    title: "",
    date: "",
    description: "",
  })

  const handleChangeText = (name, value, setError) => {
    setData((previusValue) => ({
      ...previusValue,
      [name]: value,
    }))
    if (setError) {
      setError(() => value.trim() === "")
    }
  }

  const onSubmit = () => {
    const input = Object.keys(data).find((key) =>
      typeof data[key] === "string" ? data[key].trim() === "" : false
    )

    if (input) {
      inputRefs.current[input].focus()
      return
    }

    if (todo) {
      handleUpdateTodos(data)
      setTodo(null)
    } else {
      setTodos((previusValue) => [
        ...previusValue,
        {
          id: Date.now().toString(36),
          ...data,
          completed: false,
        },
      ])
      setOpen(false)
      Toast.show({
        text1: `Se agregado la tarea ${data.title}`,
        type: "success",
      })
    }
  }

  useEffect(() => {
    if (todo) setData(todo)
  }, [])

  console.log({ data, todo })
  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            <Pressable
              style={styles.btnClose}
              onPress={() => (todo ? setTodo(null) : setOpen(false))}
            >
              <Text style={styles.btnText}>X Cerrar</Text>
            </Pressable>
            <InputTextField
              ref={(ref) => (inputRefs.current["title"] = ref)}
              name={"title"}
              type={"text"}
              title={"Título"}
              placeholder={"Introducir título"}
              onChangeText={handleChangeText}
              value={data.title}
            />
            <DatePicker
              ref={(ref) => (inputRefs.current["date"] = ref)}
              title={"Fecha"}
              placeholder="Introducir fecha"
              onChangeText={handleChangeText}
              value={data.date}
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
              value={data.description}
            />
            <Pressable
              onPress={onSubmit}
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.7 : 1,
                },
                styles.btnAdd,
              ]}
            >
              {({ pressed }) => (
                <Text
                  style={[
                    styles.btnText,
                    { color: pressed ? "blue" : "white" },
                  ]}
                >
                  {todo ? "Modificar" : "Agregar"}
                </Text>
              )}
            </Pressable>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
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
