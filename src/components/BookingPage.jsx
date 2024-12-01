import card from "../assets/card.png";
import visa from "../assets/visa.png";
import credit from "../assets/credit.png";
function BookingPage() {
  return (
    <div className="flex bg-slate-200 justify-center items-center flex-col gap-5">
      <div className="flex-1 text-3xl text-red-800 font-bold">
        <p>BOOKING</p>
      </div>
      <div className="flex-1 flex flex-row gap-5">
        <div className="flex-1">
          {" "}
          <p className="text-xl font-serif">Check-in Date:</p>
          <input type="date" className="h-12 w-40 rounded-lg" />
        </div>
        <div className="flex-1">
          {" "}
          <p className="text-xl font-serif">Check-out Date</p>
          <input type="date" className="h-12 w-40 rounded-lg" />
        </div>
      </div>
      <div className="flex-1">
        <label htmlFor="room type" className="text-lg font-serif">
          Select Room:
        </label>
        <select name="room" id="room" className="block w-72 p-2 rounded-lg ">
          <option value="deluxeroom">Deluxe Room</option>
          <option value="executiveroom">Executive Room</option>
          <option value="presidentialsuites">Presidential Suites</option>
          <option value="juniorsuites">Junior Suites</option>
          <option value="onebedroomsuites">One Bedroom Suites</option>
          <option value="twobedroomsuites">Two Bedroom Suites</option>
        </select>
      </div>
      <div className="flex-1">
        <label htmlFor="number" className="text-lg font-serif">
          Number of Guests:
        </label>
        <select name="room" id="room" className="block w-72 p-2 rounded-lg ">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="flex-1">
        <p>Special Guests if any?</p>
        <input
          type="text"
          placeholder="Special guest"
          className="rounded-lg w-72 h-12"
        />
      </div>
      <div className="flex-1 font-serif text-white">
        <button className="bg-slate-600 rounded-lg w-40 h-10 m-10">
          Check Availability
        </button>
      </div>
      <div className="flex-1 flex flex-col gap-5 justify-center items-center">
        <div className="flex-1 text-3xl text-red-800 font-bold">
          <p>PAYMENT OPTIONS</p>
        </div>
        <div className="flex-1 flex gap-5 flex-row md:w-96">
          <p>
            <b>Card:</b>
          </p>
          <input type="radio" name="img" />
          <img src={card} alt="card" className="h-10 w-20" />
          <input type="radio" name="img" />
          <img src={visa} alt="visa" className="h-10 w-20" />
          <input type="radio" name="img" />
          <img src={credit} alt="credit" className="h-10 w-20" />
        </div>
        <div className="flex-1">
          <p>Name on Card:</p>
          <input type="text" placeholder="" className="rounded-lg w-72 h-12" />
        </div>
        <div className="flex-1">
          {" "}
          <p className="text-xl font-serif">Expiry Date:</p>
          <input type="date" className="h-12 w-72 rounded-lg" />
        </div>
        <div className="flex-1">
          {" "}
          <p className="text-xl font-serif">Security Code:</p>
          <input type="number" className="h-12 w-72 rounded-lg" />
        </div>
        <div className="flex-1">
          <p>City:</p>
          <input type="text" placeholder="" className="rounded-lg w-72 h-12" />
        </div>
        <div className="flex-1">
          <p>Zip Code:</p>
          <input
            type="number"
            placeholder=""
            className="rounded-lg w-72 h-12"
          />
        </div>
        <div className="flex-1 font-serif text-white">
          <button className="bg-slate-600 rounded-lg w-40 h-10 m-5">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}
export default BookingPage;
