import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
interface Product {
  id: number;
  title: string;
  brand: string;
  price: number;
  images: string;
  description: string;
  stock: number;
}
export default function Details() {
  const params = useParams();
  const [product, setProduct] = useState<Product>();

  async function getDetailsProduct(id: string) {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  }

  useEffect(() => {
    if (params.id) {
      getDetailsProduct(params.id);
    }
  }, [params.id]);

  return (
    <div>
      <h2 className="container-details-h2">Detalhes</h2>
      <div className="container-details">
        {product ? (
          <div className="details-card">
            <h2>{product.title}</h2>

            <img
              src={product.images[0]}
              alt={product.title}
              style={{ width: 400, height: 400 }}
            />
            {product.brand ? (
              <p>{product.brand}</p>
            ) : (
              <p>{product.description}</p>
            )}
            <p>R$ {product.price}</p>
            <p className="details-card-stock">Estoque: {product.stock}</p>
          </div>
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </div>
  );
}
