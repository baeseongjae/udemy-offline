import React from "react";

const fruits = [
  { name: "사과", themeColor: "red" },
  { name: "바나나", themeColor: "yellow" },
  { name: "딸기", themeColor: "red" },
  { name: "바나나", themeColor: "yellow" },
];

function Fruits() {
  return (
    <div>
      {fruits.map((fruit) => (
        <li key={fruits.name} themeColor={fruit.themeColor}>
          {fruit.name}
        </li>
      ))}
    </div>
  );
}

// const Fruit = styled.li`
//   background
// `

export default Fruits;
