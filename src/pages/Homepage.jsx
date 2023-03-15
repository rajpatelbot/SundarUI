import Component from "../Layout/HomepageLayouts/Component"
import Crosstech from "../Layout/HomepageLayouts/Crosstech"
import Faqs from "../Layout/HomepageLayouts/Faqs"
import Hero from "../Layout/HomepageLayouts/Hero"
import Ourpurpose from "../Layout/HomepageLayouts/Ourpurpose"
import Testimonial from "../Layout/HomepageLayouts/Testimonial"

const Homepage = () => {
    return (
        <section>
            <Hero />
            <Ourpurpose />
            <Crosstech />
            <Component />
            <Testimonial />
            <Faqs />
        </section>
    )
}

export default Homepage
