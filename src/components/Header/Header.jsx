import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, Box, Container } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { resetState } from 'redux/usersSlice';

function Header() {
  const dispatch = useDispatch();
  return (
    <Box as="header" w="100%" bg="white">
      <Container
        display="flex"
        justifyContent="center"
        alignItems="center"
        maxWidth="1280px"
        m="0 auto"
        p="30px 16px"
      >
        <Link
          variant="headerLink"
          as={NavLink}
          to="/"
          mr="150px"
          onClick={() => {
            dispatch(resetState());
          }}
        >
          Home
        </Link>
        <Link variant="headerLink" as={NavLink} to="/tweets">
          Tweets
        </Link>
      </Container>
    </Box>
  );
}

export default Header;
