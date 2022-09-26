import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Card({data}) {
  return (
    <Center py={7}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={'white'}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={4}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={
            data.avatar_url
          }
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {data.name}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          @{data.login}
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3} fontWeight = 'bold'>
          No of public repos : {data.public_repos}
         
        </Text>
        <Text mt='3' fontWeight='bold'>
          No of gists : {data.public_gists}
        </Text>

       

        {/* <Stack mt={10} direction={'row'} spacing={8}> */}
          
         <Text fontStyle='oblique' fontWeight='semibold' mt='10'>Created at : {data.created_at.substring(0, 10)}</Text>
        {/* </Stack> */}
      </Box>
    </Center>
  );
}