import React from "react";
import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, feedback, rating, customerName }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] g-[120px]"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="mt-3 flex justify-center items-center text-xl font-montserrat text-slate-gray ">
        <img src={star} width={24} height={24} className="object-contain m-0" />
        <p>({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-center text-3xl font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
