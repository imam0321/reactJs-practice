import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import ProductDetail from "./ProductDetail";

// 2nd way
const fetchProducts = async ({ queryKey }) => {
  const response = await axios.get(`http://localhost:8000/${queryKey[0]}`);
  return response.data;
};

export default function ProductList() {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    //NOTES: retry: false, // when retry is true, the data will fetched 3 times. when it is false, the data will be fetched only once.
    //NOTE: refetchInterval: 1000, // data will be fetched every 1 second
  });

  const [productId, setProductId] = useState(1);

  const handleClick = (id) => {
    const product = products.filter((product) => product.id === id);
    setProductId(product[0].id);
  };

  if (isLoading) return <div>Products data Fetching...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="flex gap-4">
      <div className="flex flex-col justify-center items-center w-9/12">
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
                  src={""}
                  alt={product.title}
                />
                <div className="flex gap-x-20 my-3">
                  <p className="text-xl">{product.title}</p>
                  <button
                    onClick={() => handleClick(product.id)}
                    className="border-2 block border-x-green-400 rounded-lg px-4 py-1"
                  >
                    show Details
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <ProductDetail id={productId} />
    </div>
  );
}

// first way
// const fetchProducts = async () => {
//   const response = await axios.get("http://localhost:8000/products");
//   return response.data;
// };

// const {
//   data: products,
//   error,
//   isLoading,
// } = useQuery({
//   queryKey: ["products"],
//   queryFn: fetchProducts,
// });
