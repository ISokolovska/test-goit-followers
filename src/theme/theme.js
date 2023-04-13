import { extendTheme } from '@chakra-ui/react';
import { buttonTheme } from './components/buttons.extend';
import { TextTheme } from './components/texts.extend';

const shadows = {
  mainShadow: '-2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23)',
  buttonShadow: '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)',
};

const colors = {
  accentColor: '#EBD8FF',
  buttonTextColor: '#373737',
  buttonSecondColor: '#5CD3A8',
};

const styles = {
  global: () => ({
    body: {
      bg: 'white',
    },
  }),
};

const fonts = {
  heading: `'Montserrat', sans-serif`,
  body: `'Montserrat', sans-serif`,
};
const components = { Button: buttonTheme, Text: TextTheme };

const theme = extendTheme({
  colors,
  shadows,
  styles,
  components,
  fonts,
});
export default theme;
