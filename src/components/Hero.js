import { Heading, Text, Box } from '@chakra-ui/react';

function Hero() {
    const imageUrl = 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    return (
        <Box
            bgImage={`url(${imageUrl})`}
            bgSize="cover"
            bgPosition="center"
            minHeight="100vh"
            color="white"
            textAlign="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center">
            <Heading as="h1" fontSize={{ base: '2xl', md: '4xl' }} mb={4} textShadow="2px 2px 4px rgba(0, 0, 0, 0.90)">
                Welcome to Audio Signature
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} mb={8} textShadow="2px 2px 4px rgba(0, 0, 0, 0.90)">
                Where Music comes to life
            </Text>
        </Box>
    );
}

export default Hero;
