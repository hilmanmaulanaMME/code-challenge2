import { Heading, Text, Flex, Box, SimpleGrid } from '@chakra-ui/react';

function Aboutus() {
    return (
        <Box  bg="black" color="white" height="auto">
            <Flex bg="black" color="white" p={10} boxShadow="md" justify="center">
                <SimpleGrid  spacing='30px' margin='30px' columns={[1,2,3]}>
                    <Box>
                        <Heading as="h1" fontSize={{ base: '2xl', md: '4xl' }} mb={4} alignItems="center">
                            About Us
                        </Heading>
                        <Text textAlign='justify'>
                            Audio Signature is a leading recording, mixing, and mastering company dedicated to shaping exceptional sonic experiences. Established with a passion for audio excellence, our team of professionals brings together a unique blend of technical expertise and artistic intuition. At Audio Signature, we believe in the transformative power of sound, and our mission is to collaborate with musicians and content creators, elevating their artistic vision to new heights.
                        </Text>
                    </Box>
                    <Box>
                        <Heading as="h1" fontSize={{ base: '2xl', md: '4xl' }} mb={4} alignItems="center">
                            Our Vision
                        </Heading>
                        <Text textAlign='justify'>
                            Our vision at Audio Signature is to be the catalyst for sonic innovation and creativity. We aspire to create a space where every artist, regardless of genre or background, can find a platform to express their unique voice. By staying at the forefront of industry advancements and fostering a culture of collaboration, we aim to set new standards in audio production and be recognized as a trusted partner in the artistic journey of our clients.
                        </Text>
                    </Box>
                    <Box>
                        <Heading as="h1" fontSize={{ base: '2xl', md: '4xl' }} mb={4} alignItems="center">
                            Our Mission
                        </Heading>
                        <Text textAlign='justify'>
                        Our mission is to craft audio signatures that resonate with authenticity and emotion. We are committed to providing tailored solutions for every project, understanding that each artistic journey is distinctive. Through a seamless blend of cutting-edge technology, personalized attention, and a deep appreciation for creativity, we strive to deliver unparalleled audio quality. At Audio Signature, our mission is to go beyond the expected, creating sonic experiences that leave a lasting impact.
                        </Text>
                    </Box>
                </SimpleGrid>
            </Flex>
        </Box>
    )
}

export default Aboutus