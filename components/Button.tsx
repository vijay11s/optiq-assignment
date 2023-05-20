import { FC } from "react";

const Button: FC<Props> = ({ text, variant, onClick }) => {
  const variantStyle = {
    primary: "bg-primary text-white border-primary",
    secondary: "bg-white text-secondary border-[#ECEEF2]",
  };

  return (
    <button
      className={`py-3 pl-4 pr-3 font-bold text-sm rounded-md border-[2px] border-solid ${variantStyle[variant]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

type Props = {
  text: string;
  variant: "primary" | "secondary";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
