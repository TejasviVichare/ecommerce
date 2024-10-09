import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../Helpers/FormatPrice';

const Product = (curElem) => {

    const {id, name, image, price, category} = curElem;

  return (
  <NavLink to={`/singleproduct/${id}`}>
      <div className='card p-3'>
         <figure>
            <img src={image}  alt={name} width={230}/>
            <figcaption className='font-bold'>{category}</figcaption>
         </figure>

         <div>
            <div className='flex gap-10'>
               <h3 className='text-slate-500'>{name}</h3>
                <p>{<FormatPrice price={price} />}</p>  
            </div>
         </div>
      </div>


  </NavLink>
  )
}

export default Product