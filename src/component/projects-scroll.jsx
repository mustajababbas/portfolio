import { useScroll, useTransform, useSpring, motion } from "framer-motion";
import { useRef } from "react";

export default function ProjectScroll() {

    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const upY = useTransform(scrollYProgress, [0.2, 1], ["0%", "-100%"]);
    const downY = useTransform(scrollYProgress, [0.2, 1], ["0%", "100%"]);
    const opacity = useTransform(scrollYProgress, [0.3, 0.5], ["0.5", 0]);
  

    const smoothUpY = useSpring(upY, {
      stiffness: 50,
      damping: 20,
      mass: 0.5
    });
  
    const smoothDownY = useSpring(downY, {
      stiffness: 50,
      damping: 20,
      mass: 0.5
    });

    return (
        <>
            <section className="section_home-transition" ref={containerRef}>
        
                <div className="transition_sticky hide-tablet" >

                    <div className="transition_col-wrapper align-top">
                        <motion.div className="transition_col-top" style={{ y:smoothUpY }}>
                            <img src="/projects/hpl.webp" loading="lazy" alt="Web design exploration, HPL Coin by Mustajab Abbas" className="transition_image"/>
                            <img src="/projects/wagmi-marketplace.webp" loading="lazy" alt="Web design exploration, Wagmi Marketplace by Mustajab Abbas" className="transition_image"/>
                            <img src="/projects/hpl.webp" loading="lazy" alt="Web design exploration, HPL Coin by Mustajab Abbas" className="transition_image"/>
                        </motion.div>
                    </div>

                    <div  className="transition_col-wrapper">
                        <motion.div className="transition_col-bottom" style={{ y:smoothDownY }}>
                            <img src="/projects/beblox.webp" loading="lazy" alt="Web design exploration, Beblox by Mustajab Abbas" className="transition_image"/>
                            <img src="/projects/pubactive.webp" loading="lazy" alt="Web design exploration, Pubactive by Mustajab Abbas" className="transition_image"/>
                            <img src="/projects/beblox.webp" loading="lazy" alt="Web design exploration, Beblox by Mustajab Abbas" className="transition_image"/>
                        </motion.div>
                    </div>

                    <div className="transition_col-wrapper align-top">
                        <motion.div className="transition_col-top" style={{ y:smoothUpY }} >
                            <img src="/projects/hayek.webp" loading="lazy" alt="Web design exploration, Hayek Coins by Mustajab Abbas" className="transition_image"/>
                            <img src="/projects/live-force-agent-dashboard.webp" loading="lazy" alt="Web design exploration, Live Force Agent Panel by Mustajab Abbas" className="transition_image"/>
                            <img src="/projects/hayek.webp" loading="lazy" alt="Web design exploration, Hayek Coins by Mustajab Abbas" className="transition_image"/>
                        </motion.div>
                    </div>

                    <div className="transition_col-wrapper">
                        <motion.div className="transition_col-bottom"  style={{ y:smoothDownY }}>
                            <img src="/projects/bristlehealth.webp" loading="lazy" alt="Web design exploration, Bristle Health by Mustajab Abbas" className="transition_image"/>
                            <img src="/projects/outlaw-jackets.webp" loading="lazy" alt="Web design exploration, Outlaw Jackets by Mustajab Abbas" className="transition_image"/>
                            <img src="/projects/bristlehealth.webp" loading="lazy" alt="Web design exploration, Bristle Health by Mustajab Abbas" className="transition_image"/>
                        </motion.div>
                    </div>

                </div>

                <motion.div className="transition-filter"
                    style={{
                        opacity,
                    }}>
                    
                </motion.div>

            </section>
        </>
    );
}
