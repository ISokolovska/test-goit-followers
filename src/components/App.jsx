import { Box } from '@chakra-ui/react';
import CardFollowers from './CardFollowers/CardFollowers';

export const App = () => {
  return (
    <Box
      className="font-montserrat"
      display="flex"
      justifyContent="center"
      alignItems="center"
      p="60px"
    >
      <CardFollowers />
    </Box>
  );
};
