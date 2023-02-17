import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  Select,
  Flex,
  Text,
  Box,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { updateEmployees } from "./utils/employees";
import axios from "axios";

export function Edit({
  _id,
  name,
  lastname,
  image,
  phone,
  email,
  hours,
  salarytype,
  salary,
  department,
  setData,
}) {
  const [payPerHour, setPayPerHour] = useState(100);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const [payload, setPayload] = useState({
    id: _id,
    name: name,
    lastname: lastname,
    email: email,
    image: image,
    phone: phone,
    hours: hours,
    salarytype: salarytype,
    salary: salary,
    department: department,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (value === "Hourly") {
      if (payload.hours < 100) {
        let wage = payload.hours * (0.75 * Number(payPerHour));
        // console.log(typeof(wage))
        payload.salary = wage;
      } else {
        payload.salary = 30000;
      }
    } else if (value === "Monthly") {
      payload.salary = Number(3000);
    }

    setPayload({
      ...payload,
      [name]: value,
    });
  };

  const getData = () => {
    axios.get("https://wbtech.onrender.com/").then((r) => setData(r.data));
  };

  const handleSubmit = () => {
    updateEmployees(_id, payload).then((r) => getData());
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="teal" variant="outline">
        Edit
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box>
              <Input
                value={payload.name}
                name="name"
                onChange={handleChange}
                placeholder="First Name"
                mb={"1rem"}
                border="1px solid teal"
              />
            </Box>

            <Box>
              <Input
                value={payload.lastname}
                name="lastname"
                onChange={handleChange}
                placeholder="Last Name"
                mb={"1rem"}
                border="1px solid teal"
              />
            </Box>

            <Box>
              <Input
                type="file"
                name="image"
                onChange={handleChange}
                mb={"1rem"}
                border="1px solid teal"
              />
            </Box>

            <Box>
              <Input
                type="Number"
                value={payload.phone}
                name="phone"
                onChange={handleChange}
                placeholder="Phone Number"
                mb={"1rem"}
                border="1px solid teal"
              />
            </Box>

            <Box>
              <Input
                type="email"
                value={payload.email}
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
                value={payload.hours}
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
                type="text"
                value={payload.salarytype}
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
                type="Number"
                value={payload.salary}
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
                value={payload.department}
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
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                handleSubmit();
                onClose();
              }}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
