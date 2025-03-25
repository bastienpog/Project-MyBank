import { Button, NumberInput, TagsInput, TextInput } from "@mantine/core";
import React from "react";

export const Expense: React.FC = () => {
  return (
    <>
      <div>
        <h2 className="text-3xl text-pink-300 font-semibold m-8">Add your expense</h2>
        <div className="flex ml-8 space-x-8">
          <NumberInput
            label="Expense"
            placeholder="Dollars"
            prefix="$"
            decimalScale={2}
            thousandSeparator=","
          />
          <TextInput label="Description" placeholder="Add your description" />
          <TagsInput
            label="Press Enter to submit a categories"
            placeholder="Categories"
            data={[]}
          />
          <Button variant="filled" color="#fda5d5" className="mt-6">
            Button
          </Button>
        </div>
      </div>
    </>
  );
};
