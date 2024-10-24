import { forwardRef, useState } from "react"
import { View, Text, StyleSheet, TextInput } from "react-native"

function InputTextField(
  { name, title, type, placeholder = "", onChangeText, ...otherProps },
  ref
) {
  const [error, setError] = useState(false)
  return (
    <View style={styles.formGroup}>
      <Text style={styles.label}>{title}:</Text>
      <TextInput
        ref={ref}
        keyboardType={type}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={"#999"}
        onChangeText={(value) =>
          onChangeText && onChangeText(name, value, setError)
        }
        {...otherProps}
      />
      {error && (
        <Text style={{ color: "#f00", fontWeight: "bold", fontSize: 18 }}>
          {title} es requerido
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  formGroup: {
    paddingHorizontal: 20,
  },
  label: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    color: "#fff",
    borderWidth: 0.5,
    marginHorizontal: 5,
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    borderRadius: 5,
  },
})

export default forwardRef(InputTextField)
