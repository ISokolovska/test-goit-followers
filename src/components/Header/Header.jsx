import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Box, Container } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

function Header() {
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
        <Link variant="headerLink" as={NavLink} to="/" mr="50px">
          Home
        </Link>
        <Link variant="headerLink" as={NavLink} to="/users">
          Users
        </Link>
      </Container>
    </Box>
  );
}

export default Header;
