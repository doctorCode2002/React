import React from "react";

// const Card2 = (props) => {
//   const title = "hello";
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h2>{props.title.name}</h2>
//       <p>{props.description}</p>
//     </div>
//   );
// };

const Card2 = ({title = "hello"}) => {
  return <h1>{title}</h1>;
};

export default Card2;
