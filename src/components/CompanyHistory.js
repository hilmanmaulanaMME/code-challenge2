import { Heading, Text, Flex, SimpleGrid, Box, Card, CardBody } from '@chakra-ui/react';

function CompanyHistory() {
    return (
        <Box  bg="black" color="white" height="auto">
            <Box>
                <Card>
                    <CardBody bg='grey'>
                        <Flex bg="black" color="white" p={10} boxShadow="md" alignItems="center" justifyContent="space-evenly">
                            <Heading as="h1" fontSize={{ base: '2xl', md: '4xl' }} mb={4} alignItems="center">
                                Company History
                            </Heading>
                            <SimpleGrid  spacing='30px' margin='30px' >
                                <Box>
                                <Box>
                                    <Heading as='b'>2018</Heading>
                                    <Text mb='8' mt='3'>The conceptualization of Audio Signature begins, driven by a vision to establish a leading recording, mixing, and mastering company.</Text>
                                </Box>
                                <Box>
                                    <Heading as='b'>2019</Heading>
                                    <Text mb='8' mt='3'>The founding team is assembled, marking the start of the planning phase to bring the vision to life.</Text>
                                </Box>
                                <Box>
                                    <Heading as='b'>2020</Heading>
                                    <Text mb='8' mt='3'>Construction kicks off for the first state-of-the-art recording studio, setting the foundation for a cutting-edge audio production facility.</Text>
                                </Box>
                                <Box>
                                    <Heading as='b'>2021</Heading>
                                    <Text mb='8' mt='3'>Audio Signature officially opens its doors, providing recording services to local musicians and artists. Positive reviews and word-of-mouth contribute to the studio early success.</Text>
                                </Box>
                                <Box>
                                    <Heading as='b'>2022</Heading>
                                    <Text mb='8' mt='3'>With the addition of mixing and mastering professionals, Audio Signature expands its services, becoming a comprehensive audio production destination.</Text>
                                </Box>
                                <Box>
                                    <Heading as='b'>2023</Heading>
                                    <Text mb='8' mt='3'>Recognition grows as Audio Signature celebrates five years since its inception. The company solidifies its reputation as a reputable name in the industry, setting the stage for continued growth and excellence.</Text>
                                </Box>
                                </Box>
                            </SimpleGrid>
                        </Flex>
                    </CardBody>
                </Card>
            </Box>
        </Box>
    )
}

export default CompanyHistory