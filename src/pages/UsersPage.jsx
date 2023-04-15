import React from 'react';
// import { useSelector } from 'react-redux';
// import { Box, Text } from '@chakra-ui/react';
// import { getError, getIsLoading } from 'redux/selectors';
import UsersList from 'components/UsersList/UsersList';
import { Box, Button, Link } from '@chakra-ui/react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useLocation } from 'react-router-dom';

function UsersPage() {
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);
  const location = useLocation();
  console.log(location);
  console.log(location.state);
  const backLinkHref = location.state?.from ?? '/';

  return (
    <Box className="font-montserrat">
      <Link to={backLinkHref}>Go back</Link>
      {/* <Link to={'home'} state={{ from: location.state?.from }}>
        <Button
          leftIcon={<IoMdArrowRoundBack size={50} />}
          size="lg"
          ml="50px"
          colorScheme="green"
          variant="outline"
        ></Button>
      </Link> */}

      <UsersList />
      {/* {!isLoading && <UsersList />}
      {error.length > 0 && (
        <Text>Some error occured... With message {error}</Text>
      )} */}
    </Box>
  );
}

export default UsersPage;
