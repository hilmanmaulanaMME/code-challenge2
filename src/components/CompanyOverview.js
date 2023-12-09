import { Heading, Text, Flex, Image } from '@chakra-ui/react';

function CompanyOverview() {
    const imageUrl = 'https://images.unsplash.com/photo-1453090927415-5f45085b65c0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    return (
        <Flex
        bg="black"
        color="white"
        p={10}
        boxShadow="md"
        alignItems="center"
        justifyContent="space-evenly">
        <Image height="500px" src={imageUrl} alt="Company Overview" borderRadius='30px'/>

            <Flex flexDirection="column" textAlign="left" maxWidth="600px">
                <Heading as="h1" fontSize={{ base: '2xl', md: '4xl' }} mb={4}>
                    Company Overview
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} mb={8}>
                    test
                </Text>
            </Flex>
        </Flex>
    );
}

export default CompanyOverview;
