// DictionaryContext.js
import { createContext, useContext } from "react";
import { useFetchDictionary } from "../Hooks/useFetchDictionary";

// 1. Creamos el contexto
const DictionaryContext = createContext();

// 2. Creamos el Provider
function DictionaryProvider({ children }) {
  const { response, loading, error, fetchData } = useFetchDictionary();

  const value = {
    response,
    loading,
    error,
    fetchData
  };

  return (
    <DictionaryContext.Provider value={value}>
      {children}
    </DictionaryContext.Provider>
  );
}

// 3. Hook para acceder al contexto
function useDictionaryContext() {
  return useContext(DictionaryContext);
}

export { DictionaryProvider, useDictionaryContext };
