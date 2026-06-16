"use client";
import { createContext, useContext } from "react";

type Theme = {
  colors: {
    primary: string;
    secondary: string;
  };
};

const defaultTheme: Theme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
  },
};

export const useTheme = () => useContext(ThemeContext);
const ThemeContext = createContext<Theme>(defaultTheme);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeContext value={defaultTheme}>{children}</ThemeContext>;
};

export default ThemeProvider;
