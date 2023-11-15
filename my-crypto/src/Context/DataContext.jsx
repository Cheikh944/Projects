import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [myCoin, setMycoin] = useState("");
    const [currentPrice, setCurrentPrice] = useState("");
    const [trend, setTrend] = useState("")
    const [currentImage, setcurrentImage] = useState("");
    return (
      <DataContext.Provider value={{myCoin, setMycoin, currentPrice, setCurrentPrice, currentImage, setcurrentImage, trend, setTrend}}>
        {children}
      </DataContext.Provider>
    );
};

export const useData = () => {
    return useContext(DataContext);
};