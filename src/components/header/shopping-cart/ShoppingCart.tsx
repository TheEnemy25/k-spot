import { FaShoppingCart } from "react-icons/fa";
import styles from "./ShoppingCart.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const [itemCount, setItemCount] = useState(0);

  const addToCart = () => {
    setItemCount(itemCount + 1);
  };

  return (
    <div className={styles.shoppingCart}>
        <FaShoppingCart id={styles.shoppingCartIcon} />
        <span className={styles.itemCount}>{itemCount}</span>
    </div>
  );
};

export default ShoppingCart;
