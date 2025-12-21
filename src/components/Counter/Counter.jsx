import { useState } from "react";

const Counter = ({ steps = 1 }) => {
  const [saja, setSaja] = useState(0);
  const [saja2, setSaja2] = useState(0);
  // [initial value, function to update value] = useState(initial value)
  // the best practice for naming the function is to use the set word and the name of the variable

  return (
    <div>
      <h1>Counter 1</h1>
      <p>{saja}</p>
      <button onClick={() => setSaja((prev) => prev + steps)}>+</button>
      <button onClick={() => setSaja((prev) => prev - steps)}>-</button>
      <br />
      <h1>Counter 2</h1>
      <p>{saja2}</p>
      <button onClick={() => setSaja2((prev) => prev + steps)}>+</button>
      <button onClick={() => setSaja2((prev) => (prev > 0 ? prev - steps : 0))}>
        -
      </button>
      <br />
      <h3>Total: {saja + saja2}</h3>
    </div>
  );
};

export default Counter;

// import React, { useState } from "react";

// const Counter = () => {
//   /* ===============================
//      ❌ OLD JS WAY (INTENTIONALLY WRONG)
//      =============================== */

//   // This runs BEFORE JSX is rendered
//   const num = document.getElementById("num");

//   // num will be null on first render
//   console.log("JS way:", num);

//   /* ===============================
//      ✅ REACT WAY (CORRECT)
//      =============================== */

//   const [value, setValue] = useState(0);

//   return (
//     <div>
//       <h1>Counter</h1>

//       {/* ---------- REACT WAY ---------- */}
//       <h2>React way (works)</h2>
//       <p>{value}</p>
//       <button onClick={() => setValue((prev) => prev + 1)}>Increment</button>
//       <button onClick={() => setValue((prev) => prev - 1)}>Decrement</button>

//       <hr />

//       {/* ---------- JS WAY ---------- */}
//       <h2>Old JS way (does NOT work in React)</h2>

//       <p id="num">0</p>

//       <button
//         onClick={() => {
//           if (num) {
//             num.textContent = Number(num.textContent) + 1;
//           }
//         }}
//       >
//         Increment
//       </button>

//       <button
//         onClick={() => {
//           if (num) {
//             num.textContent = Number(num.textContent) - 1;
//           }
//         }}
//       >
//         Decrement
//       </button>
//     </div>
//   );
// };

// export default Counter;
