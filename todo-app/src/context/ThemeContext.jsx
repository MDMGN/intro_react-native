import { createContext, useEffect, useState } from "react"
import { useColorScheme } from "react-native"

export const ThemeContext = createContext({})

export const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme()

  const [theme, setTheme] = useState("light")
  useEffect(() => {
    setTheme(colorScheme)
  }, [colorScheme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
