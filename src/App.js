import { useState, useEffect } from "react";

const App = () => {
  const [price, setPrice] = useState(16);
  const [views, setViews] = useState(100);
  const [isChecked, setIsChecked] = useState(false);

  const handleSlider = (e) => {
    setPrice(e.target.value);
    setViews(Math.floor((100 / 16) * e.target.value));
  };
  return (
    <section className=" font-manrope py-20 px-4 h-screen w-full bg-[#eaeefb]">
      <div className="text-center mb-10">
        <h1 className="text-xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl mb-3 font-bold">
          Simple, traffic-based pricing
        </h1>
        <p className="text-xs xl:text-sm lg:text-sm md:text-sm sm:text-sm text-[#858fad]">
          Sign-up for our 30-day trial. No credit card required.
        </p>
      </div>
      <div className="bg-[#ffffff] w-full xl:max-w-lg lg:max-w-lg md:max-w-lg sm:max-w-lg xs:max-w-lg m-auto drop-shadow-2xl rounded-md overflow-hidden pb-6">
        <div className="px-10 pt-12 card1 pb-6 border-b-2">
          <div className="grid xl:grid-flow-col xl:grid-cols-2 xl:grid-rows-2 lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-2 md:grid-flow-col md:grid-cols-2 md:grid-rows-2 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-2 gap-5">
            <p className="mt-2 text-[#858fad] xl:text-left lg:text-left md:text-left sm:text-left text-center page">
              {views}K PAGEVIEWS
            </p>
            <div className="slider-container xl:row-start-2 xl:col-start-1 xl:col-span-2 lg:row-start-2 lg:col-start-1 lg:col-span-2 md:row-start-2 md:col-start-1 md:col-span-2 sm:row-start-2 sm:col-start-1 sm:col-span-2">
              <input
                onChange={handleSlider}
                type="range"
                min="1"
                max="32"
                class="slider"
                id="myRange"
                value={price}
                className="slider"
                style={{
                  background: `linear-gradient(to right, #a5f3eb 0%, #a5f3eb ${
                    (100 / 32) * price
                  }%, #eaeefb ${(100 / 32) * price}%, #eaeefb 100%)`,
                }}
              ></input>
            </div>
            <div className="flex justify-end m-auto">
              <h1 className="price-heading text-4xl mr-1 font-bold text-[#293356]">
                ${price}.00
              </h1>
              <p className="mt-2 text-[#858fad]">/month</p>
            </div>
          </div>
          <div className="flex mt-10 justify-end text-xs">
            <div className="flex align-middle gap-2 mr-8 month">
              <p className="text-[#858fad]" style={{ marginTop: "2px" }}>
                Monthly Billing
              </p>
              <label className="switch">
                <input
                  type="checkbox"
                  value={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
                <div className="button-slider"></div>
              </label>
            </div>
            <div className="mr-10 year">
              <p
                className="inline-block mr-2 text-[#858fad]"
                style={{ marginTop: "2px" }}
              >
                Yearly Billing
              </p>
              <span
                className="px-2 py-1  rounded-xl bg-[#feece7] text-[#ff8c66] xl:inline lg:inline md:inline sm:inline hidden"
                style={{ fontSize: ".6rem", marginTop: "2px" }}
              >
                25% discount
              </span>
              <span
                className="px-2 py-1  rounded-xl bg-[#feece7] text-[#ff8c66] xl:hidden lg:hidden md:hidden sm:hidden inline"
                style={{ fontSize: ".6rem", marginTop: "2px" }}
              >
                -25%
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-14 align-middle justify-between pt-6 px-10 bg-[#ffffff] card2">
          <div className="flex flex-col text-xs xl:text-left lg:text-left md:text-left sm:text-left text-center features text-[#858fad] gap-4">
            <p>
              <span className=" text-green-600">✔</span> Unlimited websites
            </p>
            <p>
              <span className=" text-green-600">✔</span> 100% data ownership
            </p>
            <p>
              <span className=" text-green-600">✔</span> Email reports
            </p>
          </div>
          <button className="bg-[#293356] h-10 px-7 rounded-3xl  text-[#bdccff] text-xs btn mt-4">
            Start my trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default App;
