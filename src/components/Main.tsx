import { Button, Card } from "@mantine/core";
import { PiggyBank } from "lucide-react";
import React from "react";

export const Main: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-pink-50 flex flex-col px-6 py-6">
        <div className="flex items-center">
          <div className="space-y-6">
            <h1 className="text-4xl text-pink-500">Votre Partenaire Financier Digital</h1>
            <p className="text-gray-500 text-lg">
              MyPiggyBank révolutionne votre expérience bancaire avec des solutions simples,
              sécurisées et innovantes.
            </p>
            <div className="space-x-6">
              <Button color="#f6339a" size="lg">
                Start fattening the pig
              </Button>
              <Button variant="outline" color="#f6339a" size="lg">
                Learn more ...
              </Button>
            </div>
          </div>

          <div className="xl:mx-32">
            <PiggyBank color="#f6339a" size={300} />
          </div>
        </div>

        <div className="flex space-x-6 mt-12">
          <Card shadow="sm" padding="lg" radius="md" className="bg-white text-center items-center">
            <PiggyBank size={50} className="text-pink-500 mb-4" />
            <h2 className="mb-2 text-pink-500"> Every Coin Counts!</h2>
            <p className="text-gray-500">
              Remember when you saved coins in a piggy bank? Now, do it digitally and smarter!
            </p>
          </Card>

          <Card shadow="sm" padding="lg" radius="md" className="bg-white text-center items-center">
            <PiggyBank size={50} className="text-pink-500 mb-4" />
            <h2 className="mb-2 text-pink-500">Break the Piggy (Only When You're Ready!)</h2>
            <p className="text-gray-500">
              Set goals, save smart, and unlock your savings when you reach your targets.
            </p>
          </Card>

          <Card shadow="sm" padding="lg" radius="md" className="bg-white text-center items-center">
            <PiggyBank size={50} className="text-pink-500 mb-4" />
            <h2 className="mb-2 text-pink-500"> Keep Your Coins Safe, Just Like the Old Days!</h2>
            <p className="text-gray-500">
              Remember hiding your piggy bank? Now, your money is even safer with MyPiggyBank!
            </p>
          </Card>

          <Card shadow="sm" padding="lg" radius="md" className="bg-white text-center items-center">
            <PiggyBank size={50} className="text-pink-500 mb-4" />
            <h2 className="mb-2 text-pink-500">Turn Pennies into Possibilities!</h2>
            <p className="text-gray-500">
              Start small, dream big, and let MyPiggyBank help you grow your savings.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
};
