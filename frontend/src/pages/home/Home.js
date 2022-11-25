import React from "react";
import Signin from "../../components/signin/Signin";
import Signup from "../../components/signup/Signup";

const Home = () => {
  return (
    <div className="flex-0.5 flex justify-between">
      <div className="flex justify-around mx-auto items-center flex-col">
        <header>
            <div className="text-3xl font-bold text-red-800">DP Softwares</div>
            <p className="text-slate-600 font-medium italic">Already have an account ? <span>Sign In</span></p>
        </header>
        <div>
            <Signin/>
        </div>
        
      </div>
      {/* image container  */}

      <div className="bg-hero-pattern bg-cover bg-right-top bg-no-repeat h-[100vh] w-[50%] ">
        <div>
          <h1>Contact us</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
