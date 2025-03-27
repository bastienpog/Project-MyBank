import { PiggyBank } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <>
      <header className="w-full flex items-center justify-between py-4 px-8 top-0 sticky bg-white">
        <Link to={"/"} className="flex items-center space-x-2">
          <PiggyBank size={60} className="text-pink-500" />
          <h1 className="text-2xl font-bold text-pink-500">MyPiggyBank</h1>
        </Link>
        <div className="flex space-x-8 text-lg font-semibold text-pink-500">
          <Link to={"/"}>Home</Link>
          <Link to={"/Expense"}>Expense</Link>
        </div>
      </header>
    </>
  );
};
