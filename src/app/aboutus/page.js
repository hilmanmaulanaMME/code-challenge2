import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CompanyHistory from "@/components/CompanyHistory"
import Teams from "@/components/Teams"
import Culture from "@/components/Culture"

function page() {
    return (
        <>
            <Navbar/>
            <CompanyHistory/>
            <Teams/>
            <Culture/>
            <Footer/>
        </>
    )
}

export default page