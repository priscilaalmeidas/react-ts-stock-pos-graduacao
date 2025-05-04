import "./style.css";
import { Link } from "react-router-dom";
interface ProductsProps {
  readonly id: number;
  readonly title: string;
  readonly brand: string;
  readonly price: number;
  readonly thumbnail: string;
}
export default function Products(props: ProductsProps) {
  return (
    <div className="container-product">
      <Link to={`/details/${props.id}`}>
        <img src={props.thumbnail} alt={props.title} />
        <h4>{props.title}</h4>
        <p>{props.brand}</p>
        <p>R$ {props.price}</p>
      </Link>
    </div>
  );
}
