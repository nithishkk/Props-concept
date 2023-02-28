import React from 'react';
import './style.css';
import Prodect from './Prodect';

export default function App() {
  const prodect = {
    id: 1,
    name: 'i phone',
    price: 120000,
    dprice: 123333,
  };
  // const prodect1={
  //   id:2,
  //   name:"sumsung",
  //   price:12,
  //   dprice:12
  // }
  return (
    <div>
      <Prodect {...prodect} />
    </div>
  );
}
