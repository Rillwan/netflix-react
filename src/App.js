import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";

const router = createBrowserRouter([
  {
    path: "netflix-react",
    element: <Login />,
  },
  {
    path: "netflix-react/signup",
    element: <SignUp />,
  },
  {
    path: "netflix-react/home",
    element: <Home />,
  },
  {
    path: "*",
    element: <Login />,
  },
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
