import React from 'react'
import CartAmountToggle from './CartAmountToggle'
import { useCartContext } from '../contex/cart_context';
import FormatPrice from '../Helpers/FormatPrice';


const CartItem = ({id, name, image, color, price,amount}) => {

   const {removeItem, setDecrease, setIncrease} = useCartContext();

  


  return (
    <div className='container pt-4'>
    <div className='grid md:grid-cols-5 grid-col-1'>
        <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} width={50} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          {/* <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}></div>
          </div> */}
        </div>
      </div>
      <p>{price}</p>
      {/* price   */}
      {/* <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div> */}




      {/* Quantity  */}
      <CartAmountToggle
        amount={amount}
        setDecrease={() => setDecrease(id)}
        setIncrease={() => setIncrease(id)}
      />

     <div className="cart-hide">
        <p>
        <FormatPrice price={price * amount} />

        </p>
      </div> 


      {/* Remove */}
      <div>
        <button className='bg-red-600 text-white py-1 px-1 rounded md:mt-0 mt-4' onClick={() => removeItem(id)}>Remove</button>
      </div>


    </div>
    </div>
  )
}

export default CartItem