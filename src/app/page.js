import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Testimonials from "@/components/Testimonials"
import Teams from "@/components/Teams"
import Footer from "@/components/Footer"
import CompanyOverview from "@/components/CompanyOverview"

function page() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <CompanyOverview/>
            <Services/>
            <Testimonials/>
            <Teams/>
            <Footer/>
        </>
    )
}

export default page