import { Heading, Text, Flex } from '@chakra-ui/react';

function Aboutus() {
    return (
        <Flex bg="teal.400" color="white" textAlign="center" p={10} boxShadow="md" height="700px" flexDirection="column" justifyContent="center">
            <Heading as="h1" fontSize={{ base: '2xl', md: '4xl' }} mb={4}>
                About Us
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} mb={8}>
                test
            </Text>
        </Flex>
    )
}

export default Aboutus