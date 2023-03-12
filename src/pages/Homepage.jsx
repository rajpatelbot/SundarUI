import Component from "../Layout/Component"
import Crosstech from "../Layout/Crosstech"
import Faqs from "../Layout/Faqs"
import Hero from "../Layout/Hero"
import Ourpurpose from "../Layout/Ourpurpose"
import Testimonial from "../Layout/Testimonial"

const Homepage = () => {
    return (
        <div>
            <Hero />
            <Ourpurpose />
            <Crosstech />
            <Component />
            <Testimonial />
            <Faqs />
        </div>
    )
}

export default Homepage
