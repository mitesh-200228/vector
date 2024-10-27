import React from 'react';
import { Box, Flex, useClipboard } from '@chakra-ui/react';
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
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MRooms = () => {
  const [Data, setData] = React.useState({
    room_name: '',
    room_description: '',
    linkedin_profile: '',
  });
  const [rooms, setRooms] = React.useState([]);
  const [roomid, setRoomId] = React.useState('');
  const { hasCopied, onCopy } = useClipboard(roomid);
  const navigate = useNavigate();
  let handleInputChange = e => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    setData(prevData => ({
      ...prevData,
      [inputName]: inputValue,
    }));
  };

  React.useEffect(() => {
    async function trigger() {
      const RoomsList = await axios.get(`${process.env.PUBLIC_URL}/allrooms`);
      setRooms(RoomsList.data.message);
    }
    trigger();
  }, []);

  const CreateRoom = async () => {
    try {
      await axios
        .post(`${process.env.PUBLIC_URL}/rooms`, {linkedin_url:Data.linkedin_profile,room_name:Data.room_name,room_description:Data.room_description})
        .then(data => {
          window.alert('Room Created Successfully!');
          navigate('/');
        })
        .catch(err => {
          window.alert('Internal server error!');
        });
    } catch (error) {
      window.alert('Internal server error!');
    }
  };

  return (
    <Box width={'100%'}>
      <Text fontWeight={700} fontSize={'2xl'} mt="8px" mb="30px">
        Make Your First Room
      </Text>
      <Text mt="8px" mb="8px">
        Room Name:
      </Text>
      <Input
        value={Data.room_name}
        name="room_name"
        onChange={handleInputChange}
        placeholder="Please Enter your Room Name Here..."
        size="sm"
      />
      <Text mt="8px" mb="8px">
        Room Description:
      </Text>
      <Input
        value={Data.room_description}
        name="room_description"
        onChange={handleInputChange}
        placeholder="Please Enter your Room Description Here..."
        size="sm"
      />
      <Text mt="8px" mb="8px">
        Linkedin Profile:
      </Text>
      <Input
        value={Data.linkedin_profile}
        onChange={handleInputChange}
        name="linkedin_profile"
        placeholder="Please Enter your Linkedin Profile Here..."
        size="sm"
      />
      <Button
        marginTop={5}
        backgroundColor={'#000'}
        color={'#fff'}
        onClick={CreateRoom}
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
      {rooms.map(room => {
        return (
          <Flex flexDirection={'column'} width={'100%'}>
            <Card
              align="center"
              mt={5}
              marginLeft={0}
              justifyContent={'center'}
              alignItems={'center'}
              textAlign={'center'}
            >
              <CardHeader>
                <Heading size="md">{room.room_name}</Heading>
              </CardHeader>
              <Flex textAlign={'center'} alignItems={'center'}>
                <Text fontSize={'13px'} fontWeight={600}>
                  Room ID: {room._id}
                </Text>
                <Button onClick={onCopy} size={'xs'} ml={2}>
                  {hasCopied ? 'Copied' : 'Copy'}
                </Button>
              </Flex>
              <CardBody>
                <Text justifySelf={'center'} textAlign={'center'}>
                  {room.room_description}
                </Text>
              </CardBody>
              <CardFooter>
                <Button
                  colorScheme="blue"
                  onClick={() => {
                    navigate(`/rooms/${room._id}`);
                  }}
                >
                  View here
                </Button>
              </CardFooter>
            </Card>
          </Flex>
        );
      })}
    </Box>
  );
};

export default MRooms;
