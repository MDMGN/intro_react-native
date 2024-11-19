import { createStackNavigator } from "@react-navigation/stack"
import { HomeScreen, PositionScreen } from "../screens"
import FlexScreen from "../screens/FlexScreen"
import SliderScreen from "../screens/SliderScreen"
import ScrollInfinity from "../screens/ScrollInfinity"

export type StackProps = {
  HOME: undefined
  POSITION: undefined
  FLEX: undefined
  SLIDER: undefined
  SCROLL: undefined
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
      <Stack.Screen
        name="FLEX"
        component={FlexScreen}
        options={{ title: "Flexbox", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="SLIDER"
        component={SliderScreen}
        options={{ title: "Slider", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="SCROLL"
        component={ScrollInfinity}
        options={{ title: "ScrollInfinity", headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  )
}
