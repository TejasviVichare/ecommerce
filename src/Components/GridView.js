import React from 'react'
import Product from "./Product";

const GridView = ({products}) => {

  return (
    <div className='grid md:grid-cols-3 p-2'>
        {products.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
    </div>
  )
}

export default GridView