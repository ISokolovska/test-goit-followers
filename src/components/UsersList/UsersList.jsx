// import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Flex,
  Image,
  ListItem,
  OrderedList,
  Text,
} from '@chakra-ui/react';
import logo from './../../images/logo.svg';
import image from './../../images/followers.png';
import boy from './../../images/boy.png';
// import rectangle from './../../images/rectangle.png';
import { useState, useEffect } from 'react';
import { getUsersApi } from 'services/api';

import { Loader } from 'components/Loader/Loader';

const UsersList = ({ users }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isClick, setClick] = useState(true);
  console.log(setClick);
  // const [followers, setFollowers] = useState('');

  return (
    <Box>
      {isLoading === true && <Loader />}
      <OrderedList>
        {users.map(user => {
          return (
            <ListItem key={user.id}>
              <Flex
                flexDir="column"
                justifyContent="center"
                alignItems="center"
                w="380px"
                h="460px"
                p="20px 20px 36px 20px"
                bg="linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)"
                boxShadow="mainShadow"
                borderRadius="20px"
              >
                <Image
                  src={logo}
                  alt="Logo"
                  boxSize="76px 22px"
                  position="relative"
                  top="20px"
                  left="-130px"
                ></Image>
                <Image
                  objectFit="cover"
                  src={image}
                  alt="Check and question"
                  boxSize="308px 168px"
                  mt="8px"
                ></Image>
                {/* <Image
          src={rectangle}
          alt="Rectangle"
          width="100%"
          height="8px"
          position="relative"
          top="28px"
        ></Image> */}
                <Image
                  src={boy}
                  alt="Boy"
                  boxSize="80px"
                  position="relative"
                  top="-18px"
                ></Image>
                <Text variant="textMain">{user.tweets} tweets</Text>
                <Text variant="textMain" mt="16px">
                  {user.followers} Followers
                </Text>
                {isClick && (
                  <Button
                    variant={isClick ? 'cardButton' : 'cardButtonClick'}
                    mt="26px"
                    mb="16px"
                    // onClick={() => {
                    //   console.log(123);
                    //   setClick(isClick);
                    // }}
                  >
                    Follow
                  </Button>
                )}
              </Flex>
            </ListItem>
          );
        })}
      </OrderedList>
    </Box>
  );
};

export default UsersList;

// UsersList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };
