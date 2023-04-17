import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Box, Button, Flex, Link, Select } from '@chakra-ui/react';

// import { getError, getIsLoading } from 'redux/selectors';

import { resetState } from 'redux/usersSlice';
import UsersList from 'components/UsersList/UsersList';

function UsersPage() {
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);
  const dispatch = useDispatch();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const [filter, setFilter] = useState('all');
  return (
    <Flex
      className="font-montserrat"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      maxW="1280px"
      m="0 auto"
    >
      <Flex
        flexDirection="baseline"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Link
          as={NavLink}
          to={backLinkHref}
          onClick={() => {
            dispatch(resetState());
          }}
        >
          <Button
            leftIcon={<IoMdArrowRoundBack size={30} color="darkViolet" />}
            h="40px"
            mr="50px"
            borderColor="darkViolet"
            _hover={{ borderColor: 'buttonSecondColor' }}
            variant="outline"
          ></Button>
        </Link>
        <Select
          // variant="outline"
          m="0 auto"
          mb="30px"
          w="300px"
          fontFamily="Montserrat"
          fontStyle="normal"
          fontWeight="500"
          fontSize="20px"
          lineHeight="1.2"
          color="buttonTextColor"
          border="1px solid "
          borderColor="darkViolet"
          _hover={{ borderColor: 'buttonSecondColor' }}
          _focus={{ borderColor: 'darkViolet', boxShadow: 'none' }}
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
            following
          </option>
        </Select>
      </Flex>

      <UsersList filter={filter} />
      {/* {!isLoading && <UsersList />}
      {error.length > 0 && (
        <Text>Some error occured... With message {error}</Text>
      )} */}
    </Flex>
  );
}

export default UsersPage;
