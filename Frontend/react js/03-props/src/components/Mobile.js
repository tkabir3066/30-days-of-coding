import React from "react";
import MobileList from "./MobileList";

function Mobile() {
  const book1 = {
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/h/t/-original-imah2582fsyrjnue.jpeg?q=70",
    title: "Redmi Note 13",
    price: 100,
  };
  const book2 = {
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/i/w/-original-imagzk4mfg6zf2fv.jpeg?q=70",
    title: "Realme 12 5G",
    price: 150,
  };
  return (
    <div>
      <MobileList image={book1.image} title={book1.title} price={book1.price} />
      <MobileList image={book2.image} title={book2.title} price={book2.price} />
    </div>
  );
}

export default Mobile;
