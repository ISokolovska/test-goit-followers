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
import { changeFollower, fetchUsers } from 'redux/operations';
import {
  getError,
  getFollowedUsers,
  getIsLoading,
  getUsers,
} from 'redux/selectors';
import { addFollowedUsers, deleteFollowedUsers } from 'redux/usersSlice';
import { Loader } from 'components/Loader/Loader';
import logo from './../../images/logo.svg';
import image from './../../images/followers.png';
import boy from './../../images/boy.png';
import rectangle from './../../images/rectangle.png';

const UsersList = () => {
  const users = useSelector(getUsers);
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);
  const followedUsers = useSelector(getFollowedUsers);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const handleShowMoreUsers = async () => {
    setPage(prevPage => prevPage + 1);
  };

  const onAddFollowers = user => {
    console.log(followedUsers);
    const userWithMyFollowers = followedUsers.find(
      followedUser => followedUser.id === user.id
    );
    if (!userWithMyFollowers) {
      user = { ...user, followers: user.followers + 1 };
      dispatch(changeFollower(user));
      dispatch(addFollowedUsers(user));
    } else if (userWithMyFollowers) {
      user = { ...user, followers: user.followers - 1 };
      dispatch(changeFollower(user));
      dispatch(deleteFollowedUsers(user.id));
    }
  };

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [page]);

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
                  {!followedUsers.find(elem => elem.id === user.id) ? (
                    <Button
                      type="button"
                      variant="cardButton"
                      background="accentColor"
                      _hover={{
                        background: 'buttonSecondColor',
                      }}
                      mt="26px"
                      mb="16px"
                      onClick={() => onAddFollowers(user)}
                    >
                      Follow
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      variant="cardButton"
                      background="buttonSecondColor"
                      _hover={{
                        background: 'accentColor',
                      }}
                      mt="26px"
                      mb="16px"
                      onClick={() => onAddFollowers(user)}
                    >
                      Following
                    </Button>
                  )}
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
          Load More
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
