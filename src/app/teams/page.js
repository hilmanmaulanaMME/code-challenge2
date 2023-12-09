import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Teams from "@/components/Teams"
import { Box, Text } from "@chakra-ui/react"


function page() {
    return (
        <>
            <Navbar/>
            <Teams/>
            <Footer/>
        </>
    )
}

export default page