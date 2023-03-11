import logo from "../assets/images/logo.svg";
import MotionComponent from "../components/MotionComponent";
import { simpleAnimationVariants } from "../utils/motion";
import { staggerContainer, textVariants } from "../utils/motion";

const Header = () => {
  const links = ["Features", "Team", "Sign In"];

  return (
    <header className="font-railway mx-auto flex max-w-[84rem] flex-wrap items-center justify-center gap-8 px-8 pt-8 text-base md:justify-between lg:pt-[4.5625rem]">
      <a
        href="#main"
        className="absolute left-0 z-50 m-3 -translate-x-[150%] border-2 border-white bg-dark-blue-intro p-3 transition focus:translate-x-0"
      >
        Skip to main content
      </a>
      <MotionComponent as="a" variants={simpleAnimationVariants} href="#">
        <img
          src={logo}
          alt="Fylo"
          width={176}
          height={52}
          className="w-28 md:w-auto"
        />
      </MotionComponent>
      <nav aria-label="Main">
        <MotionComponent
          as="ul"
          variants={staggerContainer}
          className="flex items-center gap-[3.5625rem]"
          role="list"
        >
          {links.map((link, index) => (
            <MotionComponent
              as="li"
              variants={textVariants}
              key={index}
              role="listitem"
            >
              <a href="#" className="border-bottom relative">
                {link}
              </a>
            </MotionComponent>
          ))}
        </MotionComponent>
      </nav>
    </header>
  );
};

export default Header;
