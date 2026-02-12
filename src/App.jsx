import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
import TrendingProducts from "./components/sections/TrendingProduct";
import FeaturesBar from "./components/sections/FeaturesBar";
import BlogSection from "./components/sections/BlogSection";
import BestSelleProduct from "./components/sections/BestSelleProduct";
import "./style.css";
import HeroBanner from "./components/sections/HeroBanner";
import BrandsSection from "./components/sections/BrandsSection";
import NewArrivalSection from "./components/sections/NewArrivalSection";
import PromoBanner from "./components/sections/PromoBanner";
import Footer from "./components/layouts/Footer";
import Login from "./pages/auth/login";
import { createBrowserRouter, Router, Routes } from "react-router-dom";
import { Outlet, RouterProvider } from "react-router";

import Home from "./pages/home";
import About from "./pages/about";
import Features from "./pages/features";
import Product from "./pages/product";
import Blog from "./pages/blog";
import Footer from "./components/layouts/Footer";
import "./style.css";
function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/product" element={<Product />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
