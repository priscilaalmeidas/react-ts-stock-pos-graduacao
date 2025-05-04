import Products from "../products";
import axios from "axios";
import "./style.css";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  brand: string;
  price: number;
  images: string;
  thumbnail: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  async function getProducts(): Promise<void> {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      console.log(response.data.products);
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container-home">
      <h3>Produtos</h3>
      <div className="container-card">
        {products.map((product) => (
          <Products
            key={product.id}
            id={product.id}
            title={product.title}
            brand={product.brand}
            thumbnail={product.thumbnail}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
