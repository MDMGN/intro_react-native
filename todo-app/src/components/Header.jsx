import { View, Text, Switch } from "react-native"
import React, { useContext } from "react"
import DropdownSelect from "react-native-input-select"
import { ThemeContext } from "../context/ThemeContext"
import TextTheme from "./TextTheme"

export function Header({ setFilter, setSorted, sorted }) {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <>
      <Text
        style={{
          fontWeight: "bold",
          color: "#fff",
          fontSize: 30,
        }}
      >
        TODO APP
      </Text>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            fontWeight: "bold",
            marginVertical: 20,
          }}
        >
          {theme === "dark" ? "Dark Mode" : "Light Mode"}
        </Text>
        <Switch
          value={theme === "dark"}
          onValueChange={(value) => setTheme(value ? "dark" : "light")}
        />
      </View>
      <DropdownSelect
        label="Filtrar por..."
        labelStyle={{ fontWeight: "bold", fontSize: 15, color: "#fff" }}
        options={[
          {
            label: "Todos",
            value: null,
          },
          {
            label: "Completadas",
            value: true,
          },
          {
            label: "No completadas",
            value: false,
          },
        ]}
        onValueChange={setFilter}
        primaryColor={"blue"}
        dropdownContainerStyle={{ width: "80%", color: "#000" }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          paddingHorizontal: 25,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 17 }}>
          Fecha mas reciente:
        </Text>
        <Switch value={sorted} onValueChange={setSorted} />
      </View>
    </>
  )
}
