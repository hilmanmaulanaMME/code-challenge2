import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Services from "@/components/Services"
import Testimonials from "@/components/Testimonials"
import { Box, Text } from "@chakra-ui/react"


function page() {
    return (
        <>
            <Navbar/>
            <Box textAlign='center' paddingTop='30px' backgroundColor='black' color='white'>
                <Text fontSize='3xl' as='b'>Our</Text>
            </Box>
            <Services/>
            <Testimonials/>
            <Footer/>
        </>
    )
}

export default page