import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const headerLink = defineStyle({
  p: '15px',
  color: 'darkViolet',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '22px',
  lineHeight: '1.8',
  textTransform: 'uppercase',
  border: '1px solid transparent',
  _focus: {
    textDecoration: 'none',
    color: 'buttonSecondColor',
    border: '1px solid ',
    borderColor: 'buttonSecondColor',
    boxShadow: '0 0 1px 1px #D3D3D333',
  },
  _hover: {
    textDecoration: 'none',
    color: 'buttonSecondColor',
    border: '1px solid ',
    borderColor: 'buttonSecondColor',
    boxShadow: '0 0 1px 1px #D3D3D333',
  },
});

export const linkTheme = defineStyleConfig({
  variants: {
    headerLink,
  },
});
