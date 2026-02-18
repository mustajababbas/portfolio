import { motion } from "framer-motion";
import CustomCursor from "./CustomCursor";

export default function WorkList() {


    const Projects = [
        {
            id:1,
            name:"WAGMI MARKETPLACE",
            details:"Wagmi Marketplace is a digital store for in-game items such as cards, accessories, and collectibles. Developed on Next.js for fast, dynamic performance, providing gamers with a seamless and interactive shopping experience.",
            hashtags:"#nextjs #crypto #game #reactjs #3d #animations",
            video:"project-videos/wagmi.mp4"

        },
        {
            id:2,
            name:"Beblox",
            details:"Beblox is an eCommerce platform built on Shopify, offering an engaging shopping experience with smooth, dynamic visuals. Developed using GSAP for animations and enhanced with vertical scroll-based effects for interactive storytelling.",
            hashtags:"#shopify #ecommerce #gsap #animations #shop",
            video:"project-videos/beblox.mp4"

        },
        {
            id:3,
            name:"Liveforce",
            details:"Liveforce is a CRM lead generation platform with an integrated chatbot, designed to streamline customer acquisition and engagement. Developed on Laravel for the backend, with the chatbot built using Vue.js and Node.js for real-time interaction.",
            hashtags:"#crm #lead-generation #dashboard #web-design #laravel #javascript",
            video:"project-videos/liveforce.mp4"

        },
        {
            id:4,
            name:"HPL Games",
            details:"HPL is a gaming platform blending web2 and web3, integrating blockchain-powered HPL Tokens into immersive mobile and multi-platform games. I developed this project with a focus on seamless gameplay, blockchain integration, and an in-game economy that rewards players while fostering community growth.",
            hashtags:"#HPLGames #Web3Gaming #BlockchainGaming #PlayToEarn #GameFi #CryptoGaming #NFTGaming",
            video:"project-videos/HPL-games.mp4"
        }
    ]

  return (
    <>

        <div className='px-4 px-md-5'>
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
                            <div className="video-embed_desktop w-embed">
                            <video playsinline="" autoPlay muted loop width="100%" height="100%" title={work.name}>
                                <source src={work.video} type="video/mp4"/>
                            </video>
                            </div>
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
                            <motion.div
                            className={`home-work_info-line ${index % 2 !== 0 ? 'align-right' : ''}`}
                            initial={{ height: "0%" }}
                            whileInView={{ height: "100%" }}
                            transition={{
                                type: "spring",
                                stiffness: 50,
                                damping: 20,
                                mass: 0.5,
                                duration: 0.3,
                            }}
                            viewport={{ amount: 1, once: true }}
                            />
                        </div>
                    </div>
                </motion.div>
                ))}

            </div>
        </div>
    </>
  )
}
