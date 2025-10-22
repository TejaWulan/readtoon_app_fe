import image1 from "../../asset/img/image_manhwa1.jpg";
import image2 from "../../asset/img/image_manhwa2.jpg";
import image3 from "../../asset/img/image_manhwa3.jpg";

import type { JSX } from "react";


export const Ads = (): JSX.Element => {
  return (
    <div className="inline-flex h-[130px] items-start gap-4 relative">
      <div className="relative w-[115.71px] h-[130px] shadow-drop-shadow bg-[url(/bg.png)] bg-cover bg-[50%_50%]">
        <img
          className="absolute top-0 left-0 w-[116px] h-[130px]"
          alt="image1"
          src={image1}
        />
      </div>

      <div className="relative w-[115.71px] h-[130px] shadow-drop-shadow bg-[url(/image.png)] bg-cover bg-[50%_50%]">
        <img
          className="absolute top-0 left-0 w-[116px] h-[130px]"
          alt="image2"
          src={image2}
        />
      </div>

      <div className="relative w-[115.71px] h-[130px] shadow-drop-shadow bg-[url(/bg-2.png)] bg-cover bg-[50%_50%]">
        <img
          className="absolute top-0 left-0 w-[116px] h-[130px]"
          alt="image2"
          src={image3}
        />
      </div>
    </div>
  );
};
