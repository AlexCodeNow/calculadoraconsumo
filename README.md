
# Calculadora de Consumo

Una webapp interactiva para calcular el consumo y propina en restaurantes de manera sencilla. La aplicación permite seleccionar productos de un menú, calcular el total y agregar propina de forma dinámica.

## Tecnologías Utilizadas

- **React + Vite + TypeScript**: Para una experiencia de desarrollo rápida y tipada.
- **Tailwind CSS**: Para estilizar la aplicación de manera eficiente y modular.
- **Simulación de base de datos**: La aplicación cuenta con una lista de 12 ítems predefinidos en memoria para simular una base de datos.

## Características

- Menú interactivo con precios visibles.
- Posibilidad de agregar productos al carrito de consumo.
- Cálculo automático del subtotal y total con opción de propina (10%, 20%, 50%).
- Botón para guardar la orden (funcionalidad simulada).
- Estilos modernos y responsive gracias a Tailwind CSS.

## Capturas de Pantalla

![Vista previa](ruta-de-tu-imagen.png)  

## Instalación y Ejecución

1. Clona el repositorio:
   ```sh
   git clone https://github.com/tuusuario/calculadora-consumo.git
   ```
2. Entra en el directorio del proyecto:
   ```sh
   cd calculadora-consumo
   ```
3. Instala las dependencias:
   ```sh
   npm install
   ```
4. Inicia la aplicación:
   ```sh
   npm run dev
   ```

## Retos y Soluciones

### 1. **Manejo del Estado Global**
   - **Reto:** Inicialmente, la gestión de los productos agregados al carrito era complicada sin un estado global adecuado.
   - **Solución:** Se implementó `useContext` y `useReducer` para gestionar el estado de manera eficiente.

### 2. **Formato Dinámico de Propinas**
   - **Reto:** Calcular y actualizar la propina en tiempo real sin afectar la experiencia del usuario.
   - **Solución:** Se usó `useState` para manejar la selección de la propina y actualizar los totales dinámicamente.

### 3. **Estilos Responsivos con Tailwind**
   - **Reto:** Asegurar que la interfaz se vea bien en distintos dispositivos sin reescribir estilos manualmente.
   - **Solución:** Se usaron clases utilitarias de Tailwind para crear un diseño flexible y adaptable.

## Contribución

Si quieres contribuir, siéntete libre de hacer un fork del repositorio y enviar un PR con mejoras o correcciones.

## Licencia

Este proyecto está bajo la licencia MIT.



---

## **Autor**

Desarrollado por [Alex](https://github.com/AlexCodeNow). Si tienes alguna duda o sugerencia, ¡no dudes en contactarme!

---