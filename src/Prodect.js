import React from "react";

export default function Prodect(props) {
 
  const{id,name,price,dprice}=props
  console.log(props,"test")
  return (
    <div>
      {/* // type 1 */}
      <h1>id : {props.id}</h1>
      <p>name : {props.name}</p>
      <p>price : {props.price}</p>
      <p>dprice : {props.dprice}</p>
      {/* type 2 */}
      <h1>id : {id}</h1>
      <p>name : {name}</p>
      <p>price : {price}</p>
      <p>dprice : {dprice}</p>

    </div>
  );
}
