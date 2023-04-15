import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
// import image from './../images/phone_removebg.png';
import { getError, getIsLoading } from 'redux/selectors';
import { Link } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

function HomePage() {
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);
  const location = useLocation();

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      maxW="1280px"
      h="100vh"
      m="0 auto"
      p="60px 30px"
      bg="accentColor"
    >
      <Link to="/" state={{ from: location }}>
        {/* {!isLoading && (
          <Box>
            {error && <Text>Some error occured... With message {error}</Text>}
          </Box>
        )} */}
      </Link>
    </Flex>
  );
}

export default HomePage;
