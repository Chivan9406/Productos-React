# 🛍️ Administrador de Productos - React

Una aplicación web moderna y eficiente para la gestión de productos, construida con React 19, TypeScript y las últimas tecnologías del ecosistema frontend.

## 🚀 Características Principales

- ✨ **Interfaz moderna** con React 19 y TailwindCSS 4.1
- 🔍 **Listado de productos** con tabla interactiva
- ➕ **Crear productos** con formulario validado
- ✏️ **Editar productos** existentes
- 🗑️ **Eliminar productos** con confirmación
- 🔄 **Actualizar disponibilidad** con un click
- 📱 **Diseño responsivo** adaptable a cualquier dispositivo
- ⚡ **Navegación rápida** con React Router 7
- 🛡️ **Validación robusta** con Valibot
- 🌐 **API REST** integrada con Axios

## 🛠️ Tecnologías Utilizadas

### Core
- **React** ^19.1.1 - Biblioteca principal para la UI
- **TypeScript** ~5.8.3 - Tipado estático
- **Vite** ^7.1.2 - Build tool y dev server ultrarrápido

### Routing y Navegación
- **React Router** ^7.9.0 - Enrutamiento declarativo moderno

### Estilos
- **TailwindCSS** ^4.1.13 - Framework CSS utility-first
- **@tailwindcss/vite** ^4.1.13 - Plugin de Vite para Tailwind

### HTTP y Validación
- **Axios** ^1.12.1 - Cliente HTTP para APIs
- **Valibot** ^1.1.0 - Validación de schemas TypeScript-first

### Desarrollo
- **ESLint** ^9.33.0 - Linting de código
- **@vitejs/plugin-react-swc** ^4.0.0 - Compilación ultrarrápida con SWC

## 📦 Instalación

1. **Clona el repositorio**
```bash
git clone https://github.com/Chivan9406/Productos-React.git
cd Productos-React
```

2. **Instala las dependencias**
```bash
npm install
```

3. **Configura las variables de entorno**
```bash
# Crea un archivo .env.local en la raíz del proyecto
VITE_API_URL=http://localhost:4000
```

4. **Inicia el servidor de desarrollo**
```bash
npm run dev
```

## 🏗️ Estructura del Proyecto

```
src/
├── components/         # Componentes reutilizables
│   ├── ErrorMessage.tsx    # Manejo de errores
│   ├── ProductDetails.tsx  # Detalles de producto
│   └── ProductForm.tsx     # Formulario de producto
├── layout/            # Componentes de layout
│   └── Layout.tsx         # Layout principal
├── services/          # Servicios de API
│   └── ProductService.ts  # CRUD de productos
├── types/             # Definiciones de tipos
│   └── index.ts           # Schemas y tipos
├── utils/             # Utilidades
│   └── index.ts           # Funciones auxiliares
├── views/             # Páginas principales
│   ├── EditProduct.tsx    # Edición de productos
│   ├── NewProduct.tsx     # Creación de productos
│   └── Products.tsx       # Lista de productos
├── main.tsx           # Punto de entrada
└── router.tsx         # Configuración de rutas
```

## 🎯 Funcionalidades del Sistema

### 📋 Gestión de Productos
- **Listado completo** de productos con información detallada
- **Búsqueda y filtrado** en tiempo real
- **Estados de disponibilidad** visual y funcional

### ➕ Creación de Productos
- Formulario intuitivo con validación en tiempo real
- Campos: nombre y precio
- Feedback inmediato de errores

### ✏️ Edición de Productos
- Modificación de todos los campos del producto
- Pre-carga de datos existentes
- Validación completa de datos

### 🗑️ Eliminación de Productos
- Eliminación segura con confirmación
- Actualización automática de la lista

## 🎨 Componentes Principales

### `ProductDetails`
```tsx
// Componente para mostrar los detalles de cada producto
// Incluye acciones: editar, eliminar y cambiar disponibilidad
<ProductDetails product={product} />
```

### `ProductForm`
```tsx
// Formulario reutilizable para crear/editar productos
// Validación integrada con Valibot
<ProductForm product={product} />
```

### `Layout`
```tsx
// Layout principal con header y navegación
// Implementa Outlet para el contenido dinámico
<Layout />
```

## 📊 Manejo de Estado

El proyecto utiliza **React Router Data APIs** para el manejo de estado:

- **Loaders**: Carga de datos antes del renderizado
- **Actions**: Manejo de formularios y mutaciones
- **Navegación programática**: Redirecciones automáticas

### Ejemplo de Loader:
```tsx
export async function loader() {
  return await getProducts()
}
```

### Ejemplo de Action:
```tsx
export async function action({ request }: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData())
  await addProduct(data)
  return redirect('/')
}
```

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo en http://localhost:5173

# Construcción
npm run build        # Compila TypeScript y construye para producción

# Linting
npm run lint         # Ejecuta ESLint para verificar código

# Preview
npm run preview      # Vista previa de la build de producción
```

## 🌟 Características Técnicas Destacadas

### ⚡ Performance
- **React 19** con las últimas optimizaciones
- **SWC** para compilación ultrarrápida
- **Vite** para desarrollo y build optimizado

### 🛡️ Type Safety
- **TypeScript** configurado de forma estricta
- **Valibot** para validación runtime con types inferidos
- **Interfaces** bien definidas para todos los datos

### 🎨 UX/UI Moderno
- **TailwindCSS 4.1** con utilidades avanzadas
- **Diseño responsivo** mobile-first
- **Feedback visual** inmediato para acciones del usuario

### 🔒 Validación Robusta
```tsx
// Ejemplo de schema con Valibot
export const ProductSchema = object({
  id: number(),
  name: string(),
  price: number(),
  availability: boolean()
})
```

### 🌐 API Integration
- **Axios** configurado para manejo de errores
- **Variables de entorno** para configuración flexible
- **CRUD completo** con endpoints RESTful

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👨‍💻 Autor

Desarrollado por **Chivan9406**

- GitHub: [@Chivan9406](https://github.com/Chivan9406)
- Proyecto: [Productos-React](https://github.com/Chivan9406/Productos-React)

---

⭐ Si este proyecto te fue útil, ¡no olvides darle una estrella en GitHub!
