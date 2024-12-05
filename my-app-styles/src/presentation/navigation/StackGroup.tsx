import { createStackNavigator } from "@react-navigation/stack"
import {
  AnimateScreen,
  HomeScreen,
  PositionScreen,
  SectionListScreen,
  TextAnimation,
} from "../screens"
import FlexScreen from "../screens/FlexScreen"
import SliderScreen from "../screens/SliderScreen"
import InfinityScroll from "../screens/InfinityScroll"
import PullToRefresh from "../screens/PullToRefresh"
import AnimateSpringScreen from "../screens/AnimateSpringScreen"
import AnimateStarger from "../screens/AnimateStagger"

export type StackProps = {
  HOME: undefined
  POSITION: undefined
  FLEX: undefined
  SLIDER: undefined
  SCROLL: undefined
  PULLTOREFRESH: undefined
  SECTIONLIST: undefined
  Animate: undefined
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
        component={InfinityScroll}
        options={{ title: "InfinityScroll", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="PULLTOREFRESH"
        component={PullToRefresh}
        options={{ title: "PullToRefresh", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="SECTIONLIST"
        component={SectionListScreen}
        options={{ title: "Section List", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="Animate"
        component={TextAnimation}
        options={{ title: "Animate", headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  )
}
