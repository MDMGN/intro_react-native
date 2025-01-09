### Ejercicios de React Native: Animations y Fetch

1. **Pantalla `HomeScreen` y navegación**

   - Crea una pantalla llamada `HomeScreen` que permita navegar a una pantalla llamada `HeroesScreen`.
   - En `HeroesScreen`, utiliza una API de héroes para obtener una lista de 10 héroes y renderízalos en un `FlatList`.
   - Cada elemento debe mostrarse en una tarjeta con:
     - El nombre del héroe como título.
     - Su imagen y descripción.

2. **Carga de datos con `onEndReached`**

   - Implementa un evento `onEndReached` en el `FlatList` que llame a la API para cargar más héroes y los agregue a la lista existente.

3. **Caja con opacidad dinámica**

   - En la pantalla `HeroesScreen`, coloca una caja encima del `FlatList`.
   - Configura un evento `onScroll` en el `FlatList` para que la opacidad de la caja cambie dinámicamente entre 0.5 y 1, dependiendo de la posición del desplazamiento.

4. **Navegación a `HeroeScreen`**

   - Haz que al presionar la caja en la pantalla `HeroesScreen`, esta navegue a una nueva pantalla llamada `HeroeScreen`.
   - Pasa como parámetro a `HeroeScreen` toda la información del héroe seleccionado.

5. **Animación en `HeroeScreen`**
   - En la pantalla `HeroeScreen`, anima los textos y la imagen del héroe de manera secuencial cuando se muestre la pantalla.
   - Asegúrate de que las animaciones sean suaves y llamativas.
