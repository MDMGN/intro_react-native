import { createStackNavigator } from "@react-navigation/stack"
import { HomeScreen, PositionScreen } from "../screens"

export type StackProps = {
  HOME: undefined
  POSITION: undefined
}

const Stack = createStackNavigator<StackProps>()

export default function StackGroup() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HOME"
        component={HomeScreen}
        options={{ title: "Inicio", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="POSITION"
        component={PositionScreen}
        options={{ title: "POSITION", headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  )
}
