import { ThemeProvider } from "./src/context/ThemeContext"

export default function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  )
}
