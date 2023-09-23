export const Services = () => {
  return (
    <div className="flex flex-col p-3 text-center md:p-10">
      <div className="p-5 text-3xl font-bold">Ajánlataink</div>
      <div className="flex flex-col justify-evenly md:flex-row">
        <div className="card flex h-auto w-3/4 flex-col self-center md:w-1/3">
          <img
            alt="Hajvágás kép"
            loading="lazy"
            className="h-1/2 h-64 w-full rounded-t-lg object-cover md:h-80"
            src="/2.jpg"
          />
          <div className="flex h-20 flex-col justify-center py-10 md:h-32">
            <p className=" text-2xl md:text-3xl">Hajvágás</p>
            <p className="text-xl text-primary">1500Ft</p>
          </div>
        </div>
        <div className="card flex h-auto w-3/4 flex-col self-center md:w-1/3">
          <img
            alt="Stilizálás kép"
            loading="lazy"
            className="h-1/2 h-64 w-full rounded-t-lg object-cover md:h-80"
            src="/3.jpg"
          />
          <div className="flex h-20 flex-col justify-center py-10 md:h-32">
            <p className=" text-2xl md:text-3xl">Stilizálás</p>
            <p className="text-xl text-primary">1500Ft</p>
          </div>
        </div>
        <div className="card flex h-auto w-3/4 flex-col self-center md:w-1/3">
          <img
            alt="Borotválás kép"
            loading="lazy"
            className="h-1/2 h-64 w-full rounded-t-lg object-cover md:h-80"
            src="/4.jpg"
          />
          <div className="flex h-20 flex-col justify-center py-10 md:h-32">
            <p className=" text-2xl md:text-3xl">Borotválás</p>
            <p className="text-xl text-primary">1500Ft</p>
          </div>
        </div>
      </div>
    </div>
  );
};
