import { motion, useReducedMotion } from "framer-motion";

const MotionComponent = ({ as = "div", variants, ...rest }) => {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      variants={shouldReduceMotion ? "visible" : variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, threshold: 0.8 }}
      {...rest}
    />
  );
};

export default MotionComponent;
