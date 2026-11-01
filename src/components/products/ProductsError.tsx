import React from 'react'

const ProductsError = ({error} :{error: Error | null}) => {
  console.log(error?.message);
  
  return (
    <div className='products__error'>
      <h2>something went wrong!</h2>
      <p>{error?.message}</p>
    </div>
  )
}

export default ProductsError