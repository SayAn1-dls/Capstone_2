
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import SellerDashboard from "@/pages/SellerDashboard";
import Cart from "@/pages/Cart";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/seller-dashboard" element={<SellerDashboard />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </main>
            <Toaster />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
