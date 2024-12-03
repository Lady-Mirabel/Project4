import logo from "../assets/bybit.jpg";
function Hero() {
  return (
    <div className="flex h-96 justify-center items-center">
      <img
        src={logo}
        alt="logo"
        className="w-screen h-96 absolute -z-10"
      />
      <div>
        <p className="text-white md:text-7xl text-4xl font-serif">
          Welcome To Kings Hotels
        </p>
      </div>
    </div>
  );
}
export default Hero;
