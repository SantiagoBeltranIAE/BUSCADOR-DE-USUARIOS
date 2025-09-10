# 📌 Buscador de Usuarios

Este proyecto es una aplicación web interactiva que permite buscar y visualizar información de usuarios obtenidos desde la API pública de **JSONPlaceholder**.

## 🚀 Tecnologías usadas
- **HTML** → Estructura de la página
- **CSS** → Estilos y diseño
- **JavaScript** → Lógica de programación y manejo de la API

## 🎯 Funcionalidades
1. **Listado inicial de usuarios**  
   Se obtienen 10 usuarios desde la API `https://jsonplaceholder.typicode.com/users` y se muestran en pantalla con su **nombre** y **correo electrónico**.

2. **Buscador en tiempo real**  
   Un campo de búsqueda permite filtrar usuarios por nombre (sin importar mayúsculas/minúsculas).

3. **Detalles de usuario**  
   Al hacer clic en un usuario se muestra una tarjeta con más información:
   - Nombre completo  
   - Nombre de usuario  
   - Email  
   - Teléfono  
   - Compañía  

## 📂 Estructura del proyecto
├── index.html # Página principal
├── style.css # Estilos
├── app.js # Lógica y conexión con la API
└── README.md # Documentación del proyecto
