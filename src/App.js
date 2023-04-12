import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import {useContext } from "react";
import "./App.css";
import RootLayout from "./pages/Root";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import ErrorPage from "./pages/Error";
import AppProvider from "./store/AppProvider";
import AppContext from "./store/app-context";
import AppWrapper from "./components/AppWrapper";
import WorkPage from "./pages/Work";
import Skills from "./pages/Skills";
import SkillsPage from "./pages/Skills";
import { AnimatePresence } from "framer-motion"
import { wait } from "@testing-library/user-event/dist/utils";
import { useLocation } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      {path: "work", element: <WorkPage/>},
      {path: "skills", element:<SkillsPage/> },
      { path: "contact", element: <ContactPage /> }
     
    ],
  },
]);

function App() {

  const appContext = useContext(AppContext);
  console.log(appContext.theme);

  return (
 
    <AppProvider>
      <AppWrapper>
        <main>
          <AnimatePresence mode="wait">
          <RouterProvider router={router} />
          </AnimatePresence>
        </main>
      </AppWrapper>
    </AppProvider>
  );
}

export default App;
