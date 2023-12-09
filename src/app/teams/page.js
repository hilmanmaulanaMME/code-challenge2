import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Teams from "@/components/Teams"
import { Box, Text } from "@chakra-ui/react"


function page() {
    return (
        <>
            <Navbar/>
            <Box textAlign='center' paddingTop='30px' backgroundColor='black' color='white'>
                <Text fontSize='3xl' as='b'>Meet</Text>
            </Box>
            <Teams/>
            <Footer/>
        </>
    )
}

export default page