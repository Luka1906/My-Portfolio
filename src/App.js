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

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
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
          <RouterProvider router={router} />
        </main>
      </AppWrapper>
    </AppProvider>
  );
}

export default App;
