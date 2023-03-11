import { testimonials } from "../data/testimonials";
import Testimonial from "../components/Testimonial";

const Testimonials = () => {
  return (
    <div className="relative mx-auto flex max-w-[77.75rem] flex-wrap justify-center gap-10 px-8 pt-[3.6875rem] pb-[22.6875rem]">
      <h2 className="sr-only">Testimonials</h2>

      {testimonials.map((testimonial, index) => (
        <Testimonial key={index} index={index} {...testimonial} />
      ))}
    </div>
  );
};

export default Testimonials;
