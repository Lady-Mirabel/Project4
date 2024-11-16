import high from "../assets/electric three.jpg";
import station from "../assets/station three.jpg";
import play from "../assets/station.jpg";
import black from "../assets/electric two.jpg";
import cook from "../assets/electric one.jpg";
import wash from "../assets/washing.jpg";
import snap from "../assets/Tv5.jpg";
import pink from "../assets/wash.jpg";
import logo from "../assets/Television.webp";
import { useState } from "react";
function Products() {
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState({});
  const products = [
    {
      id: 1,
      img: station,
      price: "$100",
      description: "Play Station3",
    },
    {
      id: 2,
      img: play,
      price: "$150",
      description: "Play Station5",
    },
    {
      id: 3,
      img: black,
      price: "$260",
      description: "Two burner electric cooker",
    },
    {
      id: 4,
      img: cook,
      price: "$150",
      description: "One burner electric cooker",
    },
    {
      id: 5,
      img: wash,
      price: "$170",
      description: "Heavy duty washing machine",
    },
    {
      id: 6,
      img: snap,
      price: "$230",
      description: "5 inches full screen LED TV",
    },
    {
      id: 7,
      img: pink,
      price: "$200",
      description: "Heavy duty washing machine",
    },
    {
      id: 8,
      img: logo,
      price: "$250",
      description: "4 inches full screen LED TV",
    },
  ];
  console.log(selected);

  return (
    <div className="flex flex-col text-black bg-white">
      <div className="flex-1 text-2xl flex">
        <div className="flex-1"></div>
        <div className="flex-1 flex justify-center items-center">
          <p>
            <b>KING'S ELECTRONICS</b>
          </p>
        </div>
        <div className="flex-1 flex justify-end items-center">
          <button className="icon-basket text-5xl relative">
            <span className="bg-blue-500 text-white text-xs flex justify-center items-center absolute h-6 w-6 rounded-full -left-1 -top-1">
              {count}
            </span>
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-wrap w-full">
        {products.map((item) => {
          return (
            <div
              className="flex-1 flex flex-col justify-center items-center"
              key={item.id}
            >
              <img src={item.img} alt="wash" className="h-52" />
              <p>{item.description}</p>
              <p>
                <b>{item.price}</b>
              </p>
              <button
                onClick={() => {
                  setCount(count + 1);
                  setSelected((prev) => {
                    return { ...prev, [item.id]: "selected" };
                  });
                }}
                className="rounded-md bg-slate-700 text-white w-56 h-10"
              >
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Products;
