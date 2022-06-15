import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import styled, { ThemeProvider } from "styled-components";
import App from "./App";
import { darkTheme, lightTheme } from "./theme";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const ThemeButton = styled.button`
  font-size: 30px;
  background-color: transparent;
  border: none;
  margin: 30px;
`;

const DarkThemeButton = () => {
  const [darktheme, setTheme] = useState(true);
  return (
    <>
      <ThemeButton
        onClick={() => {
          setTheme(!darktheme);
        }}
      >
        {darktheme ? "🌞" : "🌝"}
      </ThemeButton>
      <ThemeProvider theme={darktheme ? darkTheme : lightTheme}>
        <App theme={darktheme} />
      </ThemeProvider>
    </>
  );
};
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DarkThemeButton></DarkThemeButton>
    </QueryClientProvider>
  </React.StrictMode>
);
