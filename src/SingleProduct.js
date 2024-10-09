import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from './contex/productcontex';
import PageNavigation from './Components/PageNavigation'; 
import MyImage from './Components/MyImage';
import AddToCart from './Components/AddToCart';


const SingleProduct = () => {
 const {getSingleProduct, isSingleLoading, singleProduct} = useProductContext();
  
 console.log(singleProduct);
  const API = 'https://api.pujakaitem.com/api/products'
  const {id} = useParams();

//  console.log(id);
 

const {
  id: alias,
  name,
  company,
  price,
  description,
  category,
  stock,
  stars,
  reviews,
  image
} = singleProduct;


useEffect(() => {
  getSingleProduct(`${API}?id=${id}`);
}, []);


if(isSingleLoading){
  return <>
   <span>Loading.......</span>
  </>
}



  return (
    <>
      <PageNavigation title={name} />
       <center>
       <div className='w-full  grid grid-cols-1 md:grid-cols-2 md:px-36'>
        <div>
           <MyImage  imgs={image}/>
        </div>

        <div className='text-left px-6'>
              <h2 className='text-xl font-semibold my-1'>{name}</h2>
              <p className='my-1'>{stars}</p>
              <p className='my-1'>{reviews} Reviews </p>
              <p className='font-semibold'>MRP : {price} </p>
              <p className='my-1'>{description}</p>
              <p className='my-1'>Available : {stock > 0 ? "In Stock" : "Not Available"}</p>
              <p className='my-1'>ID : {id}</p>
              <p className='my-1'>Brand : {company}</p>
              <hr />
             
              {stock > 0 && <AddToCart product={singleProduct} />}
        </div>
       </div>
       </center>


    </>
  )
}

export default SingleProduct