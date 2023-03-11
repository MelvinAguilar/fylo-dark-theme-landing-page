import { motion } from "framer-motion";

const ErrorMessage = ({ children, className = "", ...props }) => {
  return (
    <motion.p
      className={`absolute top-1 left-4 text-sm text-light-red transition-all md:top-3 ${className}`}
      {...props}
      id="error-message"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.p>
  );
};

export default ErrorMessage;
