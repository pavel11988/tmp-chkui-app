import { Box, Container, Flex, Image, useColorMode } from '@chakra-ui/react';
import Logo from '../images/logo.svg';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const Header = () => {
  const { colorMode } = useColorMode();
  return (
    <Box as="header" py={4} bg={colorMode === 'dark' ? 'gray.600' : 'gray.100'}>
      <Container maxW="container.lg">
        <Flex justifyContent="space-between" alignItems="center">
          <Image src={Logo} alt="logo" boxSize="50px" objectFit="cover" />
          <ColorModeSwitcher />
        </Flex>
      </Container>
    </Box>
  );
};

export { Header };
