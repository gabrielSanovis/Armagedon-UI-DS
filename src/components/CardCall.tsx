import { Children, ReactNode } from "react";
import "../styles/global.css";
import { HeadingText } from "./HeadingText";
import { Text } from "./Text";

export interface ICardCall {
  label: string;
  callType: "humanizadas" | "robotizadas" | "conectados";
  ProgressBar: ReactNode;
}

export function CardCallRoot({ label, callType, ProgressBar }: ICardCall) {
  return (
    <>
      <div className="bg-black-700 w-80 h-36 px-4 py-4 rounded-md">
          <div className="flex">
          <div className="w-12 h-12 bg-white-500">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3558/3558860.png"
              alt=""
            />
          </div>
          <Text size="lg">
            <p className="ml-2">Ligações</p> <p className="ml-2">humanizadas</p>
          </Text>
          </div>
        <div className="mt-7">
          <div className="flex justify-between text-white-500">
            <p>0</p><p>10</p>
          </div>
        {ProgressBar}
        </div>
      </div>
    </>
  );
}
CardCallRoot.displayName = "CardCall.Root";


export const CardCall = {
  Root: CardCallRoot,
};
