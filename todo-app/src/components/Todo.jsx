import { View, Text, StyleSheet } from "react-native"

export function Todo({ todo }) {
  const { id, title, date, description } = todo
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.label}>Fecha: {<Text>{date}</Text>}</Text>
      <Text style={styles.label}>Descripción:{<Text>{description}</Text>}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 10,
    paddingTop: 15,
    width: 300,
    shadowColor: "#fff",
    elevation: 3,
    paddingLeft: 20,
    borderRadius: 10,
    height: 200,
    backgroundColor: "rgba(0,0,0,.8)",
  },
  title: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
  },
  label: {
    fontSize: 17,
    color: "#fff",
    fontWeight: "bold",
    margin: 5,
  },
})
