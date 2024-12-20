# Introducción a React Native

# **Índice**

1. [¿Qué es React Native?](#1-qué-es-react-native)
2. [¿Qué es Expo?](#2-qué-es-expo)
3. [Instalación y configuración de expo](#3-instalación-y-configuración-de-expo)
4. [StatusBar en Expo](#4-statusbar-en-expo)
5. [Expo Constants](#5-expo-constants)
6. [¿Qué es JSX?](#6-qué-es-jsx)
7. [StyleSheet en React Native](#7-stylesheet-en-react-native)
8. [Hooks en React](#8-hooks-en-react)
9. [useState](#9-usestate)
10. [Instalación y configuración de ESLint en Expo](#10-instalación-y-configuración-de-eslint-en-expo)
11. [useEffect](#11-useeffect)
12. [useRef](#12-useref)
13. [useLayoutEffect](#13-uselayouteffect)
14. [Componentes en React Native](#14-componentes-en-react-native)
15. [Uso de Pressable y evento `pressed`](#15-uso-de-pressable-y-evento-pressed)
16. [Optimización de `FlatList` y rendimiento](#16-optimización-de-flatlist-y-rendimiento)
17. [Renderizado Condicional](#17-renderizado-condicional)
18. [Uso de `Modal`](#18-uso-de-modal)
19. [Paso de Props en React Native](#19-paso-de-props-en-react-native)
20. [React DevTools](#20-react-developer-tools)
21. [memo, useMemo, useCallBack](#21-memorización)
22. [Custom Hooks](#22-custom-hooks-en-react-native)

---

### 1. **¿Qué es React Native?**

[Regresar al índice](#índice)

**Explicación:**
React Native es un framework de desarrollo móvil que permite construir aplicaciones nativas utilizando JavaScript y React. Con React Native, puedes desarrollar aplicaciones para iOS y Android utilizando un único código base.

**Ejemplo:**

```js
import React from "react"
import { Text, View } from "react-native"

const App = () => {
  return (
    <View>
      <TextThemeTheme>Hello, React Native!</TextTheme>
    </View>
  )
}

export default App
```

---

### 2. **¿Qué es Expo?**

[Regresar al índice](#índice)

**Explicación:**
Expo es una herramienta y un conjunto de servicios que facilitan el desarrollo de aplicaciones móviles con React Native. Expo proporciona una plataforma que simplifica la instalación de bibliotecas nativas y las configuraciones necesarias, eliminando muchas de las complejidades del desarrollo nativo.

**Comandos útiles de Expo:**

- `expo init` - Crea una nueva aplicación Expo.
- `expo start` - Inicia la aplicación en modo de desarrollo.
- `expo build` - Para crear archivos de distribución.

---

## 3. **Instalación y Configuración de Expo**

[Regresar al índice](#índice)

1. [Instalación de Expo](#instalación-de-expo)
   - [Requisitos previos](#requisitos-previos)
   - [Instalación de Node.js](#instalación-de-nodejs)
   - [Instalación de Expo con `npx`](#instalación-de-expo-con-npx)
   - [Ejecutar la aplicación](#ejecutar-la-aplicación)
2. [Archivos importantes creados por Expo](#archivos-importantes-creados-por-expo)
3. [Conclusión](#conclusión)

---

### Ventajas de Expo:

- **Configuración sencilla:** No necesitas configurar Android Studio ni Xcode para empezar.
- **Hot Reloading:** Actualizaciones instantáneas en la aplicación mientras desarrollas.
- **Expo Go:** Puedes probar tu aplicación en tu dispositivo físico en tiempo real a través de la app Expo Go (disponible en App Store y Google Play).
- **Acceso fácil a APIs nativas** como cámara, geolocalización, notificaciones, etc.

---

## **Instalación de Expo**

### Requisitos previos

Antes de instalar Expo, asegúrate de que tienes **Node.js** instalado en tu sistema, ya que Expo funciona sobre Node.js y usa **npm** o **npx** para ejecutar comandos.

### Instalación de Node.js

1. Ve al sitio oficial de Node.js: [https://nodejs.org/](https://nodejs.org/)
2. Descarga la versión **LTS** (soporte a largo plazo) para tu sistema operativo.
3. Sigue las instrucciones del instalador para completar la instalación.

Para verificar que **Node.js** y **npm** están instalados correctamente, abre una terminal y ejecuta los siguientes comandos:

```bash
node -v
npm -v
```

Deberías ver la versión instalada de ambos.

---

### **Instalación de Expo con `npx`**

Una vez que tengas **Node.js** instalado, puedes crear tu proyecto Expo usando el siguiente comando:

```bash
npx create-expo-app@latest my-app --template
```

Este comando hace uso de **npx** para ejecutar el generador de proyectos de Expo directamente, sin necesidad de instalación previa. El `--template` es opcional y te permite elegir una plantilla específica si lo deseas (por ejemplo, en blanco o con tabs).

### Explicación de los parámetros:

- `create-expo-app@latest`: asegura que estás usando la versión más reciente de la herramienta de creación de proyectos de Expo.
- `my-app`: es el nombre que le darás a tu proyecto (puedes cambiarlo a cualquier nombre que prefieras). Si lo omites, te preguntará qué nombre usar para el proyecto.
- `--template`: te permite usar plantillas predefinidas. Si lo omites, te preguntará qué plantilla usar durante la creación del proyecto.

### **Ejemplo completo**:

```bash
npx create-expo-app@latest my-app --template
```

Este comando te permite crear un proyecto de react native con todos los archivos y configuraciones necesarias para comenzar tu proyecto en Expo.

---

## **Ejecutar la aplicación**

1. Después de que se haya creado tu proyecto, navega a la carpeta del proyecto (my-app de ejemplo)):

   ```bash
   cd my-app
   ```

2. Ejecuta el siguiente comando para iniciar la aplicación:

   ```bash
   npx expo start
   ```

3. Esto abrirá **Expo Developer Tools** en tu navegador. Desde allí, puedes elegir entre:
   - Escanear el **código QR** con la aplicación **Expo Go** (disponible para Android e iOS) para ver tu aplicación en tu dispositivo real.
   - Iniciar un emulador de Android o iOS (si tienes los entornos nativos configurados).

---

## **Archivos importantes creados por Expo**

Al crear una aplicación con Expo, algunos archivos y carpetas importantes serán creados en tu proyecto:

1. **`App.js`**: Archivo principal de la aplicación. Aquí es donde definimos nuestra UI usando componentes de React Native.
2. **`package.json`**: Archivo de configuración de npm, que contiene las dependencias del proyecto, scripts de ejecución y metadatos.
3. **`node_modules/`**: Carpeta que contiene todas las dependencias instaladas.
4. **`.gitignore`**: Archivo que indica qué archivos o carpetas deben ser ignorados por Git.
5. **`assets/`**: Carpeta donde se colocan las imágenes y otros recursos estáticos.
6. **`app.json`**: Archivo de configuración del proyecto Expo (información sobre el nombre de la aplicación, iconos, versiones, etc.).

---

### 4. **StatusBar en Expo**

[Regresar al índice](#índice)

**Explicación:**
`StatusBar` es un componente que se utiliza para controlar el color y el estilo de la barra de estado (la barra en la parte superior de la pantalla del dispositivo que muestra la hora, la batería, etc.).

**Ejemplo:**

```js
import { StatusBar } from "expo-status-bar"
import { View } from "react-native"

const App = () => {
  return (
    <View>
      <StatusBar style="auto" />
    </View>
  )
}
```

---

### 5. **Expo Constants**

[Regresar al índice](#índice)

**Explicación:**
`expo-constants` proporciona valores globales útiles, como la versión de la aplicación, la URL del servidor de desarrollo, el nombre de la aplicación, entre otros.

**Ejemplo:**

```js
import Constants from "expo-constants"
import { Text, View } from "react-native"

const App = () => {
  return (
    <View>
      <TextThemeTheme>Nombre de la app: {Constants.manifest.name}</TextTheme>
    </View>
  )
}
```

---

### 6. **¿Qué es JSX?**

[Regresar al índice](#índice)

**Explicación:**
JSX es una extensión de JavaScript que permite escribir código que se parece a HTML, pero que luego se compila a JavaScript. En React Native, usamos JSX para definir las interfaces de usuario.

**Ejemplo:**

```js
const App = () => {
  return (
    <View>
      <TextThemeTheme>Hello World</TextTheme>
    </View>
  )
}
```

---

### 7. **StyleSheet en React Native**

[Regresar al índice](#índice)

**Explicación:**
`StyleSheet` es una forma de declarar estilos para componentes en React Native, similar a cómo se hace en CSS para aplicaciones web.

**Valores aceptados:**

- Colores (hexadecimales, nombres de colores, RGB).
- Unidades de medida como `px` o `%` no son necesarias, ya que las unidades son relativas al dispositivo.

**Ejemplo:**

```js
import { StyleSheet, View, Text } from "react-native"

const App = () => {
  return (
    <View style={styles.container}>
      <TextTheme style={styles.text}>Hello World</TextTheme>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  text: {
    fontSize: 20,
    color: "#333",
  },
})

export default App
```

---

### 8. **Hooks en React**

[Regresar al índice](#índice)

**Explicación:**
Los hooks son funciones especiales en React que te permiten usar estado y otras características sin escribir clases.

---

### 9. **useState**

[Regresar al índice](#índice)

**Explicación:**
`useState` es un hook que te permite añadir estado a componentes funcionales.

**Ejemplo:**

```js
import React, { useState } from "react"
import { View, Button, Text } from "react-native"

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <View>
      <TextThemeTheme>Contador: {count}</TextTheme>
      <Button title="Incrementar" onPress={() => setCount(count + 1)} />
    </View>
  )
}

export default App
```

---

### 10. **Instalación y configuración de ESLint en Expo**

[Regresar al índice](#índice)

**Explicación:**
ESLint es una herramienta de análisis estático para JavaScript que encuentra errores en el código y mejora la calidad general del mismo.

**Instalación:**

```bash
npx expo install lint --save-dev
```

```bash
npm  i prettier eslint-config-prettier eslint-plugin-prettier --save-dev
```

**Configuración básica (`.eslintrc.js`):**

```js
module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
}
```

---

### 11. **useEffect**

[Regresar al índice](#índice)

**Explicación:**
`useEffect` es un hook que se usa para manejar efectos secundarios en los componentes, como el acceso a APIs o el control de eventos del ciclo de vida del componente.

**Ejemplo:**

```js
import React, { useEffect, useState } from "react"
import { Text } from "react-native"

const App = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((json) => setData(json))
  }, [])

  useEffect(() => {
    console.log("Me ejecuto la primera vez")
  }, [])

  useEffect(() => {
    console.log("Me ejecuto muchas veces")
  })

  useEffect(() => {
    return () => {
      console.log("El componente murió  ")
    }
  })

  useEffect(() => {
    console.log("Me cada vez que la data cambia")
  }, [data])

  return <TextThemeTheme>{data ? data.name : "Cargando..."}</TextTheme>
}
```

---

### 12. **useRef**

[Regresar al índice](#índice)

**Explicación:**
`useRef` se utiliza para almacenar valores que no generan una nueva renderización cuando cambian, como referencias a elementos o variables persistentes.

**Ejemplo:**

```js
import React, { useRef } from "react"
import { Text, Button } from "react-native"

const App = () => {
  const count = useRef(0)

  return (
    <Button title="Incrementar" onPress={() => (count.current += 1)}>
      <TextThemeTheme>{count.current}</TextTheme>
    </Button>
  )
}
```

---

### 13. **useLayoutEffect**

[Regresar al índice](#índice)

**Explicación:**
`useLayoutEffect` se ejecuta de forma síncrona después de todas las mutaciones del DOM, por lo que es útil cuando necesitas medir dimensiones de elementos después de renderizar.

---

### 14. **Componentes en React Native**

[Regresar al índice](#índice)

- `View` – Contenedor básico.
- `Text` – Componente para mostrar texto.
- `ScrollView` – Vista desplazable para mostrar contenido.
- `FlatList` – Componente para listas de elementos grandes.
- `Pressable` – Componente para manejar eventos táctiles.

**Ejemplo de `FlatList`:**

```js
import React from "react"
import { FlatList, Text, View } from "react-native"

const App = () => {
  const data = [{ key: "Devin" }, { key: "Dan" }, { key: "Dominic" }]

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <TextThemeTheme>{item.key}</TextTheme>}
    />
  )
}

export default App
```

---

### 15. **Uso de Pressable y evento `pressed`**

[Regresar al índice](#índice)

**Explicación:**
`Pressable` es un componente que detecta interacciones táctiles.

**Ejemplo:**

```js
import { Text, Pressable } from "react-native"

const App = () => {
  return (
    <Pressable
      onPress={() => console.log("Presionado")}
      style={({ pressed }) => ({
        backgroundColor: pressed ? "blue" : "grey",
      })}
    >
      <TextThemeTheme>Presionar</TextTheme>
    </Pressable>
  )
}

export default App
```

---

### 16. **Optimización de `FlatList` y rendimiento**

[Regresar al índice](#índice)

**Explicación:**
`FlatList` es ideal para listas grandes porque solo renderiza los elementos visibles en pantalla, mejorando así el rendimiento en comparación con `ScrollView`.

**Propiedades recomendadas:**

- `keyExtractor`: Para que React pueda identificar cada ítem de manera única.
- `initialNumToRender`: Controla cuántos elementos iniciales se renderizan.
- `getItemLayout`: Útil cuando los elementos de la lista tienen una altura fija.

---

### 17. **Renderizado Condicional**

[Regresar al índice](#índice)

**Explicación:**
El renderizado condicional en React se refiere a mostrar componentes o elementos basados en una condición. Se pueden usar condicionales como operadores ternarios, condicionales cortocircuitados (`&&`), o sentencias `if` en el cuerpo del componente.

**Ejemplo con operador ternario:**

```js
import React, { useState } from "react"
import { View, Text, Button } from "react-native"

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <View>
      <TextThemeTheme>
        {loggedIn ? "Bienvenido de nuevo" : "Por favor, inicia sesión"}
      </TextTheme>
      <Button
        title={loggedIn ? "Cerrar sesión" : "Iniciar sesión"}
        onPress={() => setLoggedIn(!loggedIn)}
      />
    </View>
  )
}

export default App
```

---

### 18. **Uso de `Modal`**

[Regresar al índice](#índice)

**Explicación:**
El componente `Modal` en React Native muestra un contenido emergente sobre el resto de la interfaz. Se puede controlar la visibilidad del modal mediante una variable de estado.

**Ejemplo:**

```js
import React, { useState } from "react"
import { View, Text, Modal, Button } from "react-native"

const App = () => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View>
      <Modal transparent={true} visible={modalVisible} animationType="slide">
        <View style={{ marginTop: 50 }}>
          <TextThemeTheme>¡Este es un modal!</TextTheme>
          <Button title="Cerrar modal" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
      <Button title="Mostrar Modal" onPress={() => setModalVisible(true)} />
    </View>
  )
}

export default App
```

---

### 19. **Paso de Props en React Native**

[Regresar al índice](#índice)

**Explicación:**
El paso de props (propiedades) en React es la forma en la que se comunican los componentes. Se puede pasar información de un componente padre a un componente hijo mediante props.

**Ejemplo:**

```js
import React from "react"
import { View, Text } from "react-native"

const Greeting = ({ name }) => {
  return <TextThemeTheme>Hola, {name}!</TextTheme>
}

const App = () => {
  return (
    <View>
      <Greeting name="Juan" />
      <Greeting name="María" />
    </View>
  )
}

export default App
```

---

## 20. **React Developer Tools**

[Regresar al índice](#índice)

### ¿Qué es **react-devtools**?

**React Developer Tools** es una extensión y herramienta que permite inspeccionar la estructura de una aplicación React, ayudando a los desarrolladores a depurar y analizar los componentes React que forman parte de la aplicación. Se integra con navegadores como Chrome y Firefox o puede ejecutarse como una aplicación independiente, especialmente útil para React Native.

### ¿Para qué nos sirve?

**react-devtools** nos permite:

- **Inspeccionar** la jerarquía de componentes React en tiempo real.
- **Ver y modificar el estado y las props** de cualquier componente.
- **Monitorizar el rendimiento** y analizar el tiempo de renderizado de cada componente.
- Identificar **errores o problemas** en la estructura y flujo de datos de la aplicación.
- Facilitar la depuración de la UI.

#### Ejemplo de uso:

En un proyecto React Native, podrías ejecutar **react-devtools** en modo standalone (aplicación de escritorio) y ver en tiempo real la jerarquía de componentes de tu aplicación móvil.

---

## **Instalación de react-devtools**

### Paso 1: Instalar react-devtools

Para instalar **react-devtools**, ejecuta el siguiente comando en la terminal del proyecto o en cualquier terminal globalmente:

```bash
npm install -g react-devtools
```

### Paso 2: Ejecutar react-devtools

Una vez instalado, puedes ejecutar las **devtools** como una aplicación de escritorio con el siguiente comando:

```bash
react-devtools
```

Esto abrirá una ventana que muestra la jerarquía de componentes React de cualquier aplicación que tengas corriendo en modo de desarrollo.

### Paso 3: Conectar con aplicaciones React Native

Para React Native, si ejecutas la aplicación en modo de desarrollo y después ejecutas `react-devtools`, la herramienta se conectará automáticamente a la app React Native en ejecución.

---

# **Configuración de PowerShell: GET-ExecutionPolicy**

## ¿Qué es `GET-ExecutionPolicy`?

En **PowerShell**, `GET-ExecutionPolicy` es un comando que determina el nivel de permisos que tiene el sistema para ejecutar scripts de PowerShell. A veces, es necesario cambiar esta política para instalar ciertas dependencias o ejecutar scripts de manera segura en tu sistema.

### **Ejemplo de uso:**

Para ver el nivel de permisos actual en PowerShell, ejecuta el siguiente comando:

```powershell
Get-ExecutionPolicy
```

El resultado puede ser uno de los siguientes:

- **Restricted**: No se pueden ejecutar scripts.
- **RemoteSigned**: Solo se permiten scripts descargados firmados.
- **AllSigned**: Solo se permiten scripts firmados.
- **Unrestricted**: Se permiten todos los scripts.

---

## **Configuración de Execution Policy**

### Cambiar la política de ejecución

Para poder ejecutar scripts o instalar herramientas como **react-devtools** o librerías relacionadas, es posible que necesites cambiar la política de ejecución en PowerShell.

1. **Abrir PowerShell como Administrador**:

   - Busca "PowerShell" en el menú de inicio.
   - Haz clic derecho y selecciona "Ejecutar como administrador".

2. **Cambiar la política de ejecución**:
   Si deseas permitir la ejecución de todos los scripts no firmados en tu sistema (opción **Unrestricted**), usa el siguiente comando:

   ```powershell
   Set-ExecutionPolicy Unrestricted
   ```

   O si prefieres permitir solo los scripts firmados (más seguro):

   ```powershell
   Set-ExecutionPolicy RemoteSigned
   ```

3. **Confirmar el cambio**:
   Después de ejecutar el comando anterior, PowerShell te pedirá confirmación. Pulsa `Y` para confirmar.

### Verificar el cambio

Para verificar que el cambio de política se ha realizado correctamente, puedes volver a ejecutar:

```powershell
Get-ExecutionPolicy
```

---

## **Restaurar la política original**

Si en algún momento deseas restaurar la configuración predeterminada (lo que generalmente es **Restricted**), puedes hacerlo con:

```powershell
Set-ExecutionPolicy Restricted
```

---

## **React DevTools**

La herramienta **react-devtools** es esencial para cualquier desarrollador de React, ya que facilita enormemente el proceso de depuración y análisis de los componentes. Y, para trabajar con PowerShell sin limitaciones, asegurarse de que la política de ejecución esté correctamente configurada es clave, permitiendo la ejecución de scripts o la instalación de herramientas relacionadas con el desarrollo.

---

### **Conclusión**

[Regresar al índice](#índice)

React Native y Expo forman un conjunto de herramientas poderosas para el desarrollo móvil. Con los conceptos tratados en este temario, incluyendo el uso de hooks, la optimización del rendimiento y el manejo de componentes como `FlatList` y `Modal`, ahora tienes una base sólida para comenzar a desarrollar aplicaciones móviles eficientes y escalables. Además, conceptos como el renderizado condicional y el paso de props son esenciales para crear interfaces dinámicas y funcionales.

### 21. Memorización

`React.memo`, `useMemo`, `useCallBack` son mecanismos de optimización en React que te permite evitar renders innecesarios de componentes funcionales. Aquí te explico qué es, cómo funciona y cuándo usarlo.

### ¿Qué es `React.memo` , `useMemo`, `useCallBack`?

`React.memo` es una función de orden superior que permite envolver un componente funcional para que solo se vuelva a renderizar cuando sus props cambian. Esto es especialmente útil para componentes que reciben props que no cambian frecuentemente y que son costosos de renderizar.

### ¿Cómo funciona?

Cuando un componente está envuelto en `React.memo`, React compara las props actuales con las anteriores. Si las props no han cambiado, React omite el renderizado del componente, lo que puede mejorar el rendimiento en aplicaciones grandes.

### Ejemplo de uso

Aquí hay un ejemplo simple que muestra cómo usar `React.memo`:

```javascript
import React from "react"

// Componente funcional que se va a memorizar
const TodoItem = React.memo(({ todo, onToggle }) => {
  console.log("Rendering:", todo.title)

  return (
    <View onPress={() => onToggle(todo.id)}>
      {todo.completed ? (
        <TextThemeTheme>Completado: {todo.title}</TextTheme>
      ) : (
        <TextThemeTheme>Tarea no completada: {todo.title}</TextTheme>
      )}
    </View>
  )
})

// Componente principal que utiliza TodoItem
const TodoList = ({ todos, onToggle }) => {
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={todos}
        keyExtractor={(todo) => todo.id}
        renderItem={({ item }) => <TodoItem todo={item} onToggle={onToggle} />}
      />
    </View>
  )
}
```

---

En este ejemplo, `TodoItem` solo se volverá a renderizar si las props `todo` o `onToggle` cambian. Si el padre `TodoList` se renderiza nuevamente, pero las props de `TodoItem` no han cambiado, React no volverá a renderizar `TodoItem`.

### ¿Cuándo usar `React.memo`?

- **Componentes que reciben props estáticas**: Si tu componente recibe props que son relativamente estáticas y no cambian con frecuencia, `React.memo` puede ayudarte a evitar renders innecesarios.

- **Renders costosos**: Si tu componente realiza cálculos intensivos o tiene una renderización compleja, `React.memo` puede ayudarte a optimizar su rendimiento.

### ¿Cómo se compara con `useMemo` y `useCallback`?

1. **`React.memo`**:

   - Se usa para memorizar el resultado de un componente entero.
   - Comparte props para determinar si el componente debe volver a renderizarse.
   - Se aplica a componentes funcionales.

2. **`useMemo`**:

   - Se usa para memorizar valores calculados (resultado de funciones).
   - Solo se recalcula el valor cuando sus dependencias cambian.

3. **`useCallback`**:
   - Se usa para memorizar funciones, evitando que se creen nuevas instancias de funciones en cada renderizado.
   - Solo se vuelve a crear la función cuando sus dependencias cambian.

### Ejemplo de combinación

En un componente más complejo, podrías usar `React.memo` junto con `useMemo` y `useCallback` para optimizar el rendimiento:

```javascript
import React, { useState, useCallback, useMemo } from "react"

const TodoItem = React.memo(({ todo, onToggle }) => {
  console.log("Rendering:", todo.title)

  return (
    <View onPress={() => onToggle(todo.id)}>
      {todo.completed ? (
        <TextThemeTheme>Completado: {todo.title}</TextTheme>
      ) : (
        <TextThemeTheme>Tarea no completada: {todo.title}</TextTheme>
      )}
    </View>
  )
})

const TodoList = ({ todos, onToggle }) => {
  const renderedTodos = useMemo(() => {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={todos}
        keyExtractor={(todo) => todo.id}
        renderItem={({ item }) => <TodoItem todo={item} onToggle={onToggle} />}
      />
    )
  }, [todos, onToggle])

  return renderedTodos
}

const App = () => {
  const [todos, setTodos] = useState([])

  const toggleTodo = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }, [])

  return <TodoList todos={todos} onToggle={toggleTodo} />
}
```

### Consideraciones

- **Comparación de props**: Por defecto, `React.memo` realiza una comparación superficial de las props. Si necesitas una comparación más profunda, puedes proporcionar una función de comparación como segundo argumento.

```javascript
const TodoItem = React.memo(
  ({ todo, onToggle }) => {
    // ...
  },
  (prevProps, nextProps) => {
    return prevProps.todo.id === nextProps.todo.id // comparación personalizada
  }
)
```

- **Sobreuso**: Aunque `React.memo` puede mejorar el rendimiento, su uso excesivo o innecesario puede complicar el código sin proporcionar beneficios significativos. Asegúrate de usarlo solo cuando realmente lo necesites.

### Conclusión

`React.memo` es una herramienta poderosa para optimizar el rendimiento de tus componentes funcionales, especialmente en aplicaciones grandes. Combinado con `useMemo` y `useCallback`, puede ayudarte a crear aplicaciones más eficientes y reactivas. Sin embargo, como siempre en el desarrollo, es importante equilibrar la optimización con la legibilidad y la mantenibilidad del código.

---

### 22. Custom Hooks en React Native

**Los Custom Hooks** son funciones en React/React Native que permiten encapsular lógica reutilizable utilizando el sistema de hooks. Ayudan a reducir la duplicación de código y a organizar lógicas complejas en aplicaciones móviles de manera eficiente.

#### ¿Por qué usar Custom Hooks?

1. **Reutilización de Lógica**: Los Custom Hooks permiten encapsular lógica que puede compartirse entre varios componentes.
2. **Mejor Mantenimiento**: Facilitan la separación de preocupaciones, haciendo que el código sea más legible y fácil de mantener.
3. **Composición de Hooks**: Se pueden combinar diferentes hooks (como `useState`, `useEffect`, etc.) para crear funcionalidades más complejas.

#### Sintaxis Básica

Un Custom Hook es solo una función JavaScript que:

- Usa otros hooks de React (como `useState`, `useEffect`, etc.).
- Comienza con el prefijo `use` (por convención), como `useFetchData`, `useAuth`, etc.
- Retorna datos o funciones que serán usados en el componente que lo invoca.

```javascript
import { useState, useEffect } from "react"

function useCustomHook() {
  const [state, setState] = useState(initialValue)

  useEffect(() => {
    // Lógica de efecto
    return () => {
      // Limpieza (si es necesario)
    }
  }, [])

  // Retornamos lo que necesite el componente
  return { state, setState }
}
```

#### Ejemplo de Custom Hook

Un ejemplo común es un hook que se encarga de hacer _fetching_ de datos, encapsulando toda la lógica necesaria para gestionar el estado de carga y errores.

```javascript
import { useState, useEffect } from "react"
import axios from "axios"

function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url)
        setData(response.data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, loading, error }
}

export default useFetch
```

#### Uso del Custom Hook en un Componente

Una vez que has creado el custom hook, puedes usarlo en tus componentes como cualquier otro hook.

```javascript
import React from "react"
import { View, Text, ActivityIndicator } from "react-native"
import useFetch from "./hooks/useFetch"

function MyComponent() {
  const { data, loading, error } = useFetch("https://api.example.com/data")

  if (loading) return <ActivityIndicator />
  if (error) return <TextThemeTheme>Error: {error.message}</TextTheme>

  return (
    <View>
      <TextThemeTheme>{JSON.stringify(data)}</TextTheme>
    </View>
  )
}

export default MyComponent
```

#### Buenas Prácticas

1. **Usa el prefijo `use`**: Esto permite que React detecte que es un hook y puede aplicar reglas de hooks.
2. **Encapsula una única responsabilidad**: Mantén los hooks con una única tarea clara y concisa.
3. **Evita lógica pesada**: No abuses de los hooks para manejar toda la lógica del negocio; solo encapsula lógica de estado y efectos.
4. **Retorna solo lo necesario**: Exporta solo el estado y las funciones que el componente necesita para evitar complejidad innecesaria.

---

### Conclusión

Usar Custom Hooks en React Native ayuda a escribir código más limpio, más modular y facilita la reutilización en la aplicación móvil.
