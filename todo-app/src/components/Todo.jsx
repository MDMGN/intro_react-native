import { View, Text } from "react-native";

export function Todo({ todo }) {
  const { id, title } = todo;

  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}
