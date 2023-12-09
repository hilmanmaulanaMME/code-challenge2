import { Heading, Text, Flex, Image, Box, SimpleGrid, AspectRatio, alt } from '@chakra-ui/react';

function CompanyOverview() {
    const imageUrl = 'https://images.unsplash.com/photo-1453090927415-5f45085b65c0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    return (
        <Box>
            <Flex bg="black" color="white" p={10} boxShadow="md" alignItems="center" justifyContent="space-evenly">
                <SimpleGrid alignItems='center' columns={[1,1,1,2]}>
                    <Image src={imageUrl} alt="Company Overview" borderRadius='30px' maxW='100%' ratio={4 / 3} maxH='350px'/>
                    <Box flexDirection="column" textAlign="left" maxWidth="600px">
                        <Heading as="h1" fontSize={{ base: '2xl', md: '4xl' }} mb={4} textAlign='center'>
                            Company Overview
                        </Heading>
                        <Text fontSize={{ base: 'md', md: 'lg' }} mb={8} textAlign='justify'>
                        Audio Signature is a premier recording, mixing, and mastering company dedicated to delivering unparalleled audio excellence. With a commitment to sonic perfection, we strive to elevate the artistic vision of musicians and content creators across diverse genres. 
                        </Text>
                    </Box>
                </SimpleGrid>
            </Flex>
        </Box>
    );
}

export default CompanyOverview;
