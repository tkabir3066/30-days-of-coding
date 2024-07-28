import React from "react";
import MobileList from "./MobileList";
import books from "./books.json";
function Mobile() {
  return (
    <div>
      {books.map((item, index) => (
        <MobileList key={index} item={item} />
      ))}
    </div>
  );
}

export default Mobile;
