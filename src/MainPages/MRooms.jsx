import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import {
  Input,
  Button,
  Text,
  Card,
  CardBody,
  CardHeader,
  Heading,
  CardFooter,
} from '@chakra-ui/react';

const MRooms = () => {
  let [value, setValue] = React.useState('');

  let handleInputChange = e => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  React.useEffect(() => {
    const func = () => {};
    func();
  }, []);

  const nextPage = () => {};
  return (
    <Box>
      <Text mt="8px" mb="8px">
        Create Room
      </Text>
      <Input
        value={value}
        onChange={handleInputChange}
        placeholder="Please Enter your Room Number Here..."
        size="sm"
      />
      <Button
        marginTop={5}
        backgroundColor={'#000'}
        color={'#fff'}
        onClick={nextPage()}
      >
        Submit
      </Button>
      <Text
        fontWeight={600}
        fontSize={24}
        alignSelf={'center'}
        alignItems={'center'}
        mt={5}
        ml={0}
      >
        ROOMS LIST
      </Text>
      <Flex flexDir={'row'}>
        <Card align="center" w={'30%'} mt={5} marginLeft={0} marginRight={5}>
          <CardHeader>
            <Heading size="md">IT Conferences</Heading>
          </CardHeader>
          <CardBody alignItems={'center'}>
            <Text justifySelf={'center'} textAlign={'center'}>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme="blue">View here</Button>
          </CardFooter>
        </Card>
        <Card align="center" w={'30%'} mt={5} marginLeft={0} marginRight={5}>
          <CardHeader>
            <Heading size="md">Gov Officials Conference</Heading>
          </CardHeader>
          <CardBody>
            <Text justifySelf={'center'} textAlign={'center'}>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme="blue">View here</Button>
          </CardFooter>
        </Card>
        <Card align="center" w={'30%'} mt={5} marginLeft={0} marginRight={5}>
          <CardHeader>
            <Heading size="md">Quant Traders Conference</Heading>
          </CardHeader>
          <CardBody>
            <Text justifySelf={'center'} textAlign={'center'}>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme="blue">View here</Button>
          </CardFooter>
        </Card>
      </Flex>
    </Box>
  );
};

export default MRooms;
