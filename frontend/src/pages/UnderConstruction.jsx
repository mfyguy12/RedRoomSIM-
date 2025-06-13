import React from "react";
import underconstruction from "../assets/uc.png";

const UnderConstruction = () => {
  return (
   
      
      <div className="flex flex-col items-center mt-4">
        <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
        <img src={underconstruction} alt="underconstruction" className="h-80 w-80" />
      </div>

  );
};

export default UnderConstruction;