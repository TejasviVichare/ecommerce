import React from 'react'
import { useFilterContext } from '../contex/filter_contex'

const Sort = () => {

const {grid_view , setGridView, setListView, filter_products} = useFilterContext();


  return (
    <div className='flex justify-between'>
       <div className='py-4'>
        <button className={grid_view ? "active sort-btn" : "sort-btn"}
         onClick={setGridView}
        >
        <i class="fa-solid fa-border-all px-2" ></i> 
        </button>

        <button className={grid_view ? " sort-btn" : "active sort-btn"} 
        onClick={setListView}>
        <i class="fa-solid fa-list  px-2"></i>
       </button>
       </div>
        <div>
           <p>{`${filter_products.length}`}</p>
        </div>
      
    </div>
  )
}

export default Sort