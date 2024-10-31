import { AppState } from "react-native"
import { ThemeProvider } from "./src/context/ThemeContext"
import Main from "./src/Main"

export default function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  )
}
