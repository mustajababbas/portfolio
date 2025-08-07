import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 200, damping: 20 });

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
  
    const handleMouseEnter = () => setIsActive(true);
    const handleMouseLeave = () => setIsActive(false);
  
    window.addEventListener("mousemove", moveCursor);
  
    const timeout = setTimeout(() => {
      const links = document.querySelectorAll(".cursor-link");
      links.forEach((link) => {
        link.addEventListener("mouseenter", handleMouseEnter);
        link.addEventListener("mouseleave", handleMouseLeave);
      });
    }, 0); // defer to next tick
  
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("mousemove", moveCursor);
      const links = document.querySelectorAll(".cursor-link");
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className={`custom-cursor ${isActive ? "active" : ""}`}
      style={{
        translateX: smoothX,
        translateY: smoothY,
      }}
    >
      {isActive && <span>View Site</span>}
    </motion.div>
  );
}
