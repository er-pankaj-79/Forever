
import { createContext } from 'react';
import {products} from '../assets/assets'

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext(); 

// ShopContextProvider used to provide the context for the whole app
// meaning of context provider is to provide the data to the whole app

const ShopContextProvider = (props) =>{

    const currency = "₹"; // Indian Rupee
    const delivery_fee = 10;

    const value = {
        products , currency, delivery_fee
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;