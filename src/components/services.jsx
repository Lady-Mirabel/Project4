import { Link } from "react-router-dom";
import swim from "../assets/swim.jpg";
import gym from "../assets/gym.jpg";
import spa from "../assets/spa.jpg";
import movie from "../assets/movie.jpg";
import two from "../assets/two bed.webp";
import one from "../assets/one bed.webp";
import junior from "../assets/junior_suite.webp";
import president from "../assets/President.jpg";
import executive from "../assets/executive.jpg";
import deluxe from "../assets/Deluxe-1.jpg";
import logo from "../assets/learn.jpg";
import split from "../assets/Tennis.avif";
import boss from "../assets/Case.avif";
import chop from "../assets/cook.webp";
function Services() {
  return (
    <div className="flex flex-col bg-slate-200 w-full">
      <div className="flex justify-center items-center font-serif text-3xl m-5">
        <b>ROOMS AND SUITES</b>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 bg-white shadow-2xl m-10 rounded-md md:w-52">
          <img src={deluxe} alt="deluxe" className="rounded-md w-full h-56" />
          <p className="font-serif text-2xl m-3">Deluxe Rooms</p>
          <p className="text-xs m-2">CELEBRATE BEAUTY IN SIMPLICITY</p>
          <p className="m-3 line-clamp-3">
            Our Deluxe Rooms, the standard rooms, come in a contemporary design
            and tastefully furnished to offer you the best comfort in a tranquil
            environment. Featuring plush king-size beds and stunning city views.
          </p>
          <hr className="h-px m-10 w-56 bg-red-800 border-0"></hr>
          <div className="flex">
            <div className="flex-1 flex justify-center items-center">
              <p>
                <b>Price:$250</b>
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white shadow-2xl m-10 rounded-md md:w-52 ">
          <img
            src={executive}
            alt="executive"
            className="rounded-md w-full h-56"
          />
          <p className="font-serif text-2xl m-3">Executive Rooms</p>
          <p className="text-xs m-2">CELEBRATE BEAUTY IN SIMPLICITY</p>
          <p className="m-3 line-clamp-3">
            Our Executive Deluxe rooms are tastefully furnished to offer you the
            best of enhanced space to accommodate your in room meeting needs
            both business or leisure. Boasting spacious layouts, upscale
            amenities.
          </p>
          <hr className="h-px m-10 w-56 bg-red-800 border-0"></hr>
          <div className="flex">
            <div className="flex-1 flex justify-center items-center">
              <p>
                <b>Price:$270</b>
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1  bg-white shadow-2xl m-10 rounded-md md:w-52">
          <img
            src={president}
            alt="president"
            className="rounded-md w-full h-56"
          />
          <p className="font-serif text-2xl m-3">Presidential Suites</p>
          <p className="text-xs m-2">CELEBRATE BEAUTY IN SIMPLICITY</p>
          <p className="m-3 line-clamp-3">
            Our Presidential Suite is a private sanctuary that exudes luxury and
            elegance in décor and fitted with the latest security systems to put
            you at ease.
          </p>
          <hr className="h-px m-10 w-56 bg-red-800 border-0"></hr>
          <div className="flex">
            <div className="flex-1 flex justify-center items-center">
              <p>
                <b>Price:$300</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1  bg-white shadow-2xl m-10 rounded-md md:w-52">
          <img src={junior} alt="junior" className="rounded-md w-full h-56" />
          <p className="font-serif text-2xl m-3">Junior Suites</p>
          <p className="text-xs m-2">CELEBRATE BEAUTY IN SIMPLICITY</p>
          <p className="m-3 line-clamp-3">
            Our Junior Suites separate the elegantly furnished living room
            fitted with a state-of-the-art entertainment centre in order to
            receive your guests away from serenity of the bedroom.
          </p>
          <hr className="h-px m-10 w-56 bg-red-800 border-0"></hr>
          <div className="flex">
            <div className="flex-1 flex justify-center items-center">
              <p>
                <b>Price:$200</b>
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1  bg-white shadow-2xl m-10 rounded-md md:w-52">
          <img src={one} alt="one" className="rounded-md w-full h-56" />
          <p className="font-serif text-2xl m-3">One Bedroom Suites</p>
          <p className="text-xs m-2">CELEBRATE BEAUTY IN SIMPLICITY</p>
          <p className="m-3 line-clamp-3">
            Our One Bedroom Suites are perfect for you as business or leisure
            guest when you want to have a meeting or entertain someone in the
            lavishly decorated living room that is separate from the bedroom.
          </p>
          <hr className="h-px m-10 w-56 bg-red-800 border-0"></hr>
          <div className="flex">
            <div className="flex-1 flex justify-center items-center">
              <p>
                <b>Price:$150</b>
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1  bg-white shadow-2xl m-10 rounded-md md:w-52">
          <img src={two} alt="two" className="rounded-md w-full h-56" />
          <p className="font-serif text-2xl m-3">Two Bedroom Suites</p>
          <p className="text-xs m-2">CELEBRATE BEAUTY IN SIMPLICITY</p>
          <p className="m-3 line-clamp-3">
            Our Presidential Suite is a private sanctuary that exudes luxury and
            elegance in décor and fitted with the latest security systems to put
            you at ease.
          </p>
          <hr className="h-px m-10 w-56 bg-red-800 border-0"></hr>
          <div className="flex">
            <div className="flex-1 flex justify-center items-center">
              <p>
                <b>Price:$170</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Link
          to="/booknow"
          className="bg-slate-400 h-14 w-28 rounded-2xl m-4 text-center "
        >
          <p className="mt-3">
            {" "}
            <b>BOOK NOW</b>
          </p>
        </Link>
      </div>
      <div className="flex justify-center items-center font-serif md:text-3xl m-5 text-xl">
        <b>RECREATIONAL SERVICES</b>
      </div>
      <div className="flex-1 flex flex-col w-full">
        <div className="flex-1 flex md:flex-row flex-col  gap-10">
          <div className="flex-1 m-5 bg-white rounded-lg shadow-2xl">
            <img
              src={logo}
              alt="logo"
              className="h-52 w-full md:h-52 rounded-t-lg"
            />
            <p className="font-serif text-2xl m-3">Gaming Room</p>
            <p className="m-3 line-clamp-3">
              Embracing technological innovation unlocks efficient resource
              development, streamlining processes, optimizing utilization, and
              fueling sustainable growth.
            </p>
          </div>
          <div className="flex-1 m-5 bg-white rounded-lg shadow-2xl">
            <img
              src={split}
              alt="split"
              className="h-52 w-full md:h-52 rounded-t-lg"
            />
            <p className="font-serif text-2xl m-3">Tennis Court</p>
            <p className="m-3 line-clamp-3">
              Stay active, stay inspired, and take your game to the next level
              at King's exceptional sports area. Designed for athletes and
              enthusiasts alike, our cutting-edge facilities ensure an
              unforgettable experience.
            </p>
          </div>
          <div className="flex-1 m-5 bg-white rounded-lg shadow-2xl">
            <img
              src={boss}
              alt="boss"
              className="h-52 w-full md:h-52 rounded-t-lg"
            />
            <p className="font-serif text-2xl m-3">Meeting Rooms</p>
            <p className="m-3 line-clamp-3">
              Escape the ordinary and elevate your work experience at King's
              exceptional office area. Designed for business travelers,
              entrepreneurs, and remote workers, our cutting-edge facilities
              ensure seamless productivity.
            </p>
          </div>

          <div className="flex-1 m-5 bg-white rounded-lg shadow-2xl">
            <img
              src={chop}
              alt="chop"
              className="h-52 w-full md:h-52 rounded-t-lg"
            />
            <p className="font-serif text-2xl m-3">Food</p>
            <p className="m-3 line-clamp-3">
              "Savor the Flavor: King's Culinary Delights" Indulge in a culinary
              journey at King's signature restaurant, where expert chefs craft
              delicious dishes using fresh, locally-sourced ingredients.
            </p>
          </div>
        </div>
        <div className="flex-1 flex md:flex-row flex-col gap-10">
          <div className="flex-1 m-5 bg-white rounded-lg shadow-2xl">
            <img
              src={movie}
              alt="movie"
              className="h-52 w-full md:h-52 rounded-t-lg"
            />
            <p className="font-serif text-2xl m-3">Cinema</p>
            <p className="m-3 line-clamp-3">
              Experience the magic of movies at our luxurious on-site Cinema,
              featuring plush seating, surround sound, and a vast library of
              films. Relax and enjoy a favorite classic or the latest
              blockbuster in a cozy and intimate setting.
            </p>
          </div>
          <div className="flex-1 m-5 bg-white rounded-lg shadow-2xl">
            <img
              src={spa}
              alt="spa"
              className="h-52 w-full md:h-52 rounded-t-lg"
            />
            <p className="font-serif text-2xl m-3">Spa Sessions</p>
            <p className="m-3 line-clamp-3">
              Indulge in blissful relaxation and rejuvenation with our luxurious
              Spa Sessions, featuring a range of treatments including massages,
              facials, and body wraps. Our expert therapists will work with you
              to customize the perfect treatment, melting away stress and
              leaving you feeling refreshed and revitalized
            </p>
          </div>
          <div className="flex-1 m-5 bg-white rounded-lg shadow-2xl">
            <img
              src={swim}
              alt="swim"
              className="h-52 w-full md:h-52 rounded-t-lg"
            />
            <p className="font-serif text-2xl m-3">Swimming Pool</p>
            <p className="m-3 line-clamp-3">
              "Dive into relaxation at our stunning outdoor Swimming Pool,
              surrounded by lush greenery and comfortable lounge chairs. Enjoy a
              refreshing swim, soak up the sun, or simply unwind with a cool
              drink by the poolside.
            </p>
          </div>
          <div className="flex-1 m-5 bg-white rounded-lg shadow-2xl">
            <img
              src={gym}
              alt="gym"
              className="h-52 w-full md:h-52 rounded-t-lg"
            />
            <p className="font-serif text-2xl m-3">Gymnasium</p>
            <p className="m-3 line-clamp-3">
              Stay fit and energized at our state-of-the-art Gymnasium, equipped
              with cardio machines, free weights, and strength-training
              equipment. Open 24/7, our gym offers a convenient and motivating
              space to maintain your fitness routine while traveling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
