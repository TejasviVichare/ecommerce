import React from 'react'
import { NavLink } from 'react-router-dom';
const ListView = ({products}) => {
    return (
     <div>
        {
            products.map((curElem) =>{
                const {id, name, image, price, description} = curElem;

                return <div className='flex flex-col px-2'>
                    <figure>
                        <img src={image} className='w-60 p-2' />
                    </figure>
                    <div className="card-data">
                <h3>{name}</h3>
              
                <p>{description.slice(0, 90)}...</p>

                <NavLink to={`/singleproduct/${id}`} className="btn-main">
                  <button className="btn">Read More</button>
                </NavLink>
              </div>
                </div>
            })
        }
     </div>
    )
  }
export default ListView