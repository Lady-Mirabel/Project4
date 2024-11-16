import logo from "../assets/Hot.jpg";
function Hero() {
  return (
    <div className="flex py-4 flex-col">
      <div className="flex-1 flex-col font-bold text-xl text-white px-4 flex">
        <p>
          Kings Entertainment redefines excellence, delivering unforgettable
          experiences through exceptional events and unparalleled hospitality.
          Where luxury meets excitement, Kings Ent sets the standard for premium
          entertainment.
        </p>
        <button
          className="rounded-md bg-gradient-to-r from-orange-300 mt-4 self-center
                    via-red-600 to-orange-300 h-[35px] w-[90px] text-sm ring-2 ring-black"
        >
          Meet a rep
        </button>
      </div>
      <div className="flex-1 flex justify-end items-center">
        <img src={logo} alt="logo" className="rounded-full" />
      </div>
    </div>
  );
}
export default Hero;
