import { createStackNavigator } from "@react-navigation/stack"
import { HomeScreen } from "../screens"
import routes from "./routes"

const Stack = createStackNavigator()

export default function StackGroup() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.HOME}
        component={HomeScreen}
        options={{ title: "Inicio" }}
      />
    </Stack.Navigator>
  )
}
