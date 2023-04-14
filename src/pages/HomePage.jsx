import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
// import image from './../images/phone_removebg.png';
import { getError, getIsLoading } from 'redux/selectors';

function HomePage() {
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      //   maxW="1280px"
      //   h="100vh"
      m="0 auto"
      p="60px 30px"
      bg="champagne"
    >
      {!isLoading && (
        <Box>
          {error && <Text>Some error occured... With message {error}</Text>}
        </Box>
      )}
      {/* <Image
        boxSize="100px"
        objectFit="cover"
        src={image}
        alt="Phone"
        w={{ base: '350px', lg: '450px' }}
        h={{ base: '350px', lg: '450px' }}
        mb={{ base: '50px' }}
      />
      <Box w="50vw">
        {!isLoading && (
          <Text
            fontFamily="Montserrat"
            fontSize={{ base: '26px', md: '34px', lg: '54px' }}
            fontWeight={{ base: '700', lg: '800' }}
            lineHeight="1.3"
            letterSpacing="0.03em"
            textAlign="center"
          >
            Hi, I'm your phonebook !
          </Text>
        )}
        {error.length > 0 && <p>Some error occured... With message {error}</p>}
      </Box> */}
    </Flex>
  );
}

export default HomePage;
