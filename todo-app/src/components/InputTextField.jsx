import { View, Text, StyleSheet, TextInput } from "react-native"

export function InputTextField({
  name,
  title,
  type,
  placeholder = "",
  onChangeText,
  ...otherProps
}) {
  return (
    <View style={styles.formGroup}>
      <Text style={styles.label}>{title}:</Text>
      <TextInput
        keyboardType={type}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={"#999"}
        onChangeText={(value) => onChangeText(name, value)}
        {...otherProps}
      />
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
