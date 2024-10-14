import React from 'react';
import { Input, Button, Text, Textarea } from '@chakra-ui/react';

const Home = () => {
  let [value, setValue] = React.useState('');

  let handleInputChange = e => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  const nextPage = () => {};

  return (
    <>
      <Text mb="8px">Linkedin Profile Url: {value}</Text>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder="Please Enter your linkedin profile URL Link Here..."
        size="sm"
      />
      <Text mt="8px" mb="8px">
        Room Number: {value}
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
    </>
  );
};

export default Home;
