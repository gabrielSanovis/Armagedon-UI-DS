import "../styles/global.css";
import { Children, ReactNode } from "react";
import { HeadingText } from "./HeadingText";

export interface IProgressBar {
  min: number;
  max: number;
  bgColor: string;
}

export function ProgressBar({ min, max, bgColor }: IProgressBar) {
  const percentage = (min * 100) / max;
  return (
    <div className="bg-white-500 rounded-lg">
      <div className="h-3 w-full">
        <div className={`w-[${percentage}%] h-3 bg-purple-900`}
          // style={{
          //   backgroundColor: `${bgColor}%`,
          //   width: `${percentage}%`,
          //   height: "0.75rem",
          // }}
        ><p>{percentage}</p></div>
      </div>
    </div>
  );
}
