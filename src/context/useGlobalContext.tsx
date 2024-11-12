import { createContext, useContext } from "react";
import ProductStore from "../store/product.store";

const globalStore = {
  productStore: ProductStore,
};

const GlobalContext = createContext(globalStore);

export function useGlobalContext() {
  return useContext(GlobalContext);
}

export const GloblaContextProvider = ({ children }: any) => {
  return (
    <GlobalContext.Provider value={globalStore}>
      {children}
    </GlobalContext.Provider>
  );
};
