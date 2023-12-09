import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CompanyHistory from "@/components/CompanyHistory"
import Culture from "@/components/Culture"
import Aboutus from "@/components/Aboutus"

function page() {
    return (
        <>
            <Navbar/>
            <Aboutus/>
            <CompanyHistory/>
            <Culture/>
            <Footer/>
        </>
    )
}

export default page