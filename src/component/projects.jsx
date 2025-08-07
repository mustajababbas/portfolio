import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import WorkList from "./work-list";

export default function ProjectSection() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const scrollPosition = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

    const smoothScroll = useSpring(scrollPosition, {
        stiffness: 50,
        damping: 20,
        mass: 0.5,
    });

    return (
        <>
            <section id="projects" className="section_home-work">
                <div className="home-work_bg-grid-wrapper">
                        <div className="bg-grid_sticky">
                            <div className="bg-grid_abs-one">
                                <div className="line-vertical hide-tablet"></div>
                                <div className="line-vertical hide-tablet"></div>
                                <div className="line-vertical hide-mobile-landscape"></div>
                                <div className="line-vertical hide-mobile-landscape"></div>
                                <div className="line-vertical hide-mobile-portrait"></div>
                                <div className="line-vertical hide-mobile-portrait"></div>
                                <div className="line-vertical"></div>
                                <div className="line-vertical"></div>
                                <div className="line-vertical"></div>
                                <div className="line-vertical"></div>
                                <div className="line-vertical"></div>
                                <div className="line-vertical"></div>
                                <div className="line-vertical"></div>
                            </div>
                            <div className="bg-grid_abs-two">
                                <div className="bg-grid_horizontal-wrapper">
                                    <div className="line-horizontal"></div>
                                    <div className="line-horizontal"></div>
                                    <div className="line-horizontal"></div>
                                    <div className="line-horizontal"></div>
                                    <div className="line-horizontal"></div>
                                    <div className="line-horizontal"></div>
                                    <div className="line-horizontal"></div>
                                    <div className="line-horizontal"></div>
                                    <div className="line-horizontal"></div>
                                    <div className="line-horizontal"></div>
                                    <div className="line-horizontal"></div>
                                    <div className="line-horizontal"></div>
                                    <div className="line-horizontal"></div>
                                    <div className="line-horizontal"></div>
                                    <div className="line-horizontal"></div>
                                    <div className="line-horizontal"></div>
                                    <div className="line-horizontal"></div>
                                    <div className="line-horizontal"></div>
                                    <div className="line-horizontal"></div>
                                    <div className="line-horizontal"></div>
                                </div>
                            </div>
                        </div>
                </div>

                <div ref={containerRef} className="overflow-hidden">
                    <motion.div
                        style={{ x: smoothScroll }}
                        className="d-flex flex-row text-nowrap"
                    >
                        <h2 className='heading-style-h1'>Pr<span className="skew-text">o</span>jects&nbsp;</h2>
                        <h2 className='heading-style-h1'>- Pr<span className="skew-text">o</span>jects &nbsp;</h2>
                        <h2 className='heading-style-h1'>- Pr<span className="skew-text">o</span>jects</h2>
                    </motion.div>
                </div>
                <div className="spacer-xxhuge"></div>
                <WorkList/>
                <div className="spacer-xxhuge"></div>
            </section>
        </>
    );
}
