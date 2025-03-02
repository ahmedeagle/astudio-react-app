import { createContext, useContext, useState } from "react";
  
  const AppContext = createContext();
  
  export const AppProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({});
  
    return (
      <AppContext.Provider value={{ users, setUsers, products, setProducts, filters, setFilters }}>
        {children}
      </AppContext.Provider>
    );
  };
  
  export const useAppContext = () => useContext(AppContext);
  