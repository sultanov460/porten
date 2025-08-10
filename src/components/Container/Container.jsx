export const Container = ({ children, className }) => {
  return (
    <div className={`max-w-[1120px] mx-auto px-3 ${className}`}>{children}</div>
  );
};
