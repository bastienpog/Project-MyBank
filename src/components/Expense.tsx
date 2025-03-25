import { Button, NumberInput, TagsInput, TextInput } from "@mantine/core";
import { useState } from "react";

export const Expense: React.FC = () => {
  const [dollars, setDollars] = useState<number | "">("");
  const [description, setDescription] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);
  const [count, setCount] = useState(Number(localStorage.getItem("count")) || 0);

  const SaveData = () => {
    if (dollars == "" || description == "" || categories.length == 0) {
      alert("Please complete all fields in the form.");
      return null;
    }
    localStorage.setItem(`${count}`, JSON.stringify({ dollars, description, categories }));
    setCount(count + 1);
    localStorage.setItem("count", JSON.stringify(count));
    setDollars("");
    setDescription("");
    setCategories([]);
  };

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
            value={dollars}
            onValueChange={(values) => setDollars(values.floatValue ?? "")}
          />
          <TextInput
            label="Description"
            placeholder="Add your description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TagsInput
            label="Press Enter to submit a categories"
            placeholder="Categories"
            data={[]}
            value={categories}
            onChange={setCategories}
          />
          <Button variant="filled" color="#fda5d5" className="mt-6" onClick={SaveData}>
            Button
          </Button>
        </div>
      </div>
    </>
  );
};
