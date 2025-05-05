
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingBag, Store } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">
          Welcome to Local Marketplace
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Connecting local sellers with buyers. Find unique products from your community.
        </p>

        <div className="flex gap-4 justify-center">
          <Link to="/shop">
            <Button size="lg" className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              Start Shopping
            </Button>
          </Link>
          <Link to="/register">
            <Button size="lg" variant="outline" className="flex items-center gap-2">
              <Store className="w-5 h-5" />
              Become a Seller
            </Button>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-lg bg-white shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">Local Products</h3>
            <p className="text-gray-600">Discover unique items from your community</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-lg bg-white shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">Verified Sellers</h3>
            <p className="text-gray-600">Trust in our verified local sellers</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-lg bg-white shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
            <p className="text-gray-600">Safe and secure transaction process</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
