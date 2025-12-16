import React from "react";
import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  text1: string;
  text2: string;
  text3: string;
  style1?: string;
  style2?: string;
  style3?: string;
};

const LanguagesComponent: React.FC<Props> = ({
  icon: Icon,
  text1,
  text2,
  text3,
  style1,
  style2,
  style3
}) => {
  return (
    <div className="w-full sm:w-[300px] bg-[#1e1b2e] p-[30px] rounded-lg">
      <div className="flex items-center gap-6 mb-3">
        <div
          className={`w-[60px] h-[60px] flex items-center justify-center rounded-md border ${style2}`}>
          <Icon className={`${style3}` } size={30} />
        </div>        

        <div className="text-left">
          <p className="font-medium text-lg">{text1}</p>
          <p className="text-[#9a97b1] font-medium">{text2}</p>
        </div>
      </div>

      <p className="text-left text-[#9a97b1]">{text3}</p>

      <div className={`${style1} h-[8px] rounded w-full mt-[40px]`}></div>
    </div>
  );
};

export default LanguagesComponent;
