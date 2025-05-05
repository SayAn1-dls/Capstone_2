
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ShoppingBag, User, LogOut, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 glass-effect border-b"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            Local Marketplace
          </Link>

          <div className="flex items-center gap-4">
            <Link to="/shop">
              <Button variant="ghost" className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                Shop
              </Button>
            </Link>

            <Link to="/cart">
              <Button variant="outline" className="flex items-center gap-2 relative">
                <ShoppingCart className="w-5 h-5" />
                Cart
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartItemsCount}
                  </span>
                )}
              </Button>
            </Link>

            {user ? (
              <>
                {user.role === "seller" && (
                  <Link to="/seller-dashboard">
                    <Button variant="outline">Dashboard</Button>
                  </Link>
                )}
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    logout();
                    navigate("/");
                  }}
                  className="flex items-center gap-2"
                >
                  <LogOut className="w-5 h-5" />
                  Logout
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button variant="default" className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
