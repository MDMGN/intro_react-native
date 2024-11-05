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
import useForm from "../hooks/useForm"

function Form({ setOpen, setTodos, todo, setTodo, handleUpdateTodos }) {
  const { data, handleChangeText, onSubmit, inputRefs } = useForm({
    initialState: {
      title: "",
      description: "",
      date: "",
    },
    setTodos,
    handleUpdateTodos,
    setTodo,
    todo,
    setOpen,
  })

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
