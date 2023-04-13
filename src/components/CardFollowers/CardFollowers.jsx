// import PropTypes from 'prop-types';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import logo from './../../images/logo.svg';
import image from './../../images/followers.png';
import boy from './../../images/boy.png';
import { useState } from 'react';

const CardFollowers = () => {
  const [click, setClick] = useState(true);
  const [followers, setFollowers] = useState('');

  return (
    <Box>
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        w="380px"
        h="460px"
        p="20px 20px 36px 20px"
        bg="linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)"
        boxShadow="mainShadow"
        borderRadius="20px"
      >
        <Image
          src={logo}
          alt="Logo"
          width="76px"
          height="22px"
          position="relative"
          top="20px"
          left="-130px"
        ></Image>
        <Image
          objectFit="cover"
          src={image}
          alt="Check and question"
          width="308px"
          height="168px"
          mt="8px"
        ></Image>
        <Image
          src={boy}
          alt="boy"
          width="80px"
          height="80px"
          position="relative"
          top="-18px"
        ></Image>

        <Text variant="textMain">777 tweets</Text>
        <Text variant="textMain" mt="16px">
          100,500 Followers
        </Text>
        {click ? (
          <Button
            variant="cardButton"
            mt="26px"
            mb="16px"
            bg="buttonSecondColor"
            onClick={() => {
              setClick(click);
            }}
          >
            Following
          </Button>
        ) : (
          <Button
            variant="cardButton"
            mt="26px"
            mb="16px"
            onClick={() => {
              setClick(click);
            }}
          >
            Follow
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export default CardFollowers;

// CardFollowers.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };
