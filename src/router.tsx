import { createBrowserRouter } from 'react-router'
import Layout from './layout/Layout.tsx'
import Products, { action as updateAvailabilityAction, loader as productsLoader } from './views/Products.tsx'
import NewProduct, { action as newProductAction } from './views/NewProduct.tsx'
import EditProduct, { loader as editProductLoader, action as editProductAction } from './views/EditProduct.tsx'
import { action as deleteProductAction } from './components/ProductDetails.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: productsLoader,
        action: updateAvailabilityAction
      },
      {
        path: 'productos/nuevo',
        element: <NewProduct />,
        action: newProductAction
      },
      {
        path: 'productos/:id/editar',
        element: <EditProduct />,
        loader: editProductLoader,
        action: editProductAction
      },
      {
        path: 'productos/:id/eliminar',
        action: deleteProductAction
      }
    ]
  }
])