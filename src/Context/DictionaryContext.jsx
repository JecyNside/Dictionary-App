import { createContext, useContext } from "react";
import { useFetchDictionary } from "../Hooks/useFetchDictionary";

const DictionaryContext = createContext();

function DictionaryProvider({ children }) {
  const { response, loading, error, fetchData } = useFetchDictionary();

  const value = {
    response,
    loading,
    error,
    fetchData,
  };

  return (
    <DictionaryContext.Provider value={value}>
      {children}
    </DictionaryContext.Provider>
  );
}

function useDictionaryContext() {
  return useContext(DictionaryContext);
}

export { DictionaryProvider, useDictionaryContext };
