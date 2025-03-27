import { PiggyBank } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <>
      <header className="w-full flex items-center justify-between py-4 px-8 top-0 sticky z-10 bg-white">
        <Link to={"/"} className="flex flex-col xl:flex-row items-center space-x-2">
          <PiggyBank className="text-pink-500 xl:size-15 size-10" />
          <h1 className=" text-lg xl:text-2xl font-bold text-pink-500">MyPiggyBank</h1>
        </Link>
        <div className="flex space-x-8 text-lg font-semibold text-pink-500">
          <Link to={"/"}>Home</Link>
          <Link to={"/Expense"}>Expense</Link>
        </div>
      </header>
    </>
  );
};
