import { Expense } from "@/components/Expense";
import { Summary } from "@/components/Summary";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import React from "react";

export const PageExpense: React.FC = () => {
  return (
    <>
      <MantineProvider>
        <div className="">
          <Expense />
          <Summary/>
        </div>
      </MantineProvider>
    </>
  );
};
