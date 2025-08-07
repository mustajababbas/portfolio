import { motion } from "framer-motion";

export default function AccordionToggle({ isOpen }) {
  return (
    <div style={{ width: 24, height: 24 }}>
      <svg viewBox="0 0 24 24" width="100%" height="100%">
        <motion.line
          x1="4"
          y1="12"
          x2="20"
          y2="12"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <motion.line
          x1="12"
          y1="4"
          x2="12"
          y2="20"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{
            opacity: isOpen ? 0 : 1,
            rotate: isOpen ? 90 : 0,
          }}
          transition={{ duration: 0.2 }}
        />
      </svg>
    </div>
  );
}
