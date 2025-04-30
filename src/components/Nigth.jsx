import React from "react";
import { NightTemparture } from "./NigthTemparture";
export const Night = ({ weatherData, isLoading }) => {
  return (
    <div className="w-[50%] h-full bg-[#0F141E] border rounded-2xl flex items-center justify-center pt-[2px] ">
      <NightTemparture data={weatherData} isLoading={isLoading} />
    </div>
  );
};
