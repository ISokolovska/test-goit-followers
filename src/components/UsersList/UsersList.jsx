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
import { getFollowedUsers, getUsers } from 'redux/selectors';
import { addFollowedUsers, deleteFollowedUsers } from 'redux/usersSlice';
import logo from './../../images/logo.svg';
import image from './../../images/followers.png';
import boy from './../../images/boy.png';

const UsersList = ({ filter }) => {
  const users = useSelector(getUsers);
  console.log(users);
  const followedUsers = useSelector(getFollowedUsers);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const handleShowMoreUsers = async () => {
    setPage(prevPage => prevPage + 1);
  };

  const onAddFollowers = user => {
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

  const addComaToFollowers = followers => {
    let str = String(followers);
    let arr = [];
    let count = Math.ceil(str.length / 3);
    for (let i = 1; i <= count; i++) {
      if (str.length >= 3) {
        arr.push(str.slice(-3, str.length));
      } else {
        arr.push(str.slice(0, str.length));
      }
      str = str.slice(0, -3);
    }
    arr = arr.reverse().join(',');

    return arr;
  };

  const followedUsersId = followedUsers.map(elem => elem.id);
  const onFilterContacts = users => {
    if (filter === 'follow') {
      const filteredContacts = users.filter(
        user => !followedUsersId.includes(user.id)
      );
      return filteredContacts;
    }
    if (filter === 'following') {
      const filteredContacts = users.filter(user =>
        followedUsersId.includes(user.id)
      );
      return filteredContacts;
    }
  };
  const filteredContacts = filter === 'all' ? users : onFilterContacts(users);

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [page, dispatch]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <List
        display="flex"
        flexWrap="wrap"
        justifyContent="flex-start"
        alignItems="center"
        gap="20px 70px"
      >
        {filteredContacts &&
          filteredContacts.map(user => {
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
                  bgGradient="linear(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)"
                  boxShadow="mainShadow"
                  borderRadius="20px"
                  _before={{
                    content: `""`,
                    position: 'absolute',
                    width: '380px',
                    height: '8px',
                    bg: 'accentColor',
                    boxShadow:
                      '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF',
                  }}
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
                    src={boy}
                    // src={user.avatar}
                    alt="Boy"
                    boxSize="80px"
                    position="relative"
                    top="-18px"
                    border="9px solid #EBD8FF"
                    bgGradient="linear(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)"
                    box-shadow=" 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF"
                    borderRadius="50px"
                  ></Image>
                  <Text variant="textMain">{user.tweets} tweets</Text>
                  <Text variant="textMain" mt="16px">
                    {addComaToFollowers(user.followers)} Followers
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
        {users.length >= 9 && (
          <Button
            type="button"
            variant="loadMoreButton"
            onClick={handleShowMoreUsers}
          >
            Load More
          </Button>
        )}
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
