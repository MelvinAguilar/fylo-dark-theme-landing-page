import image from "../assets/images/illustration-stay-productive.png";
import imageWebp from "../assets/images/illustration-stay-productive.webp";
import MotionComponent from "../components/MotionComponent";
import {
  staggerContainer,
  textVariants,
  fadeInVariants,
} from "../utils/motion";

const Illustration = () => {
  return (
    <div className="mx-auto grid max-w-[81.1875rem] px-8 pt-[8.4375rem] pb-[7.5rem] md:grid-cols-2">
      {/* <motion.img
        src={image}
        alt="illustration"
        width={614}
        height={534}
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariants(`right`, 0.5, 0.8)}
        viewport={{ once: true, threshold: 0.8 }}
      ></motion.img> */}
      <MotionComponent
        as="picture"
        variants={fadeInVariants("right", 0.5, 0.8)}
      >
        <source srcSet={image} type="image/webp" />
        <source srcSet={imageWebp} type="image/png" />
        <img
          src={image}
          alt="illustration"
          width={614}
          height={534}
          className="ml-0.5"
        />
      </MotionComponent>

      <MotionComponent
        as="div"
        variants={staggerContainer}
        className="flex flex-col gap-4 pt-4 md:pl-[3.5775rem] md:pt-[7.25rem]"
      >
        <MotionComponent
          as="h2"
          variants={textVariants}
          className="max-w-[15ch] font-raleway text-clamp-24-40 font-bold leading-[125%] tracking-[0.0187rem]"
        >
          Stay productive, wherever you are
        </MotionComponent>
        <MotionComponent
          as="p"
          variants={textVariants}
          className="mt-[0.1875rem] text-base"
        >
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </MotionComponent>
        <MotionComponent
          as="p"
          variants={textVariants}
          className="mb-2 text-base"
        >
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </MotionComponent>
        <MotionComponent
          as="a"
          variants={textVariants}
          href="#"
          className="icon link-icon w-fit items-center text-base leading-[1.375rem] text-cyan"
        >
          See how Fylo works
        </MotionComponent>
      </MotionComponent>
    </div>
  );
};

export default Illustration;
