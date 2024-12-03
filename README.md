# **`Animated` en React Native**

La API `Animated` permite crear animaciones fluidas y de alto rendimiento en React Native. Funciona optimizando los cambios de las propiedades visuales, utilizando el hilo nativo.

---

### **Clases Principales en `Animated`**

#### 1. **`Animated.Value`**

- Representa un valor animado simple.
- Se utiliza como base para todas las animaciones.

**Propiedades:**

- Puede ser un número (`number`) o un valor de color (`color`).
- Permite la interpolación (`interpolate`).

**Ejemplo:**

```javascript
import React, { useRef, useEffect } from "react"
import { Animated, View, StyleSheet } from "react-native"

export default function AnimatedValueExample() {
  const animatedValue = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start()
  }, [])

  return (
    <Animated.View
      style={[
        styles.box,
        {
          opacity: animatedValue, // Cambia la opacidad de 0 a 1
        },
      ]}
    />
  )
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: "tomato",
  },
})
```

#### 2. **`Animated.ValueXY`**

- Representa un valor animado bidimensional, útil para animaciones de movimiento (x, y).

**Ejemplo:**

```javascript
const position = new Animated.ValueXY({ x: 0, y: 0 })

Animated.spring(position, {
  toValue: { x: 100, y: 200 },
  useNativeDriver: true,
}).start()
```

---

### **Métodos de Animación**

#### 1. **`Animated.timing`**

- Realiza una animación lineal en un tiempo específico.

**Propiedades:**

- `toValue`: Valor final de la animación.
- `duration`: Duración de la animación en milisegundos.
- `useNativeDriver`: Usa el hilo nativo para optimizar.

**Ejemplo:**

```javascript
Animated.timing(animatedValue, {
  toValue: 1,
  duration: 500,
  useNativeDriver: true,
}).start()
```

### 2 **`Animated.spring` en React Native**

`Animated.spring` es un método proporcionado por la API `Animated` para crear animaciones basadas en un modelo físico de resorte. Este tipo de animaciones son naturales y fluidas, simulando el comportamiento de un objeto que rebota hasta detenerse en su posición final.

---

### **Sintaxis Básica**

```javascript
Animated.spring(animatedValue, {
  toValue: 100,
  friction: 7,
  tension: 40,
  useNativeDriver: true,
}).start()
```

---

### **Propiedades de Configuración**

     **`toValue`**

- El valor final que alcanzará la animación.
- Puede ser un número o un objeto (si estás trabajando con `Animated.ValueXY`).
- **Ejemplo:**
  ```javascript
  toValue: 150
  ```

#### **Opcionales**

**`damping`**

- Controla la velocidad con la que el objeto pierde energía, lo que afecta la "suavidad" del movimiento.
- Valores más altos hacen que el resorte rebote menos.
- **Por defecto:** `10`.

**`friction`** (Obsoleto en algunas versiones, sustituido por `damping`)

- La resistencia del resorte.
- Valores más altos producen movimientos más amortiguados.

**`mass`**

- Representa la masa del objeto animado.
- Valores más altos hacen que el resorte tarde más en moverse y detenerse.
- **Por defecto:** `1`.

**`stiffness`**

- Controla la rigidez del resorte.
- Valores más altos producen animaciones más rápidas con menos rebotes.
- **Por defecto:** `100`.

**`velocity`**

- La velocidad inicial del movimiento.
- Ideal para animaciones dinámicas donde el objeto ya tiene impulso.
- **Por defecto:** `0`.

**`overshootClamping`**

- Si se establece en `true`, el objeto no "rebotará" más allá de su posición final.
- Es útil para animaciones más controladas.
- **Por defecto:** `false`.

**`restDisplacementThreshold`**

- Define el umbral de distancia en el que el objeto se considera en reposo.
- **Por defecto:** `0.001`.

**`restSpeedThreshold`**

- Define el umbral de velocidad en el que el objeto se considera en reposo.
- **Por defecto:** `0.001`.

**`useNativeDriver`** - Si se establece en `true`, ejecuta la animación en el hilo nativo para un mejor rendimiento. - **Recomendado para propiedades no relacionadas con el diseño (como opacidad, escala, etc.)**.

#### 3. **`Animated.decay`**

- Anima un valor disminuyendo gradualmente con velocidad inicial.

**Propiedades:**

- `velocity`: Velocidad inicial.
- `deceleration`: Controla la desaceleración (valores entre 0 y 1).

**Ejemplo:**

```javascript
Animated.decay(animatedValue, {
  velocity: 2,
  deceleration: 0.9,
  useNativeDriver: true,
}).start()
```

#### 4. **Composiciones**

- `Animated.sequence`: Ejecuta animaciones en secuencia.
- `Animated.parallel`: Ejecuta animaciones en paralelo.
- `Animated.stagger`: Ejecuta animaciones con un retraso entre cada una.

**Ejemplo: `sequence`**

```javascript
Animated.sequence([
  Animated.timing(animatedValue, {
    toValue: 1,
    duration: 500,
    useNativeDriver: true,
  }),
  Animated.timing(animatedValue, {
    toValue: 0,
    duration: 500,
    useNativeDriver: true,
  }),
]).start()
```

---

### **Interpolación**

Permite mapear un rango de valores de entrada a un rango de valores de salida.

**Ejemplo:**

```javascript
const animatedValue = new Animated.Value(0)

const interpolatedValue = animatedValue.interpolate({
  inputRange: [0, 1],
  outputRange: [0, 100], // Mapear de 0 a 100
})
```

---

### **Diferencias Actualizadas: `Animated.Value` vs `useAnimatedValue`**

1. **`Animated.Value`**

   - Es el enfoque clásico y sigue siendo útil para proyectos que no usan hooks o prefieren una API orientada a objetos.
   - Está diseñado para trabajar con valores animados que requieren referencias explícitas.

   **Ejemplo:**

   ```javascript
   const animatedValue = new Animated.Value(0)

   Animated.timing(animatedValue, {
     toValue: 1,
     duration: 1000,
     useNativeDriver: true,
   }).start()
   ```

2. **`useAnimatedValue`**

   - Parte del enfoque moderno con hooks.
   - Es más declarativo y se integra de manera más natural en componentes funcionales.
   - Utiliza la misma funcionalidad subyacente que `Animated.Value`, pero simplifica el manejo en componentes funcionales.

   **Ejemplo:**

   ```javascript
   import { useAnimatedValue } from "react-native"

   export default function App() {
     const animatedValue = useAnimatedValue(0)

     useEffect(() => {
       Animated.timing(animatedValue, {
         toValue: 1,
         duration: 1000,
         useNativeDriver: true,
       }).start()
     }, [animatedValue])

     return (
       <Animated.View style={{ opacity: animatedValue }}>
         <Text>¡Animación con useAnimatedValue!</Text>
       </Animated.View>
     )
   }
   ```

---

### **Ventajas de `useAnimatedValue`**

1. **Declarativo:** Trabaja mejor con React Hooks y estados funcionales.
2. **Manejo Simplificado:** No requiere instancias manuales de `new Animated.Value(...)`.
3. **Reutilización Natural:** Se integra con la filosofía moderna de React.

---

### **Propiedades en `Animated`**

- **`useNativeDriver`**: Determina si la animación se ejecuta en el hilo nativo (mayor rendimiento).
- **`toValue`**: Valor objetivo de la animación.
- **`duration`**: Tiempo en milisegundos.
- **`easing`**: Personaliza la curva de interpolación (por ejemplo, `Easing.linear`).
- **`stagger`**: Retrasa el inicio de animaciones en serie.
- **`interpolate`**: Convierte un rango de entrada a un rango de salida.
