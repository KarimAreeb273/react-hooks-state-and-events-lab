import React, { useState } from "react";

function Item({ name, category }) {

  const [toggleCart, setToggleCart] = useState(false);

  function toggleClass () {
    setToggleCart(!toggleCart);
  }

  return (
    <li className={!toggleClass ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">{!toggleClass ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
