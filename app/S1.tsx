import { BsStarFill, BsStarHalf } from "react-icons/bs";

export const S1 = () => {
  return (
    <div className="flex w-full flex-col justify-between gap-5 md:h-96 md:flex-row">
      <div className="flex w-full flex-col justify-evenly text-center text-2xl md:w-2/3">
        <p className="text-4xl font-bold">Barber</p>
        <p>&quot;Budapest legjobb fodrászata&quot;</p>
        <div className="text-primary">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
        </div>
      </div>
      <img
        alt="Kép a fodrászról"
        className="block h-80 w-full rounded-lg object-cover opacity-60 md:h-96 md:w-1/3"
        src="/1.jpg"
      />
    </div>
  );
};
