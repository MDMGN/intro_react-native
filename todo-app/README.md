# **Ejercicios en React Native y Expo**

---

## **Debemos pensar en componentes**

### Ejercicio 1:

> Dentro de nuestra aplicación **TODO APP**, tenemos un componente **_Form_**. Crea un nuevo componente **_InputTextField.jsx_** y separa el contenedor y los estilos en este nuevo componente. Además, debe recibir props como: `name` (este valor será usado en otro ejercicio),`title`, `type` (tipo de texto), `onChangeText` y `placeholder` (como parámetro opcional). Luego, reutiliza este componente en **Form**.

```js
export function Form({ handle }) {
  return (
    // ....
    // Separa este contenido de UI que se está repitiendo en nuestro componente Form
    <View style={styles.formGroup}>
      <Text style={styles.label}>Título:</Text>
      <TextInput
        keyboardType="text"
        style={styles.input}
        placeholder={"Introduzca un título"}
        placeholderTextColor={"#999"}
      />
    </View>

    // ......
  )
}
```

### Ejercicio 2:

> Dentro de nuestro componente **Form** tenemos un componente **InputTextField** que manejará la descripción para agregarla a una nueva tarea. Este debe ser multilínea. Pásale estas nuevas propiedades y modifica el componente **InputTextField** para que pueda recibir más propiedades opcionales.

> **Nota:** Usa desestructuración y el operador Spread dentro del componente para expandir nuevas propiedades.

```js
export function Form({ handle }) {
  return (
    // ....
    // Pásale estas nuevas propiedades al componente (multiline, numberOfLines y maxLength)
    // y modifica el componente InputTextField para que pueda recibirlas.
    <InputTextField
      name={"description"}
      title={"Descripción: "}
      type={"text"}
      placeholder="Introducir una descripción"
      onChange={handleChangeText}
      multiline={true}
      numberOfLines={4}
      maxLength={120}
    />

    // ......
  )
}
```

### Ejercicio 3:

> Nuestro componente **InputTextField** necesita un estado. Usa el hook `useState` y define su valor inicial como un objeto con claves que identifiquen cada input y su valor vacío. Además, agrega a todos los componentes **InputTextField** la propiedad `name` con las mismas claves del estado previamente creado.

```js
export function Form({ handle }) {
  return (
    // ....
    <InputTextField
    // Agrega la propiedad name y su valor. Además, crea un manejador (handleChangeText) que controle todos estos inputs y reciba como parámetro el name y el nuevo valor.
    // Pásale a la propiedad onChangeText este nuevo manejador (handle) creado.
    />

    // ......
  )
}
```

### Ejercicio 4:

> Ahora debemos programar nuestro manejador. Actualiza el estado pasando una copia del estado anterior del formulario con los nuevos valores que ingresen en los inputs.

```js
const handleChangeText = (name, value) => {
  // Completa la función usando propiedades computadas para actualizar
  // el estado de forma dinámica según el nombre del input
}
```

### Ejercicio 5:

> Ahora debemos guardar nuestra nueva tarea. Crea un nuevo manejador que se ejecute cuando el botón `Agregar` sea presionado. Este manejador debe validar que ningún campo esté vacío; si algún campo lo está, lanzará una alerta, y en caso contrario, actualizará el estado de `todos` y generando una id para la nueva tarea.

```js
// No olvides pasar el modificador de estado de 'todos' al componente Form
export function Form({ setOpen, setTodos }) {
  // Aquí debes crear la función que maneje la validación y actualización de tareas
}
```

### Ejercicio 6:

> El botón "Agregar" no ofrece una experiencia de usuario óptima. Utilizando el estado `pressed` proporcionado por el componente Pressable de React Native, implementaremos una mejora: cuando el botón esté siendo presionado por el usuario, reduciremos la opacidad del botón y cambiaremos el color de su texto.

```js
// Modifica el botón de agregar para mejorar la experiencia de usuario
<Pressable style={styles.btnAdd} onPress={handleAddTODO}>
  <Text style={styles.btnText}>Agregar</Text> // Texto del botón
</Pressable>
```

### Ejercicio 7

> Aún nos falta mejorar la experiencia de usuario. Crea una referencia para cada input en el componente `Form` y añade un texto con el mensaje de error que será visible solo si el campo está vacío (esto reemplazará la alerta del ejercicio 5). Al presionar el botón de agregar, si hay un campo vacío, coloca el foco en ese `input`.

```js
// Usa una referencia para poder llamar al método focus del TextInput
<InputTextField
  name={"title"}
  type={"text"}
  title={"Título"}
  placeholder={"Introducir título"}
  onChangeText={handleChangeText}
  ref={(input) => inputRefs.current['title'] = input} // Asigna la referencia
/>

  // Continuar con la lógica de agregar tarea...
};
```

En este ejericio:

- Usamos inputRefs para almacenar una referencia de cada TextInput, lo que nos permitirá usar el método focus() para colocar el cursor en el campo vacío.
- También mostramos un mensaje de error si el campo está vacío, mejorando la experiencia de usuario sin necesidad de alertas.

### Ejercicio 8

> Ahora ya podemos agregar una tarea a nuestra lista, pero ¿qué pasa si queremos eliminarla? Utiliza el componente `Alert` y `Pressable` dentro de nuestro componente **Todo.jsx**, donde le daremos al usuario la opción de eliminar la tarea si acepta, o cancelar si no lo desea.

```js
import { Alert, Pressable, Text, View } from "react-native"

export function Todo({ todo }) {
  const { id, title, date, description } = todo

  const deleteTodo = (id) => {
    // Lógica para eliminar la tarea si acepta
  }

  const handleDelete = () => {
    Alert.alert(
      "Eliminar tarea",
      "¿Estás seguro que deseas eliminar esta tarea?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Eliminar",
          onPress: () => deleteTodo(id),
        },
      ]
    )
  }

  return (
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>{date}</Text>

      <Pressable onPress={handleDelete}>
        <Text>Eliminar</Text>
      </Pressable>
    </View>
  )
}
```

En este ejercicio:

- Se utiliza `Alert.alert` para mostrar una ventana de confirmación que le pregunta al usuario si realmente quiere eliminar la tarea.
- Si el usuario presiona "Eliminar", se llama a la función `deleteTodo(id)` para eliminar la tarea. Si elige "Cancelar", no se hace nada.
- `Pressable` se usa para envolver el botón de eliminar que activa la alerta.

### Ejercicio 9:

> Ahora solo nos falta actualizar una tarea cuando se presione desde nuestra lista. Agrega un botón "Modificar" que abrirá un modal. Usa el componente **Form** para recibir una nueva propiedad `todo`, pasada desde el componente **App.jsx**, y rellenar sus inputs. Además, cuando se le dé al botón "Guardar", actualiza la información del estado de **todos** con la validación adecuada y restablece el estado de `todo` a un objeto vacío. Utiliza **useEffect** para inicializar el estado del formulario con los valores de la tarea seleccionada.

```js
// En el componente App.jsx
import { useState } from 'react';
import { Modal, Button } from 'react-native';
import { Form } from './Form';
import { Todo } from './Todo';

export function App() {
  const [todos, setTodos] = useState([...]); // Lista de tareas
  const [selectedTodo, setSelectedTodo] = useState({}); // Tarea seleccionada para editar
  const [modalEditarVisible, setModalEditarVisible] = useState(false);

  const handleUpdateTodo=(todo)=>{
        //Implementar la lógica
  }

  return (
    <>
        ........
      <Modal visible={modalVisible} animationType="slide">
        <Form
          handleSaveTodo={handleUpdateTodo}
          todo={selectedTodo} // Pasa la tarea seleccionada al formulario
          handleUpdateTodo={handleUpdateTodo} // Manejador para guardar cambios
        />

        ..................
      </Modal>
    </>
  );
}
```

En este ejercicio:

- **App.jsx**: Aquí se administra el estado de las tareas y la tarea seleccionada para editar. El botón "Modificar" abre un modal que contiene el formulario.
- **Form.jsx**: Inicializa el estado del formulario con la tarea seleccionada usando `useEffect`. Al presionar "Guardar", se valida que todos los campos estén completos y luego se llama a `handleUpdateTodo` para actualizar la tarea en la lista de todos.

## Ejercicio 10:

> Implementaremos el modo oscuro en nuestra aplicación TODO APP. Agrega el componente Switch de React Native y crea el estado isDarkMode, el cual será pasado a un HighOrderComponent (HOC) llamado withDarkMode. Este HOC envolverá los componentes con los estilos correspondientes al modo oscuro y pasará al componente hijo el color del texto como prop.

```js
export default function App() {
  //Crea su estado
  const [isDarkmode, setIsDarkmode] = useState(false)

  return (
    // Arega este componente a App.jsx
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-end",
        width: "100%",
        alignItems: "center",
        gap: 30,
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          color: "#fff",
        }}
      >
        {isDarkmode ? "Dark Mode" : "Light Mode"}
      </Text>
      <Switch
        style={{
          alignSelf: "flex-end",
          transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
          marginRight: 20,
        }}
        trackColor={{ false: "#767577", true: "#000" }}
        thumbColor={isDarkmode ? "#00f" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => setIsDarkmode((previusValue) => !previusValue)}
        value={isDarkmode}
      />
    </View>
  )
}
```

### Ejercicio 11

> Ahora nos tocá filtrar nuestros `TODOS` por tareas completadas y por hacer. Usa el componente **DropdownSelect** de **react-native-input-select** y filtra las tareas por `Todos` , `Completados` y `No completados`.

#### Instalar la depedencia en tu proyecto:

```cmd
npm install react-native-input-select
```

> Nota:
> Puedes leer la documentación para saber como funciona el componente o seguir el ejemplo del ejercicio.
> [Documentación](https://github.com/azeezat/react-native-select)

```js
export default function App() {
  // Crea un estado para el filtro
  const [filter, setFilter] = useState(null)
  // Agrega esté nuevo componente en App.jsx
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
}
```

```js
// Ahora filtra los todos que se mostrarán en pantalla por el filtro elegido

//Modificá el estado de todos por su filtro antes de pasarlo al componente <Todos />

{
  todos.length ? (
    <Todos
      todos={
        //Modifica el estado
      }
      handleUpdateTodos={handleUpdateTodos}
      setTodo={setTodo}
    />
  ) : (
    <Message />
  )
}
```
