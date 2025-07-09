import React from "react";
import Header from "./Components/Header";
import Dictionary from "./Components/Dictionary";
import { DictionaryProvider } from "./Context/DictionaryContext";
import ReactLenis from "lenis/react";

function App() {
  return (
    <DictionaryProvider>
      <ReactLenis root>
        <Header />
        <Dictionary />
      </ReactLenis>
    </DictionaryProvider>
  );
}

export default App;
