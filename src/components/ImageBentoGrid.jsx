import React from "react";

import img1 from "../assets/gallery/1.jpg"
import img2 from "../assets/gallery/2.jpg"
import img3 from "../assets/gallery/3.jpg"
import img4 from "../assets/gallery/4.jpg"
import img5 from "../assets/gallery/5.jpg"
import img6 from "../assets/gallery/6.jpg"
import img7 from "../assets/gallery/7.jpg"
import img8 from "../assets/gallery/8.jpg"

export default function ImageBentoGrid() {

  return (
    <div className="w-full max-w-[1400px] mx-auto">
      <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 auto-rows-auto lg:auto-rows-[150px] gap-4 lg:p-4">
        <img src={img1} className="col-span-2 row-span-1 w-full h-full object-cover rounded-2xl duration-150 ease-out" />
        <img src={img2} className="col-span-1 row-span-1 w-full h-full object-cover rounded-2xl duration-150 ease-out" />
        <img src={img3} className="col-span-1 row-span-2 w-full h-full object-cover rounded-2xl duration-150 ease-out" />
        <img src={img4} className="col-span-2 row-span-1 w-full h-full object-cover rounded-2xl duration-150 ease-out" />
        <img src={img5} className="col-span-1 row-span-1 w-full h-full object-cover rounded-2xl duration-150 ease-out" />
        <img src={img6} className="col-span-1 row-span-2 w-full h-full object-cover rounded-2xl duration-150 ease-out" />
        <img src={img7} className="col-span-2 row-span-1 w-full h-full object-cover rounded-2xl duration-150 ease-out" />
        <img src={img8} className="lg:hidden col-span-1 row-span-2 w-full h-full object-cover rounded-2xl duration-150 ease-out" />
      </div>
    </div>
  );
}
