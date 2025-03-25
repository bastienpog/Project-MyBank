import { PiggyBank } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

export const Header: React.FC = () => {
  return (
    <>
      <header className="w-full flex items-center justify-between py-2 px-8 top-0 sticky bg-pink-300">
        <div className="flex items-center space-x-1">
          <PiggyBank size={64} />
          <span className="text-xl font-bold">MyPiggyBank</span>
        </div>
        <div className="flex space-x-8 text-lg font-semibold">
          <Link to={"/"}>Home</Link>
          <Link to={"/Expense"}>Expense</Link>
        </div>
      </header>
    </>
  );
};
