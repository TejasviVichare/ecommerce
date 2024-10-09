
const cartReducer = (state, action) => {
 
    if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
        let cartProduct;
        cartProduct = {
            id: id + color,
            name : product.name,
            color,
            amount,
            image: product.image[0].url,
            price: product.price,
            max: product.stock,
        };
     return{
        ...state, 
        cart :[...state.cart, cartProduct],
     };
  }
 
  if(action.type=== "REMOVE_ITEM"){ 
    let updatedCart = state.cart.filter((curItem) => curItem.id !== action.payload);
    return {
        ...state,
        cart : updatedCart,
    }
 }
 

 if(action.type === "CLEAR_CART"){
    return {
        cart : [],
    }
 }


if(action.type === "CART_TOTAL_PRICE"){

    let total_price = state.cart.reduce((initialVal, curElem) =>{
        let {price, amount} = curElem;
        
        initialVal = initialVal  + price * amount;

        return initialVal;

    }, 0);

    return {
        ...state,
        total_price: total_price,
    }
}

    if(action.type === "SET_DECREMENT"){
        let updatedProduct = state.cart.map((curElm) =>{
            if(curElm.id === action.payload){
              let decAmount = curElm.amount - 1;

              if (decAmount <= 1) {
                decAmount = 1;
              }
              return {
                ...curElm,
                amount: decAmount,
              };
            } else{
                return curElm;
            }
        });
        return { ...state, cart: updatedProduct };
    }

    if(action.type === "SET_INCREMENT"){
        let updatedProduct = state.cart.map((curElm) =>{
            if(curElm.id === action.payload){
              let incAmount = curElm.amount + 1;

              if (incAmount >= curElm.max) {
                incAmount = curElm.max;
              }
              return {
                ...curElm,
                amount: incAmount,
              };
            } else{
                return curElm;
            }
        });
        return { ...state, cart: updatedProduct };
    }

        if(action.type=== "CART_TOTAL_ITEM"){
            let updatedItemVal = state.cart.reduce((initialVal, curElem) =>{
                let {amount} = curElem;

                initialVal = initialVal +  amount;
                return initialVal;

            }, 0);

            return{
                ...state,
                total_item:updatedItemVal,
            }
        }

return state;
}

export default cartReducer;