import React, { useState } from "react";
import { Context } from "./context";

const ContextProvider = ({ children }) => {
  // Defina o estado compartilhado
  const [cards, setCards] = useState("Valor inicial");

  // Crie um objeto que contém os valores que serão compartilhados
  const contextValue = {
    cards,
    setCards,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
