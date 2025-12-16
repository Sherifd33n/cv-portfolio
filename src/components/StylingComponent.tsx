import React from "react";
import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  text: string;
  style1?: string;
  style2?: string;
};

const StylingComponent: React.FC<Props> = ({
  icon: Icon,
  text,
  style1,
  style2,
}) => {
  return (
    <div className="flex flex-col items-center gap-4 w-full md:w-[200px] rounded-lg p-[20px] bg-[#1e1b2e]">
      <div
        className={`w-[50px] h-[50px] flex items-center justify-center rounded-full ${style1}`}>
        <Icon size={25} className={`${style2}`} />
      </div>

      <p className="text-[#f5f5f6] font-semibold">{text}</p>
    </div>
  );
};

export default StylingComponent;
