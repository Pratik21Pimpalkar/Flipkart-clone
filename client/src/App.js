import React from "react";
import Navbar from "./components/Navbar";
import GlobalStyles from "./GlobalStyles";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import ItemPage from "./pages/ItemPage";
import CartPage from "./pages/CartPage";
import { UserProvider } from "./Context";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/product/:id" element={<ItemPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route>404 Page not found</Route>
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
