"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { Locale, DICTIONARY } from "@/data/dictionary";

type Theme = "light" | "dark";

interface AppContextType {
  theme: Theme;
  locale: Locale;
  setTheme: (theme: Theme) => void;
  setLocale: (locale: Locale) => void;
  t: any;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    // Initial sync with system/storage
    const savedTheme = localStorage.getItem("theme") as Theme;
    const savedLocale = localStorage.getItem("locale") as Locale;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme("light");
    }

    // Validate saved locale against DICTIONARY keys
    if (savedLocale && DICTIONARY[savedLocale as Locale]) {
      setLocaleState(savedLocale);
    } else {
      setLocaleState("en");
      localStorage.setItem("locale", "en"); // Reset invalid legacy strings
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const t = DICTIONARY[locale];

  return (
    <AppContext.Provider value={{ theme, locale, setTheme, setLocale, t }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
};
