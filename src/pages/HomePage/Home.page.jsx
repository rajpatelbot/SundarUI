import Component from './components/Component';
import Crosstech from './components/Crosstech';
import Faqs from './components/Faqs';
import Hero from './components/Hero';
import Ourpurpose from './components/Ourpurpose';
import Testimonial from './components/Testimonial';

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
  );
};

export default Homepage;
