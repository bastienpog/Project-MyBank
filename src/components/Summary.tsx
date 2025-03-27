import { Table } from "@mantine/core";
import React from "react";

export const Summary: React.FC = () => {
  function allStorage() {
    const values = [],
      keys = Object.keys(localStorage);
    let i = keys.length;

    while (i--) {
      if (!isNaN(Number(keys[i]))) {
        const parseItem = JSON.parse(localStorage.getItem(keys[i]));
        values.push(parseItem);
      }
    }
    return values;
  }
  const items = allStorage();
  const rows = items.map((item, index) => (
    <Table.Tr key={index}>
      <Table.Td>{item.dollars}</Table.Td>
      <Table.Td>{item.description}</Table.Td>
      <Table.Td>{item.categories}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <h2 className="text-3xl text-pink-500 font-semibold my-8 ml-8">Your summary</h2>
      <Table className="text-pink-500">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Amount</Table.Th>
            <Table.Th>Description</Table.Th>
            <Table.Th>Categories</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </>
  );
};
