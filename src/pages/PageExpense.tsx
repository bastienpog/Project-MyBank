import { Expense } from "@/components/Expense";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import React from "react";

export const PageExpense: React.FC = () => {
  return (
    <>
      <MantineProvider>
        <div className="">
          <Expense />
        </div>
      </MantineProvider>
    </>
  );
};
