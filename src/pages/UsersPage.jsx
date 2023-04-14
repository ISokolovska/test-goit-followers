import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Text } from '@chakra-ui/react';
import { getError, getIsLoading } from 'redux/selectors';
import UsersList from 'components/UsersList/UsersList';
import { fetchUsers } from 'redux/operations';

function UsersPage() {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(fetchContacts());
  //   }, [dispatch]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <Box
      //   display="flex"
      //   flexDirection="column"
      //   alignItems="center"
      //   m="0 auto"
      //   bg="champagne"
      //   maxWidth="1280px"
      //   h="100vh"
      //   p="60px 30px "
      className="font-montserrat"
    >
      <UsersList />
      {/* {!isLoading && <UsersList />}
      {error.length > 0 && (
        <Text>Some error occured... With message {error}</Text>
      )} */}
    </Box>
  );
}

export default UsersPage;
