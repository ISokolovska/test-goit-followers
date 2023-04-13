import { Box } from '@chakra-ui/react';
import UsersList from './UsersList/UsersList';

export const App = () => {
  return (
    <Box
      className="font-montserrat"
      display="flex"
      justifyContent="center"
      alignItems="center"
      p="60px"
    >
      <UsersList />
    </Box>
  );
};
