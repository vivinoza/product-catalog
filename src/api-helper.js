import axios from "axios";

export const fetchAllProducts = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return response.data;
};

export const fetchCategories = async () => {
  const response = await axios.get(
    `https://fakestoreapi.com/products/categories`
  );
  return response.data;
};
