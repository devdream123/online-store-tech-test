import { ProductList } from "@/components";
import axios from "axios";

export default async function Products() {
  const response = await axios.get("https://fakestoreapi.com/products");
  const products = response.data;
  console.log("products: ", products);
  return (
    <div className="m-5">
      <h2 className="text-2xl font-bold pb-4">Fake Products</h2>
      <ProductList products={products} />
    </div>
  );
}
