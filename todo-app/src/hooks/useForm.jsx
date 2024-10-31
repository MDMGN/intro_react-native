import { View, Text } from "react-native"
import React from "react"

export default function useForm({ initialState, setTodos, handleUpdateTodos }) {
  const inputRefs = useRef({})

  const [data, setData] = useState(initialState)

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

  return {
    data,
    handleChangeText,
    onSubmit,
    inputRefs,
  }
}
