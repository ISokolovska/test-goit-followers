import { Box } from '@chakra-ui/react';
import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

export function Loader() {
  return (
    <Box
      position="fixed"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
      margin="0 auto"
    >
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </Box>
  );
}
