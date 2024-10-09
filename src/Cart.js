import React from 'react'
import { useCartContext } from './contex/cart_context'
import CartItem from './Components/CartItem';
import { NavLink } from 'react-router-dom';
import FormatPrice from './Helpers/FormatPrice';

const Cart = () => {

   const {cart, total_price,shipping_fee} = useCartContext();
   const {clearCart} = useCartContext();
   console.log(cart);

  return (
    <div className='container md:px-20 px-4 py-12'>
      <div className='grid md:grid-cols-5   pb-4'>
       <p className='md:block hidden'>Item</p>
       <p className='md:block hidden'>price</p>
       <p className='md:block hidden'>Quantity</p>
       <p className='md:block hidden'>Subtotal</p>
       <p className='md:block hidden'>Remove</p>
      </div>
       <hr />

      <div>
        {
          cart.map((curElm) =>{
            return <CartItem  key={curElm.id} {...curElm}/>;
          })
        }
      </div>

        <hr />
        <div className='grid md:grid-cols-2 grid-cols-1 justify-between mt-4'>
          <div className='text-center'>
        <NavLink to="/products">
           <button className='bg-blue-800 text-white py-1 px-1 rounded mb-4'>Continue Shopping</button>
        </NavLink>
        </div>

        <div className='text-center'>
           <button className='bg-blue-800 text-white py-1 px-1 rounded' onClick={()=>clearCart()}>Clear Cart</button>
        </div>
        </div>



       {/*Order Total*/}
       
        <div className='container  pr-20 mt-20'>
          
        <div className='flex justify-end pb-2'>
              <p>subtotal:</p>
              <p>
                <FormatPrice price={total_price} />
              </p>
            </div>
            <div className='flex justify-end pb-2'>
              <p>shipping fee:</p>
              <p>
                <FormatPrice price={shipping_fee} />
              </p>
            </div>
            <hr />
            <div className='flex justify-end pb-2'>
              <p>order total:</p>
              <p>
                <FormatPrice price={shipping_fee + total_price} />
              </p>
            </div>
        </div>
    </div>
  ) 
}

export default Cart