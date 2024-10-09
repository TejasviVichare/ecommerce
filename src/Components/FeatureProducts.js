import { useProductContext } from "../contex/productcontex";
import Product from "./Product";

const FeatureProducts = () => {
  const { isLoading, featureProducts } = useProductContext();

  console.log(featureProducts)


  if (isLoading) {
    return <div> ......Loading </div>;
  }

  return (
    <>
      <div className="text-left w-full md:px-36 px-2">
         <p className="mb-3">Check Now</p>
         <h2 className="font-bold text-3xl">Our Fature Services</h2><br></br>
         <div className="grid md:grid-cols-3 grid-cols-1">
            {
              featureProducts.map((curElem) =>{
                return <Product key={curElem.id} {...curElem} />
              })
            }
          
         </div>
      </div>
    </>
  )
}

export default FeatureProducts;