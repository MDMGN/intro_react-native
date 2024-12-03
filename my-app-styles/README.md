### Ejercicios React Native Animated

**10 ejercicios para practicar animaciones en React Native**, organizados de menor a mayor complejidad. Los ejercicios cubren el uso de la biblioteca **Animated** y su integración en aplicaciones móviles:

---

### **Nivel Básico**

1. **Animación de Opacidad Básica**

   - Objetivo: Crear un botón que al presionarlo haga que un texto aparezca y desaparezca suavemente cambiando su opacidad.
   - Recursos: Utiliza `Animated.Value` / `useAnimatedValue` y `Animated.timing`.

2. **Movimiento Horizontal de un Componente**

   - Objetivo: Anima un cuadro para que se desplace horizontalmente al pulsar un botón.
   - Recursos: Usa `Animated.timing` y `translateX`.

3. **Cambio de Color de Fondo**
   - Objetivo: Cambiar el color de fondo de un contenedor de un color inicial a un color final.
   - Recursos: Utiliza `interpolate` para mapear el valor de animación a colores.

---

### **Nivel Intermedio**

4. **Animación de Rotación**

   - Objetivo: Crear un componente que rote 360° al hacer clic en un botón.
   - Recursos: Utiliza `rotate` junto con `interpolate`.

5. **Animación de Entrada y Salida**

   - Objetivo: Diseña un menú lateral (drawer) que se deslice dentro y fuera de la pantalla.
   - Recursos: Usa `Animated.spring` para un efecto de rebote al mostrar el menú.

6. **Botón con Rebote**

   - Objetivo: Crea un botón que haga un efecto de rebote al ser presionado.
   - Recursos: Utiliza `Animated.spring` para el efecto de escalado.

7. **Animación de Temporizador Circular**
   - Objetivo: Crea un temporizador circular que se llene gradualmente como un cronómetro.
   - Recursos: Usa `Animated.timing` y `interpolate` con estilos rotacionales.

---

### **Nivel Avanzado**

8. **Tarjetas Deslizables (Swipeable Cards)**

   - Objetivo: Implementa tarjetas que los usuarios puedan deslizar hacia la izquierda o derecha para eliminar o aceptar una acción.
   - Recursos: Usa `PanResponder` y `Animated.ValueXY`.

9. **Animaciones en Secuencia**

   - Objetivo: Crea una animación en la que varios componentes se animan uno tras otro, como una lista de elementos que aparecen uno a uno.
   - Recursos: Usa `Animated.sequence` o `Animated.stagger`.

10. **Parallax ScrollView**
    - Objetivo: Diseña una lista desplazable con un efecto parallax en las imágenes.
    - Recursos: Combina `Animated.event` con el desplazamiento de `ScrollView`.

---
