import AccordionItem from "./AccordionItem";
import SplitText from "./text-split";

export default function ProcessSection() {

    const accordionData = [
        {
            number: "1",
            titlePart1: "Project",
            titlePart2: "Planning",
            content: "Understanding requirements, goals, and constraints.",
        },
        {
            number: "2",
            titlePart1: "UI/UX",
            titlePart2: "Collaboration",
            content: "Working with designers to implement or improve designs.",
        },
        {
            number: "3",
            titlePart1: "Component",
            titlePart2: "Architecture",
            content: "Structuring the frontend using components (e.g., React, Vue, etc.).",
        },
        {
            number: "4",
            titlePart1: "Responsive",
            titlePart2: "Design",
            content: "Ensuring the layout works on all screen sizes.",
        },
        {
            number: "5",
            titlePart1: "Interactive",
            titlePart2: "Features",
            content: "Adding dynamic elements (like modals, accordions, sliders, etc.).",
        },        
        {
            number: "6",
            titlePart1: "Testing &",
            titlePart2: "Debugging",
            content: "Using browser dev tools and console.",
        },        
        {
            number: "7",
            titlePart1: "Performance",
            titlePart2: "Optimization",
            content: "Lazy loading, minifying files, optimizing images, etc.",
        },        
        {
            number: "8",
            titlePart1: "Deployment &",
            titlePart2: "Handoff",
            content: "Building the project for production and deploying or handing over to the client.",
        },       
      ];

    return (
        <>
            <section id="process" className="section_home-process">
                <div className="spacer-xxhuge"></div>

                <div className="px-4 px-md-5">
                    <div className="process_grid-title">
                        <SplitText text="Process" headingSize='h2'/>
                        <div className="process_text-wrapper">
                            <div className="max-width-xlarge">
                                <div className="text-size-medium">
                                Things i can help you with:
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line-divider"></div>

                    <div className="process_grid-2col">

                        {accordionData.map((item, index) => (
                            <AccordionItem key={index} {...item} />
                        ))}
                  
                    </div>
                </div>

                <div className="spacer-xxhuge"></div>


            </section>
        </>
    );
}
