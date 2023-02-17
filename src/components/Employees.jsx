import React, { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Img, Button } from "@chakra-ui/react";

import { deleteEmployees, getEmployees } from "./utils/employees";
import axios from "axios";
import { Edit } from "./Edit";

export const Employees = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getEmployees().then((r) => setData(r.data));
  }, []);

  const getData = () => {
    axios.get("https://wbtech.onrender.com/").then((r) => setData(r.data));
  };

  const handleDelete = (id) => {
    deleteEmployees(id).then((r) => getData());
  };

  return (
    <Table variant="striped" colorScheme="teal" size="sm" w="80%" m="auto">
      <Thead>
        <Tr>
          <Th>First Name</Th>
          <Th>Last Name</Th>
          <Th>Image</Th>
          <Th isNumeric>Phone</Th>
          <Th>Email</Th>
          <Th>Hours</Th>
          <Th>Salary Type</Th>
          <Th>Salary</Th>
          <Th>Department</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((item) => (
          <Tr>
            <Td>{item.name}</Td>
            <Td>{item.lastname}</Td>
            <Td>
              <Img src={item.image} alt="profileImage" w="100px" />
            </Td>
            <Td isNumeric>{item.phone}</Td>
            <Td>{item.email}</Td>
            <Td isNumeric>{item.hours}</Td>
            <Td>{item.salarytype}</Td>
            <Td isNumeric>{item.salary}</Td>
            <Td>{item.department}</Td>
            <Td>
              <Edit {...item} setData={setData} />
            </Td>
            <Td>
              <Button
                onClick={() => handleDelete(item._id)}
                colorScheme="red"
                variant="outline"
              >
                DELETE
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
