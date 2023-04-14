import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import { useContext } from "react";
import "./App.css";
import RootLayout from "./pages/Root";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import ErrorPage from "./pages/Error";
import AppProvider from "./store/AppProvider";
import AppWrapper from "./components/AppWrapper";
import WorkPage from "./pages/Work";
import SkillsPage from "./pages/Skills";


const router = createBrowserRouter([
  {
    path: "/",
    element:  <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />},
      { path: "about", element: <AboutPage /> },
      { path: "work", element: <WorkPage /> },
      { path: "skills", element: <SkillsPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);

function App() {


  return (
    <AppProvider>
      <AppWrapper>
        <main>
            <RouterProvider router={router} />
        </main>
      </AppWrapper>
    </AppProvider>
  );
}

export default App;
