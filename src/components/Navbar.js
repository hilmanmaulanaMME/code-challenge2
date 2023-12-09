import { Box, Flex,Text, Image, Icon } from "@chakra-ui/react"
import Link from 'next/link'

function Navbar() {
    return (
        <Flex as="nav" align="center" justify="space-between" p={4} bg="black" color="white" borderBottom='1px solid' borderColor='gray'>
            <Link href="/">
                <Box marginLeft='10px'>
                    <Image src="https://static.vecteezy.com/system/resources/previews/009/267/549/original/music-notes-icon-free-png.png" maxHeight='45px'/>
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