// import paint from "../assets/cooker.jpg";
// import station from "../assets/station three.jpg";
// import play from "../assets/station.jpg";
// import black from "../assets/electric two.jpg";
// import cook from "../assets/electric one.jpg";
// import wash from "../assets/washing.jpg";
// import snap from "../assets/Tv5.jpg";
// import pink from "../assets/wash.jpg";
// import logo from "../assets/Television.webp";
// import { useState } from "react";
// function Products() {
//   const [count, setCount] = useState(0);
//   const [selected, setSelected] = useState([]);
//   const [open, setOpen] = useState(false);
//   const products = [
//     {
//       id: 1,
//       img: station,
//       price: "$100",
//       description: "Play Station3",
//     },
//     {
//       id: 2,
//       img: play,
//       price: "$150",
//       description: "Play Station5",
//     },
//     {
//       id: 3,
//       img: black,
//       price: "$260",
//       description: "Two burner electric cooker",
//     },
//     {
//       id: 4,
//       img: cook,
//       price: "$150",
//       description: "One burner electric cooker",
//     },
//     {
//       id: 5,
//       img: wash,
//       price: "$170",
//       description: "Heavy duty washing machine",
//     },
//     {
//       id: 6,
//       img: snap,
//       price: "$250",
//       description: "5 inches full screen LED TV",
//     },
//     {
//       id: 7,
//       img: pink,
//       price: "$200",
//       description: "Heavy duty washing machine",
//     },
//     {
//       id: 8,
//       img: logo,
//       price: "$230",
//       description: "4 inches full screen LED TV",
//     },
//     {
//       id: 9,
//       img: paint,
//       price: "$100",
//       description: "2 Burner gas cooker",
//     },
//   ];

//   return (
//     <div className="flex flex-col text-black bg-white">
//       <div className="flex-1 text-2xl flex">
//         <div className="flex-1"></div>
//         <div className="flex-1 flex justify-center items-center text-red-800">
//           <p>
//             <b>KING'S ELECTRONICS</b>
//           </p>
//         </div>
//         <div className="flex-1 flex justify-end items-center">
//           <button
//             className="icon-basket text-5xl relative"
//             onClick={() => setOpen(!open)}
//           >
//             <span className="bg-blue-500 text-white text-xs flex justify-center items-center absolute h-6 w-6 rounded-full -left-1 -top-1">
//               {count}
//             </span>
//           </button>
//         </div>
//       </div>
//       <div className="flex-1 flex flex-wrap w-full">
//         {!open
//           ? products.map((item) => {
//               return (
//                 <div
//                   className="flex-1 flex flex-col justify-center items-center"
//                   key={item.id}
//                 >
//                   <img src={item.img} alt="wash" className="h-52 flex" />
//                   <p>{item.description}</p>
//                   <p>
//                     <b>{item.price}</b>
//                   </p>
//                   <button
//                     onClick={() => {
//                       setCount(count + 1);
//                       setSelected((prev) => {
//                         return [...prev, item];
//                       });
//                     }}
//                     className="rounded-md bg-slate-700 text-white w-56 h-10"
//                   >
//                     Add to cart
//                   </button>
//                 </div>
//               );
//             })
//           : selected.map((item) => {
//               return (
//                 <div
//                   className="flex-1 flex flex-col justify-center items-center"
//                   key={item.id}
//                 >
//                   <p>{item.description}</p>
//                   <p>
//                     <b>{item.price}</b>
//                   </p>
//                 </div>
//               );
//             })}
//       </div>
//     </div>
//   );
// }
// export default Products;

import wedding from "../assets/wedding.jpg"
import stick from "../assets/event.jpg"
import laundry from "../assets/laundry.jpg"
import catering from "../assets/catering.jpg";
import bride from "../assets/bride.jpg";
import birthday from "../assets/birthday.jpg";
function Products() {
  return (
    <div className="flex bg-slate-200 flex-col">
      <div className="flex-1 flex md:flex-row flex-col">
        <div className="flex-1 m-10 bg-white shadow-2xl rounded-lg">
          <img src={birthday} alt="birthday" className="w-full h-44 rounded-t-lg" />
          <p className="font-serif text-2xl m-3">Birthday Packages</p>
          <button className="bg-slate-500 m-10 h-10 w-20 rounded-full">
          <a href="http://wa.me/+2348133328698">Chat Us</a>
          </button>
        </div>
        <div className="flex-1 m-10 bg-white shadow-2xl rounded-lg">
          <img src={bride} alt="bride" className="w-full h-44 rounded-t-lg" />
          <p className="font-serif text-2xl m-3">Bridal showers</p>
          <button className="bg-slate-500 m-10 h-10 w-20 rounded-full">
          <a href="http://wa.me/+2348133328698">Chat Us</a>
          </button>
        </div>
        <div className="flex-1 m-10 bg-white shadow-2xl rounded-lg">
          <img src={catering} alt="catering" className="w-full h-44 rounded-t-lg" />
          <p className="font-serif text-2xl m-3">Catering Offers</p>
          <button className="bg-slate-500 m-10 h-10 w-20 rounded-full">
          <a href="http://wa.me/+2348133328698">Chat Us</a>
          </button>
        </div>
      </div>
      <div className="flex-1 flex md:flex-row flex-col">
        <div className="flex-1 m-10 bg-white shadow-2xl rounded-lg">
          <img src={laundry} alt="laundry" className="w-full h-44 rounded-t-lg" />
          <p className="font-serif text-2xl m-3">Comfortable Laundry Services</p>
          <button className="bg-slate-500 m-10 h-10 w-20 rounded-full">
            <a href="http://wa.me/+2348133328698">Chat Us</a>
          </button>
        </div>
        <div className="flex-1 m-10 bg-white shadow-2xl rounded-lg">
          <img src={stick} alt="stick" className="w-full h-44 rounded-t-lg" />
          <p className="font-serif text-2xl m-3">Event Centers</p>
          <button className="bg-slate-500 m-10 h-10 w-20 rounded-full">
          <a href="http://wa.me/+2348133328698">Chat Us</a>
          </button>
        </div>
        <div className="flex-1 m-10 bg-white shadow-2xl rounded-lg">
          <img src={wedding} alt="wedding" className="w-full h-44 rounded-t-lg" />
          <p className="font-serif text-2xl m-3">Wedding Packages</p>
          <button className="bg-slate-500 m-10 h-10 w-20 rounded-full">
          <a href="http://wa.me/+2348133328698">Chat Us</a>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Products;
