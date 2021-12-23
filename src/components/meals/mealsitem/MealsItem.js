import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import "./MealsItem.css";
import CartContext from "../../../store/Cart-Context";

const MealsItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price}`;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      amount: amount,
      price: props.price,
    });
  };
  return (
    // <li className="meal">
    //   <div classname="left">
    //     <h1>{props.title}</h1>

    //     <div className="description">{props.description}</div>
    //     <div className="price">{price}</div>
    //   </div>
    //   <div className="button">
    //     <MealItemForm  />
    //   </div>
    // </li>

    //
    <div>
      <div className="card">
        <img
          src="https://sonapharmacy.com/app/uploads/2017/03/shutterstock_536412397-1024x683.jpg"
          alt="Random photo"
          className="card-img"
        />
        <div className="card-body">
          <h1>{props.title}</h1>

          <p>{props.description}</p>
          <h2>{price}</h2>
          <div className="button">
            <MealItemForm onAddToCart={addToCartHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealsItem;
