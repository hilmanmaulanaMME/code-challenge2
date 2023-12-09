import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import LongServices from "@/components/LongServices"
import Testimonials from "@/components/Testimonials"
import { Box, Text } from "@chakra-ui/react"


function page() {
    return (
        <>
            <Navbar/>
            <LongServices/>
            <Testimonials/>
            <Footer/>
        </>
    )
}

export default page