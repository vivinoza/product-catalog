import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import ProductList from "../../components/ProductList/ProductList";
import SortFilter from "../../components/SortFilter/SortFilter";
import { fetchAllProducts, fetchCategories } from "../../api-helper";

const HomePage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchAllProducts();
      setProducts(data);
    };

    const loadCategories = async () => {
      const categoryData = await fetchCategories();
      setCategories(categoryData);
    };

    loadProducts();
    loadCategories();
  }, []);

  const filteredProducts = products
    .filter(
      (product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((product) =>
      selectedCategory ? product.category === selectedCategory : true
    )
    .sort((a, b) => {
      if (sortOption === "price-asc") return a.price - b.price;
      if (sortOption === "price-desc") return b.price - a.price;
      if (sortOption === "name-asc") return a.title.localeCompare(b.title);
      if (sortOption === "name-desc") return b.title.localeCompare(a.title);
      return 0;
    });

  return (
    <div className="home-container">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SortFilter
        sortOption={sortOption}
        setSortOption={setSortOption}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductList products={filteredProducts} addToCart={addToCart} />
    </div>
  );
};

export default HomePage;
