export const SectionTitle = ({ title, underline = false, className }) => {
  return (
    <h1
      className={`uppercase font-playfair text-center text-white text-4xl font-normal ${className} ${
        underline &&
        "relative after:absolute after:w-30 after:h-[1px] after:bg-white after:-bottom-10 after:left-1/2 after:-translate-x-1/2"
      }`}
    >
      {title}
    </h1>
  );
};
