import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const cardButton = defineStyle({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '14px 28px',
  gap: '6px',

  width: '196px',
  height: '50px',

  background: 'accentColor',
  boxShadow: 'buttonShadow',
  borderRadius: '10.3108px',

  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '18px',
  lineHeight: '1.2',
  textTransform: 'uppercase',
  color: 'buttonTextColor',
  _focus: {
    background: 'buttonSecondColor',
  },
  _hover: {
    background: 'buttonSecondColor',
  },
});

export const buttonTheme = defineStyleConfig({
  variants: {
    cardButton,
  },
});
