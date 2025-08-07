import { motion } from "framer-motion";

const SplitText = ({ text, headingSize = "h2" }) => {
  const Heading = headingSize;

  return (
    <Heading className="overflow-hidden flex flex-wrap">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="d-inline-block char"
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: index * 0.1,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </Heading>
  );
};

export default SplitText