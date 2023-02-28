import React from "react";
import "./style.css";
import Prodect from './Prodect'

export default function App() {
  const prodect={
    id:1,
    name:"i phone",
    price:120000,
    dprice:123333
  }
  return (
    <div>
     
      <Prodect id={prodect.id} name={prodect.name} price={prodect.price} dprice={prodect.dprice}/>
    </div>
  );
}
