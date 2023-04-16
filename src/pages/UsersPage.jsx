import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { Box, Text } from '@chakra-ui/react';
// import { getError, getIsLoading } from 'redux/selectors';
import UsersList from 'components/UsersList/UsersList';
import { Box, Button, Link, Select } from '@chakra-ui/react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { NavLink, useLocation } from 'react-router-dom';
import { getFollowedUsers } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { resetState } from 'redux/usersSlice';

function UsersPage() {
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);
  const dispatch = useDispatch();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const followedUsers = useSelector(getFollowedUsers);
  const [filter, setFilter] = useState('all');
  return (
    <Box className="font-montserrat">
      <Link
        as={NavLink}
        to={backLinkHref}
        onClick={() => {
          dispatch(resetState());
        }}
      >
        Go back
      </Link>
      <Select
        variant="outline"
        m="0 auto"
        mb="30px"
        w="300px"
        fontFamily="Montserrat"
        fontStyle="normal"
        fontWeight="500"
        fontSize="20px"
        lineHeight="1.2"
        color="buttonTextColor"
        // placeholder="Select option"
        borderColor="darkViolet"
        _hover={{ borderColor: 'buttonSecondColor' }}
        _focus={{ borderColor: 'buttonSecondColor' }}
        onChange={e => {
          setFilter(e.target.value);
        }}
      >
        <option value="all" placeholder="medium size" size="md">
          show all
        </option>
        <option value="follow" placeholder="medium size" size="md">
          follow
        </option>
        <option value="following" placeholder="medium size" size="md">
          followings
        </option>
      </Select>

      {/* <Link to={'home'} state={{ from: location.state?.from }}>
        <Button
          leftIcon={<IoMdArrowRoundBack size={50} />}
          size="lg"
          ml="50px"
          colorScheme="green"
          variant="outline"
        ></Button>
      </Link> */}

      <UsersList filter={filter} />
      {/* {!isLoading && <UsersList />}
      {error.length > 0 && (
        <Text>Some error occured... With message {error}</Text>
      )} */}
    </Box>
  );
}

export default UsersPage;
