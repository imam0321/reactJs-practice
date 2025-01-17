import { useState } from "react";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import ProductDetail from "./components/ProductDetail";

function App() {
  const [productId, setProductId] = useState(1);
  const [productEdit, setProductEdit] = useState(null);

  const handleProductEdit = (product) => {
    setProductEdit(product);
  };

  return (
    <div className="max-h-screen">
      <h1 className="text-xl text-center font-semibold m-1">
        ReactJs Practice Get, ADD, Edit, Delete with React Query
      </h1>
      <div className="flex">
        <AddProduct productEdit={productEdit} />
        <ProductList setProductId={setProductId} />
        <ProductDetail id={productId} onEdit={handleProductEdit} />
      </div>
    </div>
  );
}

export default App;
