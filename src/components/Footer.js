import { Box, Flex, Text } from "@chakra-ui/react"
import Link from 'next/link'

function Footer() {
    return (
        <Flex as="foot" align="center" justify="center" p={4} bg="black" color="white" borderTop='1px red solid'>
            <Box display={{ base: 'none', md: 'flex' }}>
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

export default Footer