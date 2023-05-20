import { FC } from "react";
import Button from "@/components/Button";

const Header: FC<Props> = () => {
  return (
    <div className="flex justify-between items-center px-5 py-4 w-full rounded-t-[10px] border border-[#ECEEF2]">
      <p className="text-2xl font-semibold text-[#262626]">Build Config</p>
      <div className="flex gap-4 items-center">
        <Button text="Cancel" onClick={() => void 0} variant="secondary" />
        <Button text="Save" onClick={() => void 0} variant="primary" />
      </div>
    </div>
  );
};

export default Header;

type Props = {};
