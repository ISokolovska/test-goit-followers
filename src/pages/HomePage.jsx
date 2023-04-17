import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Box, Flex, Text, Link } from '@chakra-ui/react';
import { getError, getIsLoading } from 'redux/selectors';

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
        {!isLoading && (
          <Box>
            {error && <Text>Some error occured... With message {error}</Text>}
          </Box>
        )}
      </Link>
    </Flex>
  );
}

export default HomePage;
