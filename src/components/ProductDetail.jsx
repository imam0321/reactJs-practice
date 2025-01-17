import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

// 2nd way
const fetchProduct = async ({ queryKey }) => {
  const response = await axios.get(
    `http://localhost:8000/${queryKey[0]}/${queryKey[1]}`
  );
  return response.data;
};

export default function ProductDetail({ id }) { 
  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: fetchProduct,
  });

  const handleEdit = (id) => {
    
  }

  if (isLoading) return <div>Product details Fetching...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="w-1/5">
      <h1 className="text-3xl my-4">Product Details</h1>
      <div className="border bg-gray-100 p-4 text-md rounded flex flex-col">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="object-cover h-24 w-24 border rounded-full m-auto"
        />
        <ul className="list-disc ms-5">
          <li>{product.title}</li>
          <li>{product.description}</li>
          <li>USD {product.price}</li>
          <li>{product.rating}/5</li>
        </ul>
        <button onClick={()=> handleEdit(product.id)} className="border-2 block border-x-green-400 rounded-lg px-4 py-1 hover:bg-slate-200 my-2">Edit Product</button>
      </div>
    </div>
  );
}

// first way
// const fetchProduct = async()=> {
//   const response = await axios.get(`http://localhost:8000/products/${id}`)
//   return response.data
// }

// const {data: product, error, isLoading} = useQuery({
//   queryKey: ["products", id],
//   queryFn: fetchProduct

// })
