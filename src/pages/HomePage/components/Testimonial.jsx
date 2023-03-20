import Layoutheader from '../../../Components/Layoutheader';
import Testimonialcard from '../../../Components/Testimonialcard';
import { Testinomialsdata } from '../../../API/Testinomialsdata';

const Testimonial = () => {
  return (
    <div className="padding-px py-24">
      <div className="maxWidth m-auto">
        <Layoutheader
          title={'Testimonials'}
          desc={
            'See what SundarUI users are saying about the platform and its components, as they share their feedback and experiences.'
          }
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          {Testinomialsdata.map((data) => (
            <Testimonialcard key={data.key} name={data.name} msg={data.msg} url={data.msg} photo={data.photo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
