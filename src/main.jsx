import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#FF00FF", // Magenta
    800: "#00FF00", // Lime Green  
    700: "#FF8C00", // Dark Orange
    600: "#9400D3", // Dark Violet
    500: "#FFFF00", // Yellow
    400: "#00FFFF", // Cyan
    300: "#FF0000", // Red
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
