import { useState } from "react";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import ProductDetail from "./components/ProductDetail";

function App() {
  const [productId, setProductId] = useState(1);

  return (
    <div>
      <h1 className="text-xl text-center m-1">ReactJs Practice Get, ADD, Edit, Delete with React Query</h1>
      <div className="flex">
        <AddProduct/>
        <ProductList setProductId={setProductId}/>
        <ProductDetail id={productId}/>
      </div>
    </div>
  );
}

export default App;
