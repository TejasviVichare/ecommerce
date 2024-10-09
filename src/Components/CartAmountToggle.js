import React from 'react'

const CartAmountToggle = ({amount, setDecrease, setIncrease}) => {
  return (
    <div>
      <div className='flex p-1'>
         <button onClick={() =>setDecrease()}  className='px-2'>-</button>
         <div>{amount}</div>
         <button onClick={() => setIncrease()} className='px-2'>+</button>

      </div>
    </div>
  )
}

export default CartAmountToggle