"use client";

import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <GlobalContext.Provider value={{ isMobileMenuOpen, setIsMobileMenuOpen }}>
      {children}
    </GlobalContext.Provider>
  );
};
