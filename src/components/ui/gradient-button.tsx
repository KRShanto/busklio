import { motion } from "framer-motion";

const GradientButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className = "", ...props }) => {
  return (
    // @ts-ignore
    <motion.button
      className={`relative px-6 py-2 text-white rounded-full overflow-hidden transition-all ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 animate-gradient-x"></span>
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default GradientButton;
