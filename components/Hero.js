import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="text-center bg-white bg-cover bg-center">
      <div className=" w-80 mx-auto">
        <Image src={"/home1.png"} width={300} height={200} layout="responsive" />
      </div>
      <h1 className="text-2xl text-gray-700 uppercase font-bold"> welcome to watchme</h1>
      <p className="text-gray-500"> Produce FILM feature,TELEVISON and GAME</p>
      <Link href="./contact">
        <button className="bg-gray-700 text-white py-3 px-6 rounded text-xl mt-4">contact us</button>
      </Link>
    </div>
  );
};

export default Hero;
