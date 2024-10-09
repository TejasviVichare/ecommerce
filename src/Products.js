import React from 'react'
// import FilterSection from './Components/FilterSection'
import ProductList from './Components/ProductList'
import Sort from './Components/Sort'

const Products = () => {
   
  

  return (
    <div className='md:px-20' >
       {/* <div>
          <FilterSection />
       </div> */}
       <section>
            <div>
              <Sort />
            </div>
            <div>
              <ProductList />
            </div>
       </section>
    </div>
  )
} 

export default Products