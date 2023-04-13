import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const textMain = defineStyle({
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '20px',
  lineHeight: '1.2',
  textTransform: 'uppercase',
  color: 'accentColor',
});

export const TextTheme = defineStyleConfig({
  variants: {
    textMain,
  },
});
