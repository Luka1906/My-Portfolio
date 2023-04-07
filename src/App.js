import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import { createContext, useState } from "react";
import "./App.css";
import RootLayout from "./pages/Root";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index:true, element: <HomePage /> },
      { path: "about", element: <AboutPage/>},
      {path:"contact", element: <ContactPage/>}
    
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
        <main>
        <RouterProvider router={router} />
        </main>   
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
