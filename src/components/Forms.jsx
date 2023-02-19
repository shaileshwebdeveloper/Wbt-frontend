import React, { useState } from "react";
import { addEmployees } from "./utils/employees";
import { Box, Flex, Input, Select, Text } from "@chakra-ui/react";

const initState = {
  name: "",
  lastname: "",
  image: "",
  phone: "",
  email: "",
  hours: 0,
  salarytype: "",
  salary: "",
  department: "",
};

export const Forms = () => {
  const [formstate, setFormState] = useState(initState);

  const [users, setUsers] = useState([]);

  const [payPerHour, setPayPerHour] = useState(100);

  const handleChange = (e) => {
    const { name: key, value } = e.target;

    if (value === "Hourly") {
      if (formstate.hours < 100) {
        let wage = formstate.hours * (0.75 * Number(payPerHour));
        // console.log(typeof(wage))
        formstate.salary = wage;
      } else {
        formstate.salary = 30000;
      }
    } else if (value === "Monthly") {
      formstate.salary = Number(3000);
    }
    setFormState({
      ...formstate,
      [key]: value,
    });
  };

  // console.log(formstate);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, formstate]);
    setFormState(initState);

    addEmployees(formstate);
  };

  // console.log(users, formstate);

  return (
    <Box>
      <Text fontSize={"1.5rem"} as="b">
        Employee Registration Forms
      </Text>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "30%",
          margin: "auto",
          border: "1px solid teal",
          padding: "1rem",
          marginTop: "1rem",
        }}
      >
        <Box>
          <Input
                  required
            value={formstate.name}
            name="name"
            onChange={handleChange}
            placeholder="First Name"
            mb={"1rem"}
            border="1px solid teal"
          />
        </Box>

        <Box>
          <Input
            value={formstate.lastname}
            name="lastname"
            onChange={handleChange}
            placeholder="Last Name"
            mb={"1rem"}
            border="1px solid teal"
            required
          />
        </Box>

        <Box>
          <Input
            type="file"
            value={formstate.image}
            name="image"
            onChange={handleChange}
            mb={"1rem"}
            border="1px solid teal"
            required
          />
        </Box>

        <Box>
          <Input
               required
            type="Number"
            value={formstate.phone}
            name="phone"
            onChange={handleChange}
            placeholder="Phone Number"
            mb={"1rem"}
            border="1px solid teal"
          />
        </Box>

        <Box>
          <Input
               required
            type="email"
            value={formstate.email}
            name="email"
            onChange={handleChange}
            placeholder="Email"
            mb={"1rem"}
            border="1px solid teal"
          />
        </Box>

        <Flex justifyContent={"space-evenly"} gap="1rem">
          <Text as="b">Hours</Text>
          <Input
            type="Number"
            value={formstate.hours}
            name="hours"
            onChange={handleChange}
            placeholder="Work Hours"
            mb={"1rem"}
            border="1px solid teal"
            w="30%"
          />
        </Flex>

        <Flex justifyContent={"space-evenly"} gap="1rem">
          <Text as="b">Salary Type</Text>
          <Select
               required
            type="text"
            value={formstate.salarytype}
            name="salarytype"
            onChange={handleChange}
            placeholder="Salary Type"
            w="30%"
            mb={"1rem"}
          >
            <option value="Hourly">Hourly</option>
            <option value="Monthly">Monthly</option>
          </Select>
        </Flex>

        <Box>
          <Input
               required
            type="Number"
            value={formstate.salary}
            name="salary"
            onChange={handleChange}
            placeholder="Salary"
            mb={"1rem"}
            border="1px solid teal"
          />
        </Box>

        <Flex justifyContent={"space-evenly"} gap="1rem">
          <Text as="b">Department</Text>
          <Select
               required
            value={formstate.department}
            name="department"
            onChange={handleChange}
            w="30%"
            mb={"1rem"}
          >
            <option value="Finance">Finance</option>
            <option value="IT">IT</option>
            <option value="Marketing">Marketing</option>
          </Select>
        </Flex>

        <Input type="submit" />
      </form>
    </Box>
  );
};
