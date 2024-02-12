import Spinner from "./Spinner";

const Button = ({
  children,
  width,
  isFullWidth,
  isSecondary,
  isLoading,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center gap-2.5 rounded-md font-bold text-xl text-center py-3 px-4 ${
        isFullWidth && "w-full"
      } ${
        isSecondary
          ? "bg-cotton-candy text-bubblegum"
          : "bg-bubblegum text-white-rabbit"
      } ${width ?? ""}`}
    >
      {isLoading && <Spinner />}
      {children}
    </button>
  );
};

export default Button;
