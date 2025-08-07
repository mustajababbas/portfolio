import { motion } from "framer-motion";
import CustomCursor from "./CustomCursor";

export default function WorkList() {


    const Projects = [
        {
            id:1,
            name:"ART OF SCHIELE",
            details:"Art of Schiele is a horizontal-scrolling interactive website dedicated to exploring the artistry of Egon Schiele. As a horizontal-scrolling website, it employs custom animations and a distinctive layout to engage visitors, making it an immersive platform for discovering the Austrian artist's work.",
            hashtags:"#content curation #art direction #copywriting #web design #interaction design #webflow development"

        },
        {
            id:2,
            name:"ART OF SCHIELE",
            details:"Art of Schiele is a horizontal-scrolling interactive website dedicated to exploring the artistry of Egon Schiele. As a horizontal-scrolling website, it employs custom animations and a distinctive layout to engage visitors, making it an immersive platform for discovering the Austrian artist's work.",
            hashtags:"#content curation #art direction #copywriting #web design #interaction design #webflow development"

        },
        {
            id:3,
            name:"ART OF SCHIELE",
            details:"Art of Schiele is a horizontal-scrolling interactive website dedicated to exploring the artistry of Egon Schiele. As a horizontal-scrolling website, it employs custom animations and a distinctive layout to engage visitors, making it an immersive platform for discovering the Austrian artist's work.",
            hashtags:"#content curation #art direction #copywriting #web design #interaction design #webflow development"

        },
        {
            id:4,
            name:"ART OF SCHIELE",
            details:"Art of Schiele is a horizontal-scrolling interactive website dedicated to exploring the artistry of Egon Schiele. As a horizontal-scrolling website, it employs custom animations and a distinctive layout to engage visitors, making it an immersive platform for discovering the Austrian artist's work.",
            hashtags:"#content curation #art direction #copywriting #web design #interaction design #webflow development"
        }
    ]

  return (
    <>

        <div className='px-5'>
            <div className='home-work_list'>
            {Projects.map((work, index) => (
                <motion.div
                    key={index}
                    initial={{ y: 20}}
                    whileInView={{ y: 0 }}
                    transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 20,
                    mass: 0.5,
                    }}
                    viewport={{ amount: 0 }}
                >
                    <div className={`home-work_item${index % 2 !== 0 ? '-two' : ''}`}>
                        <div className='home-work_video-wrapper'>
                            <CustomCursor />
                            <a href="#" className="work_button-wrapper cursor-link"></a>
                        </div>
                        <div className={`home-work_info-block ${index % 2 !== 0 ? 'align-right' : ''}`}>
                            <div className='home-work_info-wrapper'>
                            <div className="home-work_info-title">
                                <h3>{work.name}</h3>
                            </div>
                            <div className="home-work_info-text">
                                <div className="hide-custom">
                                <p>{work.details}</p>
                                </div>
                                <p className="text-weight-medium">
                                    {work.hashtags}
                                </p>
                            </div>
                            </div>
                            <div className={`home-work_info-rec ${index % 2 !== 0 ? 'align-right' : ''}`}></div>
                            <div className={`home-work_info-circ ${index % 2 !== 0 ? 'align-right' : ''}`}></div>
                            <div className={`home-work_info-line ${index % 2 !== 0 ? 'align-right' : ''}`}></div>
                        </div>
                    </div>
                </motion.div>
                ))}

            </div>
        </div>
    </>
  )
}
