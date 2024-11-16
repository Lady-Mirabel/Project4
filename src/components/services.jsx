import logo from "../assets/learn.jpg";
import split from "../assets/Tennis.avif";
import boss from "../assets/Case.avif";
import chop from "../assets/cook.webp";
function Services() {
  return (
    <div className="flex flex-col bg-white">
      <div className="flex-1 flex flex-row text-white">
        <div className="flex-1">
          <img src={logo} alt="logo" className="h-52 w-full" />
        </div>
        <div className="flex-1">
          <img src={split} alt="split" className="h-52 w-full" />
        </div>
        <div className="flex-1">
          <img src={boss} alt="boss" className="h-52 w-full" />
        </div>
        <div className="flex-1">
          <img src={chop} alt="chop" className="h-52 w-full" />
        </div>
      </div>
      <div className="flex-1 border flex text-black">
        <div className="flex-1">
          <p>
            Embracing technological innovation unlocks efficient resource
            development, streamlining processes, optimizing utilization, and
            fueling sustainable growth.
          </p>
        </div>
        <div className="flex-1">
          Stay active, stay inspired, and take your game to the next level at
          King's exceptional sports area. Designed for athletes and enthusiasts
          alike, our cutting-edge facilities ensure an unforgettable experience.
        </div>
        <div className="flex-1">
          Escape the ordinary and elevate your work experience at King's
          exceptional office area. Designed for business travelers,
          entrepreneurs, and remote workers, our cutting-edge facilities ensure
          seamless productivity.
        </div>
        <div className="flex-1">
          "Savor the Flavor: King's Culinary Delights" Indulge in a culinary
          journey at King's signature restaurant, where expert chefs craft
          delicious dishes using fresh, locally-sourced ingredients.
        </div>
      </div>
    </div>
  );
}
export default Services;
