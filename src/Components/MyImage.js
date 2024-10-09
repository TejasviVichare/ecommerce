import React, { useState } from 'react'

const MyImage = ({imgs = [{url : ''}]}) => {

  const [mainImage, setMainImage] = useState(imgs[0]);

  // console.log(imgs);
  return (
    <>
    <div className='flex flex-col md:flex-row '>
      <div className=''>
        {
          imgs.map((curElem, index) => {
            return(
              <figure>
                <img src={curElem.url} alt={curElem.filename} key={index} width={120} className='m-2'
                 onClick={() => setMainImage(curElem)}
                 
                />
              </figure>
            )
          })
        }
      </div>
     <div className='p-2'>
        <img  src={mainImage.url} alt={mainImage.filename} width={300}/>


        
     </div>
     </div>
    </>
  )
}

export default MyImage