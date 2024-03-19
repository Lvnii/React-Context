import { createContext, useContext } from "react";
import { useState } from "react";

const ProductContext = createContext({
    data: [],
    userDetails: {},
    addNewData: () => {},
});

export const ProductContextProvider = (props) => {
    const [data, setData] = useState([1, 2, 3, 4, 5, 6])

    const addNewData = () => {
        setData((prevState) => {
            return [...prevState, prevState[prevState.length - 1] + 1]
        })
    };

    const userDetails = {
        name: 'levan',
        surname: 'esitashvili',
        age: '20'
    };

    return (
        <ProductContext.Provider
            value={{
                data: data,
                userDetails: userDetails,
                addNewData: addNewData,
            }}
        >
            {props.children}
        </ProductContext.Provider>
    )
};

const useProducts = () =>  useContext(ProductContext);

export default useProducts;