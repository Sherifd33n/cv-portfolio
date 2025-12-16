import React from "react";
import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  text1: string;
  text2: string;
  text3: string;
  text4?: string;
  style1?: string;
  style2?: string;
  style3?: string;
  style4?: string;
  style5?: string;
};

const FrameWorkComponent: React.FC<Props> = ({
  icon: Icon,
  text1,
  text2,
  text3,
  text4,
  style2,
  style3,
  style4,
  style5,
}) => {
  return (
    <div className="w-full sm:w-[300px] bg-[#1e1b2e] p-[30px] rounded-lg">
      <div className="flex items-center gap-6 mb-3">
        <div
          className={`w-[60px] h-[60px] flex items-center justify-center rounded-md border ${style2}`}>
          <Icon className={`${style3}`} size={30} />
        </div>

        <div className="text-left">
          <p className="font-medium text-lg">{text1}</p>
          <div className={`text-[10px] font-medium flex items-center gap-1`}>
            <p className={`${style4}`}>{text2}</p>{" "}
            <p className={`${style5}`}>{text4}</p>
          </div>
        </div>
      </div>

      <p className="text-left text-[#9a97b1]">{text3}</p>
    </div>
  );
};

export default FrameWorkComponent;
