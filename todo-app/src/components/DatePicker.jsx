import { useState, forwardRef } from "react"
import DateTimePicker from "@react-native-community/datetimepicker"
import InputTextField from "./InputTextField"
import { formatDate } from "../helpers"

function DatePicker({ value, name, onChangeText, ...otherProps }, ref) {
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false)

  const onChange = (event, selectedDate) => {
    const { nativeEvent, type } = event
    const currentDate = selectedDate
    setShow(false)
    if (type !== "dismissed") {
      setDate(currentDate)
      onChangeText(name, formatDate(date))
    }
  }

  return (
    <>
      <InputTextField
        value={value}
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
          themeVariant="dark"
          shouldRasterizeIOS={true}
        />
      )}
    </>
  )
}

export default forwardRef(DatePicker)
