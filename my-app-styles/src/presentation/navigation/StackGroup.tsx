import { createStackNavigator } from "@react-navigation/stack"
import { HomeScreen, PositionScreen } from "../screens"
import FlexScreen from "../screens/FlexScreen"

export type StackProps = {
  HOME: undefined
  POSITION: undefined
  FLEX: undefined
}

const Stack = createStackNavigator<StackProps>()

export default function StackGroup() {
  return (
    <Stack.Navigator initialRouteName="FLEX">
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
      <Stack.Screen
        name="FLEX"
        component={FlexScreen}
        options={{ title: "Flexbox", headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  )
}
