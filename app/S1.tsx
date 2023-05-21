import { BsStarFill, BsStarHalf } from "react-icons/bs";

export const S1 = () => {
  return (
    <div className="flex h-min w-full flex-col justify-between md:h-96 md:flex-row">
      <div className="flex w-full flex-col justify-evenly text-center text-2xl md:w-2/3">
        <div className="text-4xl font-bold">Barber</div>
        <div>Budapest legjobb fodrásza</div>
        <div className="text-[#D3A27B]">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
        </div>
      </div>
      <img
        alt="Kép a fodrászról"
        className="block h-96 w-full object-cover opacity-60 md:w-1/3"
        src="https://lh3.googleusercontent.com/p/AF1QipN7KCMZtS8mOw-MmXxyIbvPeKObtfawS6dHvwP4=s1360-w1360-h1020"
      />
    </div>
  );
};
