import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Button,
  Flex,
  Image,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { addFollower, fetchUsers } from 'redux/operations';
import {
  getError,
  getFollowedUsers,
  getIsLoading,
  getUsers,
} from 'redux/selectors';
import { Loader } from 'components/Loader/Loader';
import logo from './../../images/logo.svg';
import image from './../../images/followers.png';
import boy from './../../images/boy.png';
import rectangle from './../../images/rectangle.png';

const cardsPerPage = 8;

const UsersList = () => {
  const users = useSelector(getUsers);
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);
  const followedUsers = useSelector(getFollowedUsers);
  // const [isLoading, setIsLoading] = useState(false);
  // const [errorMsg, setErrorMsg] = useState('');
  const [followers, setFollowers] = useState('');
  const [page, setPage] = useState(cardsPerPage);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);

  const handleShowMoreUsers = () => {
    // setPage(page + cardsPerPage);
  };

  const onAddFollowers = ({ id, followers }) => {
    console.log(followedUsers);
    const userWithMyFollowers = followedUsers.find(
      followedUser => followedUser.id === id
    );
    if (!userWithMyFollowers) {
      setFollowers(followers + 1);
    }
    dispatch(addFollower());
  };

  return (
    <Box>
      {isLoading === true && <Loader />}
      <List
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        gap="15px"
      >
        {users &&
          users.map(user => {
            return (
              <ListItem key={user.id}>
                <Flex
                  flexDir="column"
                  justifyContent="center"
                  alignItems="center"
                  w="380px"
                  h="460px"
                  pt="20px"
                  pb=" 36px "
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
                  <Image
                    src={rectangle}
                    alt="Rectangle"
                    width="380px"
                    height="8px"
                    position="relative"
                    top="28px"
                  ></Image>
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
                  {/* {isClick && ( */}
                  <Button
                    type="button"
                    // variant="cardButton"
                    variant={!followers ? 'cardButton' : 'cardButtonClick'}
                    mt="26px"
                    mb="16px"
                    onClick={onAddFollowers}
                  >
                    Follow
                  </Button>
                  {/* )} */}
                </Flex>
              </ListItem>
            );
          })}
      </List>
      <Flex justifyContent="center">
        <Button
          type="button"
          variant="cardButton"
          mt="26px"
          mb="16px"
          onClick={handleShowMoreUsers}
        >
          {isLoading ? <Loader /> : 'Load More'}
        </Button>
      </Flex>
    </Box>
  );
};

export default UsersList;

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.string.isRequired,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};
