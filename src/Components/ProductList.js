import React from 'react'
import ListView from './ListView';
import { useFilterContext } from '../contex/filter_contex'
import GridView from './GridView';

const ProductList = () => {
  const {filter_products ,grid_view} = useFilterContext();

   if(grid_view === true){
    return <GridView  products={filter_products} />
   }

   if(grid_view  === false){
    return <ListView  products={filter_products} />
   }
}

export default ProductList