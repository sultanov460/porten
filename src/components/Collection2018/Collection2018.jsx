import { SectionTitle } from "../SectionTitle/SectionTitle";

export const Collection2018 = () => {
  return (
    <div className="flex flex-col items-center text-white border-y-2 xl:flex-row md:py-3.5 md:gap-2.5 xl:py-0">
      <img
        src="/Collection2018.jpg"
        alt=""
        className="min-h-fit w-fit lg:w-[800px] rounded-[12px] xl:rounded-[0px] "
      />
      <div className=" px-3 py-4.5 mx-auto flex justify-center items-center gap-10 flex-col max-w-[1040px] ">
        <SectionTitle title={"Коллекция 2018"} underline />
        <p className="max-w-[471px] text-center font-ptsans leading-[1rem] text-sm md:max-w-[600px] md:leading-[1.5rem] mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum
          ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis
          nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna
          consectetur. Amet convallis quis gravida facilisis vulputate. Faucibus
          facilisi habitasse ipsum interdum dictum aliquet. Velit quis
          ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra
          nulla nullam natoque volutpat curabitur auctor. Viverra viverra
          ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam
          egestas leo orci pharetra sed diam.
        </p>
        <button className="uppercase py-3 px-7 border border-white bg-transparent cursor-pointer font-normal text-lg hover:bg-white hover:text-black transition duration-300 ease-in-out mt-[21px]">
          посмотреть коллекцию
        </button>
      </div>
    </div>
  );
};
