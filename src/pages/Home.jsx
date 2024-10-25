// require('dotenv').config();
import React from 'react';
import { Input, Button, Text, Textarea } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  let [value, setValue] = React.useState('');
  let [room, setRoom] = React.useState('');
  const navigate = useNavigate();
  let handleInputChange = e => {
    let inputValue = e.target.value;
    setValue(inputValue);
    localStorage.setItem('linkedin',inputValue);
  };
  let handleInputChangeRoom = e => {
    let inputValue = e.target.value;
    setRoom(inputValue);
    localStorage.setItem('room',inputValue);
  };

  const nextPage = async() => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/model`,{'linkedinurl':value,'room_id':room});
      navigate(`/${room}`);
    } catch (error) {
      window.alert(error);
    }
  };

  return (
    <>
      <Text mb="8px">Linkedin Profile Url: </Text>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder="Please Enter your linkedin profile URL Link Here..."
        size="sm"
      />
      <Text mt="8px" mb="8px">
        Room Number: 
      </Text>
      <Input
        value={room}
        onChange={handleInputChangeRoom}
        placeholder="Please Enter your Room Number Here..."
        size="sm"
      />
      <Button
        marginTop={5}
        backgroundColor={'#000'}
        color={'#fff'}
        onClick={nextPage}
      >
        Submit
      </Button>
    </>
  );
};

export default Home;
