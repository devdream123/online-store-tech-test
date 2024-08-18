import { ProductList } from "@/components";
import axios from "axios";

const FAKE_STORE_API = "https://fakestoreapi.com/products";

export default async function Products() {
  try {
    const response = await axios.get(FAKE_STORE_API);
    const products = response.data;
    return (
      <div className="m-5">
        <h2 className="text-2xl font-bold pb-4">Fake Products</h2>
        <ProductList products={products} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching products");
  }
}
