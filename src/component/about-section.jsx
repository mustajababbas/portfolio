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
                                    <p className="text-size-medium">I'm highly skilled Frontend Engineer with 5 years of experience in building scalable and responsive web applications. Proficient in React.js, Next.js, WordPress, and modern CMS development.
                                    Experienced in delivering pixel-perfect UIs using HTML5, CSS3, Tailwind CSS, and Bootstrap.
                                    Adept in writing clean JavaScript/TypeScript code and integrating interactive experiences with
                                    jQuery and GSAP. Strong background in Git-based workflows and cross-functional team
                                    collaboration. Passionate about creating performant, accessible, and SEO-friendly websites</p>
                                </div>
                            </div>
                    </div>
                <div className="spacer-xxhuge"></div>
            </section>
        </>
    )
}
