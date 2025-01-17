import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

// 2nd way
const fetchProducts = async ({ queryKey }) => {
  const response = await axios.get(`http://localhost:8000/${queryKey[0]}`);
  return response.data;
};

export default function ProductList({ setProductId }) {
  const queryClient = useQueryClient();
  const {
    data: products,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    //NOTES: retry: false, // when retry is true, the data will fetched 3 times. when it is false, the data will be fetched only once.
    //NOTE: refetchInterval: 1000, // data will be fetched every 1 second
  });

  const handleClick = (id) => {
    const product = products.find((product) => product.id === id);
    setProductId(product.id);
  };

  // delete Functionality
  const deleteMutation = useMutation({
    mutationFn: (id) => {
      axios.delete(`http://localhost:8000/products/${id}`);
    },
    onSuccess: (_, id) => {
      queryClient.setQueryData(["products"], (oldProducts) =>
        oldProducts ? oldProducts.filter((product) => product.id !== id) : []
      );
    },
    onError: (error) => {
      console.log(`Error deleting product: ${error.message}`);
    },
  });

  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };

  if (isLoading) return <div>Products data Fetching...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <div className="flex flex-col justify-center items-center p-2 w-3/5">
        <h2 className="text-3xl my-2">Products List</h2>
        <ul className="flex flex-wrap justify-center items-center ">
          {products &&
            products.map((product) => (
              <li
                key={product.id}
                className="flex flex-col items-center my-2 border rounded-sm w-1/2 relative"
              >
                <img
                  className="object-cover h-48 w-48 rounded-sm"
                  src={product.thumbnail}
                  alt={product.title}
                />
                <div className="flex gap-x-20 m-2">
                  <p className="text-xl text-wrap">{product.title}</p>
                  <button
                    onClick={() => handleClick(product.id)}
                    className="border-2 block border-x-green-400 rounded-lg px-4 py-1 hover:bg-slate-200 text-nowrap"
                  >
                    show Details
                  </button>
                </div>
                <span
                  onClick={() => handleDelete(product.id)}
                  className="absolute text-3xl text-red-600 font-bold top-2 right-4 border py-1 px-2 rounded-sm hover:bg-slate-600"
                >
                  X
                </span>
              </li>
            ))}
        </ul>
      </div>
    </>
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
