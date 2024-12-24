/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";
import { ConfigProvider, theme, Space } from "antd";

export const ThemeContext = createContext({});
const { defaultAlgorithm, darkAlgorithm } = theme;
const ThemeProvider = ({ children, ...props }) => {
  const [isDark, setIsDark] = useState(false);

  const onThemeChange = () => {
    setIsDark(!isDark);
    const htmDoc = document.querySelector("html").classList;
    htmDoc.toggle("dark");
  };

  return (
    <React.Fragment {...props}>
      <ThemeContext.Provider value={{ isDark, onThemeChange }}>
        <ConfigProvider
          theme={{ algorithm: isDark ? darkAlgorithm : defaultAlgorithm }}
        >
          {children}
        </ConfigProvider>
      </ThemeContext.Provider>
    </React.Fragment>
  );
};

export default ThemeProvider;
