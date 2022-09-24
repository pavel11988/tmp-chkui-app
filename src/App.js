import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Header } from './components/Header';
import { ListContacts } from './components/ListContacts';
import { Hero } from './components/Hero';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    hero_text: `'Open Sans', sans-serif`,
    hero_title: `'Raleway', sans-serif`,
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Hero />
      <ListContacts />
    </ChakraProvider>
  );
}

export default App;
