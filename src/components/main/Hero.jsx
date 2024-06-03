import React from "react";
import me from "../../assets/mainimg1.png";

const Hero = () => {
  return (
    <section className="hero flex  w-full  bg-red-900 h-screen ">
      <main className="w-1/2 px-6 flex flex-col justify-center z-20">
        <h1 className="text-white text-8xl pb-6">Hi, There</h1>
        <h3 className="text-white text-5xl text-nowrap">
          i&apos;m <span className="gradient">Ichoku Somtoochukwu</span>
        </h3>
      </main>
      <aside className="w-1/2 relative ">
        {/* <img src={me} alt="" className="w-full h-full mt-[-3rem]" /> */}
      </aside>
    </section>
  );
};

export default Hero;
