import { useState } from "react"
import DateTimePicker from "@react-native-community/datetimepicker"
import InputTextField from "./InputTextField"

export function DatePicker(props) {
  const [date, setDate] = useState(new Date(1598051730000))
  const [mode, setMode] = useState("date")
  const [show, setShow] = useState(false)

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate
    setShow(false)
    setDate(currentDate)
  }

  const showMode = (currentMode) => {
    setShow(true)
    setMode(currentMode)
  }

  const showDatepicker = () => {
    showMode("date")
  }

  const showTimepicker = () => {
    showMode("time")
  }

  return (
    <>
      <InputTextField title={"Fecha"} onFocus={() => showDatepicker()} />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </>
  )
}
