import { createContext, useEffect, useState } from "react"
import { Appearance, AppState, useColorScheme } from "react-native"

export const ThemeContext = createContext({})

export const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme()

  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const register = AppState.addEventListener("change", () => {
      const colorScheme = Appearance.getColorScheme()
      setTheme(colorScheme === "dark" ? "dark" : "light")
    })

    return () => {
      register.remove()
    }
  }, [])

  useEffect(() => {
    setTheme(colorScheme === "dark" ? "dark" : "light")
  }, [colorScheme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
