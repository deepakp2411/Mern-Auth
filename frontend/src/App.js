import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Signup />} />
          <Route path="sign-in" element={<Signin />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
