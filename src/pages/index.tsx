import { Main } from "@/components/Main";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import React from "react";
export const Index: React.FC = () => {
  return (
    <>
      <MantineProvider>
        <div className="">
          <Main />
        </div>
      </MantineProvider>
    </>
  );
};
