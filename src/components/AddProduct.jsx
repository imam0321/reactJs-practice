import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function AddProduct({ productEdit }) {
  const queryClient = useQueryClient();
  const [state, setState] = useState({
    title: "",
    description: "",
    price: 0,
    rating: 5,
    thumbnail: "",
  });

  useEffect(() => {
    if (productEdit) {
      setState({
        title: productEdit.title || "",
        description: productEdit.description || "",
        price: productEdit.price || "",
        rating: productEdit.rating || "",
        thumbnail: productEdit.thumbnail || "",
      });
    }
  }, [productEdit]);

  const mutation = useMutation({
    mutationFn: (newProduct) => {
      if (productEdit) {
        // Update the product (PATCH request)
        axios.patch(
          `http://localhost:8000/products/${productEdit.id}`,
          newProduct
        );
      } else {
        // Create new product (POST request)
        axios.post("http://localhost:8000/products", newProduct);
      }
    },
    onSuccess: () => {
      // If an old value remains stackTraceLimit, replace it with the new value
      queryClient.invalidateQueries(["products"]);
    },
  });

  const submitData = (e) => {
    e.preventDefault();
    const newData = { ...state, id: crypto.randomUUID().toString() };
    mutation.mutate(newData);
    setState({
      title: "",
      description: "",
      price: 0,
      rating: 5,
      thumbnail: "",
    });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "number" ? e.target.valueAsNumber : e.target.value;

    setState({
      ...state,
      [name]: value,
    });
  };

  if (mutation.isLoading) return <span>Submitting...</span>;
  if (mutation.error) return <span>Error: {mutation.error.message}</span>;

  return (
    <div className="m-2 p-2 bg-gray-100 w-1/5 h-1/2">
      <h2 className="text-2xl font-bold my-1">Add a Product</h2>
      {mutation.isSuccess && <p>Product added successful</p>}
      <form className="flex flex-col" onSubmit={submitData}>
        <input
          type="text"
          value={state.title}
          name="title"
          onChange={handleChange}
          placeholder="Enter a product title"
          className="my-2 border p-2 rounded"
        />
        <textarea
          value={state.description}
          name="description"
          onChange={handleChange}
          placeholder="Enter a product description"
          className="my-2 border p-2 rounded"
        />
        <input
          type="number"
          value={state.price}
          name="price"
          onChange={handleChange}
          placeholder="Enter a product price"
          className="my-2 border p-2 rounded"
        />
        <input
          type="text"
          value={state.thumbnail}
          name="thumbnail"
          onChange={handleChange}
          placeholder="Enter a product thumbnail"
          className="my-2 border p-2 rounded"
        />
        <button
          type="submit"
          className="border-2 block border-x-green-400 rounded-lg px-4 py-1"
        >
          {productEdit ? "Update Product" : "Add Product"}
        </button>
      </form>
    </div>
  );
}
