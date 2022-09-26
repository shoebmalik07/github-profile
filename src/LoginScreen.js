import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import FormContainer from "./FormContainer";
import axios from 'axios'
import Card from './Card'



const LoginScreen = () => {
  const [name, setName] = useState("");
  const [newData, setNewData] = useState({});
  const [show, setShow] = useState(false);
  // const [error,setError] = useState(false)
  

  const fetchData =async ()=>{
    const {data} = await axios.get(`https://api.github.com/users/${name}`)
    setNewData(data)
    

  
  }
  const submitHandler = (e) => {
    e.preventDefault();
    // if(newData.message === "Not Found"){
    //   setError(true)
    // }
    fetchData()
    setShow(true)
    
    
    

  };

console.log(show)
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
    {
      show && (<Card data = {newData}/>)
    }
   </>
  );
};

export default LoginScreen;
