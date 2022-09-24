import { Box, Container, Image, Text, useColorMode } from '@chakra-ui/react';

const Hero = () => {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Container maxW="container.lg" position="relative">
        <Image
          src={
            colorMode === 'light'
              ? 'https://celes.club/uploads/posts/2022-04/1651182839_1-celes-club-p-goluboe-nebo-bez-oblakov-priroda-krasivo-f-1.jpg'
              : 'https://img.freepik.com/premium-photo/milky-way-galaxy-with-stars-space-dust-universe_33900-3.jpg?w=2000'
          }
          alt="hero_bg"
          objectFit="cover"
          w="100%"
          h="50vh"
        />

        <Box
          position="absolute"
          transform="translate(-50%, -50%)"
          top="50%"
          left="50%"
          textAlign="center"
        >
          <Text fontSize={30}>It's test app with</Text>
          <Text fontSize={35}>Chakra UI</Text>
        </Box>
      </Container>
    </Box>
  );
};

export { Hero };
