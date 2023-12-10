import { Heading, Text, Flex, Box, SimpleGrid } from '@chakra-ui/react';

function Culture() {
    return (
        <Box  bg="black" color="white" height="auto" paddingTop='40px'>
            <Heading as="h1" fontSize={{ base: '2xl', md: '4xl' }} mb={4} textAlign="center">
                Our Culture
            </Heading>
            <Flex bg="black" color="white" p={10} boxShadow="md" alignItems="center" justifyContent="space-evenly">
                <SimpleGrid  spacing='30px' margin='30px'>
                    <Box>
                        <Box>
                            <Heading as='b'>Harmonic Foundation</Heading>
                            <Text mb='8' mt='3'>Rooted in a shared passion for sound, our culture is founded on collaboration and a commitment to excellence.</Text>
                        </Box>
                        <Box>
                            <Heading as='b'>Melodic Innovation</Heading>
                            <Text mb='8' mt='3'>Growth translates into a culture of creativity and innovation, embracing diverse talents and fostering a symphony of possibilities.</Text>
                        </Box>
                        <Box>
                            <Heading as='b'>Client-Centric Harmony</Heading>
                            <Text mb='8' mt='3'>A commitment to clients defines our culture, leading to tailored services, open communication, and client satisfaction.</Text>
                        </Box>
                        <Box>
                            <Heading as='b'>Resonant Innovation</Heading>
                            <Text mb='8' mt='3'>Our culture resonates with innovation, driven by a continuous pursuit of knowledge and the adoption of cutting-edge audio technology.</Text>
                        </Box>
                        <Box>
                            <Heading as='b'>Sonic Excellence Jubilee</Heading>
                            <Text mb='8' mt='3'>Celebrating a jubilee of creativity, our culture embodies a commitment to sonic excellence, making us more than a company - a community passionate about crafting audio masterpieces.</Text>
                        </Box>
                    </Box>
                </SimpleGrid>
            </Flex>
        </Box>
    )
}

export default Culture