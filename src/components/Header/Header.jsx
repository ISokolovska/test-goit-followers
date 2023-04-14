import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Container } from '@chakra-ui/react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <Box as="header" w="100%" bg="white">
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="1280px"
        m="0 auto"
        p="30px 16px"
      >
        <Link variant="headerLink" mr="40px" as={NavLink} to="/">
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
