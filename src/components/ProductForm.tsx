import type { Product } from '../types'

interface ProductFormProps {
  product?: Product
}

function ProductForm({ product }: ProductFormProps) {
  return (
    <>
      <div className='mb-4'>
        <label
          className='text-gray-800'
          htmlFor='name'
        >
          Nombre del producto:
        </label>
        <input
          id='name'
          type='text'
          className='mt-2 block w-full p-3 bg-gray-50'
          placeholder='Nombre del producto'
          name='name'
          defaultValue={ product?.name }
        />
      </div>
      <div className='mb-4'>
        <label
          className='text-gray-800'
          htmlFor='price'
        >
          Precio:
        </label>
        <input
          id='price'
          type='number'
          className='mt-2 block w-full p-3 bg-gray-50'
          placeholder='Precio del producto. ej. 200, 300'
          name='price'
          defaultValue={ product?.price }
        />
      </div>

    </>
  )
}

export default ProductForm