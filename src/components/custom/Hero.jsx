import React, { useContext } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { LogInContext } from "@/Context/LogInContext/Login";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Stats from "./Stats";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Hero() {
  const { isAuthenticated } = useContext(LogInContext);
 
  return (
    <div className="flex items-center flex-col text-center justify-center h-auto mt-20"> {/* Add mt-20 here */}
      <div className="text px-10 md:px-40 flex flex-col items-center justify-center gap-4">
        <div className="heading">
          <h1 className="font-extrabold text-3xl md:text-[50px] leading-tight">
            <span className="text-red-500 ">Go Beyond AI</span>: 
            <span className="text-black">Your Ultimate Trip Planner for Unforgettable Journeys</span>
          </h1>
          <h3 className="font-extrabold opacity-70 text-xl md:text-[40px] leading-tight mt-5">
            Personalized Journeys for Every Adventure
          </h3>
        </div>
        <div className="desc mt-5">
          <h5 className="text-[15px] md:text-2xl font-semibold opacity-40">
            Go Beyond AI: Your Trusted Adventure Partner, Crafting Personalized Travel Plans to Match Your Passions and with AI-driven itineraries designed just for you.
          </h5>
        </div>
        <div className="button flex flex-col">
          <Link to="/plan-a-trip">
          <div className="mt-8 px-8 py-4 border-4 border-black rounded-full flex justify-center items-center">
  <Button className="text-xl font-semibold text-white bg-black hover:bg-gray-800 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
    {isAuthenticated ? "Let's Make Another Trip" : "Plan a Trip, It's Free"}
  </Button>
</div>

          </Link>
        </div>
      </div>
      <div className="img">
        <img src="/travel.jpg" className="" alt="" />
      </div>
    </div>
  );
}

export default Hero;
