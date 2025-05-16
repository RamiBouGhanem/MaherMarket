// src/pages/Products.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    "produce",
    "bakery",
    "dairy",
    "snacks",
    "beverages",
    "frozen",
    "household",
    "personal care",
  ];

  const products = [
    {
      id: 1,
      name: "Organic Apples",
      price: 2.99,
      category: "produce",
      description: "Fresh crisp apples from local orchards",
    },
    {
      id: 2,
      name: "Bananas",
      price: 0.49,
      category: "produce",
      description: "Premium ripe bananas per piece",
    },
    {
      id: 3,
      name: "Carrots 1lb",
      price: 1.29,
      category: "produce",
      description: "Fresh whole carrots",
    },
    {
      id: 4,
      name: "Romaine Lettuce",
      price: 2.49,
      category: "produce",
      description: "Pre-washed salad greens",
    },
    {
      id: 5,
      name: "Whole Wheat Bread",
      price: 3.99,
      category: "bakery",
      description: "Freshly baked daily",
    },
    {
      id: 6,
      name: "Bagels 6-pack",
      price: 4.49,
      category: "bakery",
      description: "Plain, sesame, or everything",
    },
    {
      id: 7,
      name: "Croissants",
      price: 2.99,
      category: "bakery",
      description: "Buttery French-style pastries",
    },
    {
      id: 8,
      name: "Blueberry Muffins",
      price: 5.99,
      category: "bakery",
      description: "Jumbo muffins with fresh berries",
    },
    {
      id: 9,
      name: "Whole Milk",
      price: 3.49,
      category: "dairy",
      description: "1 gallon, hormone-free",
    },
    {
      id: 10,
      name: "Cheddar Cheese",
      price: 4.99,
      category: "dairy",
      description: "Sharp cheddar block, 8oz",
    },
    {
      id: 11,
      name: "Greek Yogurt",
      price: 1.29,
      category: "dairy",
      description: "Plain non-fat, 5.3oz",
    },
    {
      id: 12,
      name: "Butter",
      price: 4.29,
      category: "dairy",
      description: "Salted sweet cream, 1lb",
    },
    {
      id: 13,
      name: "Potato Chips",
      price: 3.99,
      category: "snacks",
      description: "Classic salted, family size",
    },
    {
      id: 14,
      name: "Trail Mix",
      price: 5.49,
      category: "snacks",
      description: "Nuts, seeds, and dried fruit",
    },
    {
      id: 15,
      name: "Granola Bars",
      price: 4.99,
      category: "snacks",
      description: "12-pack, assorted flavors",
    },
    {
      id: 16,
      name: "Dark Chocolate",
      price: 2.99,
      category: "snacks",
      description: "70% cocoa, 3.5oz bar",
    },
    {
      id: 17,
      name: "Orange Juice",
      price: 4.99,
      category: "beverages",
      description: "100% pure squeezed, 59oz",
    },
    {
      id: 18,
      name: "Sparkling Water",
      price: 5.99,
      category: "beverages",
      description: "12-pack assorted flavors",
    },
    {
      id: 19,
      name: "Coffee Beans",
      price: 8.99,
      category: "beverages",
      description: "Medium roast, 12oz",
    },
    {
      id: 20,
      name: "Green Tea",
      price: 3.49,
      category: "beverages",
      description: "100 tea bags, antioxidant-rich",
    },
    {
      id: 21,
      name: "Mixed Vegetables",
      price: 2.99,
      category: "frozen",
      description: "16oz frozen steamable bag",
    },
    {
      id: 22,
      name: "Ice Cream",
      price: 5.99,
      category: "frozen",
      description: "Vanilla, 1.5qt",
    },
    {
      id: 23,
      name: "Frozen Pizza",
      price: 6.49,
      category: "frozen",
      description: "Pepperoni, 12-inch",
    },
    {
      id: 24,
      name: "Frozen Berries",
      price: 4.99,
      category: "frozen",
      description: "Mixed berries, 2lb bag",
    },
    {
      id: 25,
      name: "Paper Towels",
      price: 8.99,
      category: "household",
      description: "2-ply, 6 rolls",
    },
    {
      id: 26,
      name: "Laundry Detergent",
      price: 12.99,
      category: "household",
      description: "100oz, HE compatible",
    },
    {
      id: 27,
      name: "Trash Bags",
      price: 6.49,
      category: "household",
      description: "13-gallon, 40-count",
    },
    {
      id: 28,
      name: "Dish Soap",
      price: 2.99,
      category: "household",
      description: "24oz lemon-scented",
    },
    {
      id: 29,
      name: "Shampoo",
      price: 5.99,
      category: "personal care",
      description: "Moisturizing formula, 16oz",
    },
    {
      id: 30,
      name: "Bar Soap",
      price: 1.99,
      category: "personal care",
      description: "6-pack, assorted scents",
    },
    {
      id: 31,
      name: "Toothpaste",
      price: 3.49,
      category: "personal care",
      description: "Fluoride, whitening, 6oz",
    },
    {
      id: 32,
      name: "Deodorant",
      price: 4.29,
      category: "personal care",
      description: "48-hour protection, 3oz",
    },
    {
      id: 33,
      name: "Organic Eggs",
      price: 4.99,
      category: "dairy",
      description: "Large, free-range, 12-count",
    },
    {
      id: 34,
      name: "Whole Chicken",
      price: 8.99,
      category: "frozen",
      description: "3-4lb, air-chilled",
    },
    {
      id: 35,
      name: "Basmati Rice",
      price: 6.99,
      category: "snacks",
      description: "5lb bag, premium quality",
    },
    {
      id: 36,
      name: "Olive Oil",
      price: 9.99,
      category: "household",
      description: "Extra virgin, 17oz",
    },
    {
      id: 37,
      name: "Honey",
      price: 7.49,
      category: "snacks",
      description: "Pure raw honey, 16oz",
    },
    {
      id: 38,
      name: "Almond Milk",
      price: 3.99,
      category: "dairy",
      description: "Unsweetened, 64oz",
    },
    {
      id: 39,
      name: "Canned Soup",
      price: 2.49,
      category: "snacks",
      description: "Chicken noodle, 10.5oz",
    },
    {
      id: 40,
      name: "Toilet Paper",
      price: 14.99,
      category: "household",
      description: "Mega roll 12-pack",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-stone-50">
      {/* Navbar */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-emerald-200 p-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-emerald-600 p-2 rounded-xl transition-colors duration-300 group-hover:bg-emerald-700">
              🛒
            </div>
            <h1 className="text-2xl font-semibold text-gray-900 font-serif tracking-wide">
              <span className="text-emerald-600">Maher’s</span> Market
            </h1>
          </Link>


          {/* Links */}
          <div
            className=" md:flex items-center space-x-6 text-sm font-medium text-emerald-900"
          >
            <Link
              to="/"
              className="hover:text-emerald-600 transition-colors text-xl"
            >
              <FiHome />
            </Link>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        {/* Header and Search */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-emerald-900 mb-6">
            Fresh Finds Daily
          </h2>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-96 p-3 border border-emerald-200 rounded-lg shadow focus:ring-2 focus:ring-emerald-300 focus:outline-none"
          />
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 justify-center md:justify-start lg:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`capitalize px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition duration-200 ${
                selectedCategory === cat
                  ? "bg-emerald-600 text-white shadow"
                  : "bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow p-4 flex flex-col justify-between hover:shadow-lg transition"
              >
                <div>
                  <h3 className="text-lg font-semibold text-emerald-800">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {product.description}
                  </p>
                </div>
                <div className="mt-4 text-right">
                  <span className="text-emerald-700 font-bold text-lg">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No products found.
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Products;
