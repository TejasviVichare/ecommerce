import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import CartAmountToggle from './CartAmountToggle';
import { useCartContext } from '../contex/cart_context';


const AddToCart = ({product}) => {
     
    const {addToCart} = useCartContext();
    const { id, color, stock } = product;

    const [amount, setAmount] = useState(1);
 
    const setDecrease = () =>{
        amount > 1 ? setAmount(amount - 1) : setAmount(1)
    };

    const setIncrease =() =>{
       amount < stock ? setAmount(amount + 1) : setAmount(stock)
    };

  return (
    <div className='pb-4'>
        <CartAmountToggle 
            amount={amount}
            setDecrease={setDecrease}
            setIncrease={setIncrease}
        />

        <NavLink  to="/cart"  className='bg-blue-800 text-white py-1 px-1 rounded mb-2'
         onClick={() => addToCart(id, color, amount, product)}
        >
            Add To cart
        </NavLink>


    </div>
  )
}

export default AddToCart