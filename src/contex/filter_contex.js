// It allows developers to share data between multiple components
import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./productcontex";

import reducer from '../reducer/filter_reducer'

const FilterContext =  createContext();

const initialState ={
    filter_products : [],
    all_products : [],
    grid_view: true,
}

export const FilterContextProvider = ({children}) =>{

    const {products} = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState);

    // to set the grid view   
    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" });
    };

    // to set the grid view   
    const setListView = () => {
        return dispatch({ type: "SET_LIST_VIEW" });
      };


    useEffect(() =>{
        dispatch({type:"LOAD_FILTER_PRODUCTS",  payload: products });
    } ,[products]);                


 

    return <FilterContext.Provider value={{...state, setGridView, setListView}}>
    
        {children}
    </FilterContext.Provider>
}

 export const useFilterContext = ()=>{
  return useContext(FilterContext);
}

 
  