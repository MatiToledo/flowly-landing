import { createContext, useContext, useEffect } from "react";

type Theme = "dark";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProviderContext = createContext<Theme>("dark");

export function ThemeProvider({ children }: ThemeProviderProps) {
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add("dark"); // Siempre aplica el modo oscuro
  }, []);

  return (
    <ThemeProviderContext.Provider value="dark">
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};