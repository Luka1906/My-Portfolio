import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import { createContext, useState } from "react";
import "./App.css";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> }
    
    ],
  }
]);

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      <div className="app" id={theme}>
        <RouterProvider router={router} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
