import { View, Text, Pressable, StyleSheet } from "react-native"

/**
 * @argument {'add'|'remove'} type
 */
export function FloatingActionButton({ type, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: `${type === "add" ? "#6200EE" : "#FF0000"}`,
          opacity: pressed ? 0.7 : 1,
        },
        styles.fab,
      ]}
    >
      {({ pressed }) => (
        <Text style={[styles.icon, { fontSize: pressed ? 25 : 35 }]}>
          {type === "add" ? "+" : "-"}
        </Text>
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 20,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    color: "#fff",
  },
  icon: {
    color: "#fff",
    fontWeight: "bold",
  },
})
