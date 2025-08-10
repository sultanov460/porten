import { SectionTitle } from "../SectionTitle/SectionTitle";

export const Collection = () => {
  return (
    <div className="px-2.5 flex flex-col justify-center items-center gap-13 bg-[url('/NewCollection.jpg')] bg-no-repeat bg-cover bg-center min-h-160 w-full text-white">
      <SectionTitle title={"Новая Коллекция"} />
      <button className="py-3 px-7 border border-white bg-transparent cursor-pointer font-normal text-lg hover:bg-white hover:text-black transition duration-300 ease-in-out">
        КАТАЛОГ
      </button>
    </div>
  );
};
