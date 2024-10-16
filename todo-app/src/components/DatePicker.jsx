import { useState, forwardRef } from "react"
import DateTimePicker from "@react-native-community/datetimepicker"
import InputTextField from "./InputTextField"

function DatePicker({ value, name, onChangeText, ...otherProps }, ref) {
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false)

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate
    setShow(false)
    setDate(currentDate)
    onChangeText(name, date)
  }

  return (
    <>
      <InputTextField
        value={new Intl.DateTimeFormat("es-ES ", {
          dateStyle: "long",
          timeStyle: "medium",
        })
          .format(date)
          .toString()}
        onFocus={() => setShow(true)}
        ref={ref}
        {...otherProps}
      />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          onChange={onChange}
        />
      )}
    </>
  )
}

export default forwardRef(DatePicker)
