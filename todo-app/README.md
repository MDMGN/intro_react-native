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
