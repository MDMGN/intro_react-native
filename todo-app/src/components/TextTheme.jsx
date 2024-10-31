import { Text } from "react-native"
import { ThemeContext } from "../context/ThemeContext"
import { useContext } from "react"

export default function TextTheme({ children, style, ...otherProps }) {
  const { theme } = useContext(ThemeContext)
  return (
    <Text
      style={[
        style,
        {
          color: theme === "dark" ? "#000" : "#fff",
        },
      ]}
      {...otherProps}
    >
      {children}
    </Text>
  )
}
