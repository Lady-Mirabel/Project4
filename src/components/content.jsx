import { useState } from "react";
function Content() {
  return (
    <div className="flex flex-col bg-slate-200">
      <div className="flex-1 flex-col text-lg px-4 flex">
        <p className="text-5xl font-serif m-10">ABOUT THE HOTEL</p>
        <hr className="h-px m-10 md:w-96 w-60 bg-red-800 border-0"></hr>
        <p className="m-5">
          King's Hotel: Downtown's premier luxury oasis offering elegant rooms,
          rooftop dining, fitness center, free WiFi, exceptional service,
          stunning city views, and tailored experiences. Relax, recharge, and
          indulge in royal treatment, perfect for discerning travelers, business
          elites, and special occasions. Enjoy gourmet cuisine, craft cocktails,
          and personalized hospitality, every time, in style."
        </p>
        <div className="flex-1 flex text-center text-xl flex-col md:flex-row">
          <div
            className="flex-1 h-36 flex flex-col justify-center items-center m-10 
          bg-gradient-to-b from-slate-200 to-slate-400 rounded-lg"
          >
            <b> Location:</b>
            <p>Umuobi-Assa Ohaji/Egbema L.G.A Imo State, Nigeria</p>
          </div>
          <div
            className="flex-1 m-10 flex items-center justify-center flex-col
           bg-gradient-to-b from-slate-200 to-slate-400 rounded-lg"
          >
            <b> Rating:</b>
            <p>4.5/5</p>
          </div>
          <div
            className="flex-1 m-10 flex justify-center items-center flex-col
           bg-gradient-to-b from-slate-200 to-slate-400 rounded-lg"
          >
            <b> Price:NGN</b>
            <p>50,000-200,000/night</p>
          </div>
          <div
            className="flex-1 m-10 flex flex-col justify-center items-center
           bg-gradient-to-b from-slate-200 to-slate-400 rounded-lg"
          >
            <b> Amenities:</b>

            <p>Free WiFi, Fitness Center, Restaurant e.t.c</p>
          </div>
        </div>
      </div>
      <div
        className="flex-1 flex text-center text-xl flex-row m-4
       bg-gradient-to-b from-slate-200 to-slate-400"
      >
        <div className="flex-1 m-5 rounded-md">
          <b>VISION:</b>
          <p className="text-lg">
            To be the premier hospitality leader, renowned for exceptional
            service, luxurious amenities, and unforgettable experiences, while
            fostering a culture of excellence, innovation, and community
            engagement
          </p>
        </div>
        <div className="flex-1 m-5 rounded-md">
          <b>MISSION:</b>
          <p className="text-lg">
            Delivering exceptional hospitality, unforgettable experiences, and
            personalized service with integrity and excellence always.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Content;
