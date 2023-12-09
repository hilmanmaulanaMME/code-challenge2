import { Box, Flex,Text, Image, Icon } from "@chakra-ui/react"
import Link from 'next/link'

function Navbar() {
    return (
        <Flex as="nav" align="center" justify="space-between" p={4} bg="black" color="white" borderBottom='1px solid' borderColor='red'>
            <Link href="/">
                <Box>

                </Box>
            </Link>
            <Box display={{ base: 'none', md: 'flex' }}>
                <Link href="/">
                    <Text mr={4}>Home</Text>
                </Link>
                <Link href="/aboutus">
                    <Text mr={4}>About Us</Text>
                </Link>
                <Link href="/services">
                    <Text mr={4}>Services</Text>
                </Link>
                <Link href="/teams">
                    <Text >Teams</Text>
                </Link>
            </Box>
        </Flex>
    )
}

export default Navbar