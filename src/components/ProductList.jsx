import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

export default function ProductList() {
  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:8000/products");
    return response.data;
  };

  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <div>Products data Fetching...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl my-2">Products List</h2>
        <ul className="flex flex-wrap justify-center items-center">
          {products &&
            products.map((product) => (
              <li
                key={product.id}
                className="flex flex-col items-center m-2 border rounded-sm"
              >
                <img
                  className="object-cover h-64 w-96 rounded-sm"
                  src={product.thumbnail}
                  alt={product.title}
                />
                <p className="text-xl my-3">{product.title}</p>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
