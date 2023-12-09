import { Box, Flex, Text, Image } from "@chakra-ui/react"
import Link from 'next/link'

function Footer() {
    return (
        <Flex as="foot" align="center" justify="center" p={4} bg="black" color="white" borderTop='1px gray solid'>
            <Box marginRight='10px'>
                <Link href="/">
                    <Image src="https://static.vecteezy.com/system/resources/previews/009/267/549/original/music-notes-icon-free-png.png" maxHeight='45px'/>
                </Link>
            </Box>
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

export default Footer