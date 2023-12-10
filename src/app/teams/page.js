import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Teams from "@/components/Teams"
import { Box, Flex, Text } from "@chakra-ui/react"


function page() {
    return (
        <>
            <Navbar/>
                <Box height='100vh' bg='black'>
                    <Flex height='100%' alignItems='center' justifyContent='center'>
                        <Teams/>
                    </Flex>
                </Box>
            <Footer/>
        </>
    )
}

export default page