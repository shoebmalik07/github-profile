import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spacer,
} from "@chakra-ui/react";
import { useState } from "react";
import FormContainer from "./FormContainer";
import axios from "axios";
import Card from "./Card";
import ErrorMessage from "./ErrorMessage";

const LoginScreen = () => {
  const [name, setName] = useState("");
  const [newData, setNewData] = useState({});
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${name}`);
      console.log(response);
      setNewData(response.data);
      if (response.status === 200) {
        setShow(true);
        setError(false);
      }
    } catch (error) {
      setError(true);
      setShow(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetchData();
  };
  return (
    <>
      <Flex w="full" alignItems="center" justifyContent="center" py="p">
        <FormContainer>
          <Heading as="h1" mb="8" fontSize="3xl">
            Github Profile
          </Heading>

          <form onSubmit={submitHandler}>
            <FormControl id="email">
              <FormLabel htmlFor="email">Enter your name</FormLabel>
              <Input
                isRequired
                id="name"
                type="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>

            <Spacer h="3" />

            <Button type="submit" colorScheme="teal" mt="4">
              Submit
            </Button>
          </form>
        </FormContainer>
      </Flex>
      {show && <Card data={newData} />}
      {error && <ErrorMessage />}
    </>
  );
};

export default LoginScreen;
