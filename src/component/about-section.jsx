import React from 'react'
import SplitText from './text-split'

export default function AboutSection() {
    return (
        <>
            <section id="about" className="section_home-about">
                <div className="spacer-xxhuge"></div>
                    <div className="px-5">
                            <div className="row">
                                <div className='col-lg-4 about-text'>
                                    <SplitText text="About" headingSize='h2'/>
                                </div>
                                <div className="col-lg-8">
                                    <p className="text-size-medium">I’m a multi-disciplinary designer and Webflow developer, passionate about crafting ideas, visuals, and typography into unforgettable digital experiences. &nbsp;With a genuine belief in the transformative power of design, I am constantly exploring the vast creative world, from architecture, art, graphic design, illustration, motion design, and UX design. My journey began in architecture, however, my passion for limitless creativity led me to explore the endless possibilities that creative development has to offer. <br/><br/>With over 2 years of &nbsp;hands-on experience in Webflow, I bring a unique blend of design and development skills to every project. My goal is to deliver digital experiences that not only engage and inspire but also achieve tangible results for my clients. When working on websites, I place a strong emphasis on crafting unique layouts, captivating interactions, and good use of typography, blend together these elements to create a seamless user experience that leaves a lasting impression.</p>
                                </div>
                            </div>
                    </div>
                <div className="spacer-xxhuge"></div>
            </section>
        </>
    )
}
