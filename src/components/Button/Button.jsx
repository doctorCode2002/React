import React from "react";
import "./Button.css";

const Button = () => {
  //   const arr = ["red", "green", "blue"];

  //   const res = arr.map((color) => {
  //     if (color == "red") return color;
  //   });

  //   return <button className="">{res}</button>;

  //   const res = "success";
  //   const con = 1 == 2;
  //   return <button className="">{con && res}</button>;

  const res = 3;
  return <button className="">{res ? "true" : "false"}</button>; // conditional rendering
};

export default Button;
