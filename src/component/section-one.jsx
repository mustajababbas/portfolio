import TextReveal from "./reveal-heading";

export default function SectionOne() {
  return (
   <>
    <div id="top" className="section_home-header">
        <div className="px-5">
            <div className="home-header_component">
                <div className="home-header_content-wrapper">
                    <div className="home-header_content">
                        <div className="home-header_heading-wrapper">
                            <TextReveal textOne="Creative" textTwo="Frontend" textThree="Engineer With" textFour="Purpose" headingSize="h1"/>
                        </div>
                            <div className="my-image">
                                <img 
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                    alt="Syed Mustajab Abbas" 
                                    
                                />
                            </div>
                    </div>
                </div>
            </div>
            <div className="home-header_bottom">
                <div className="home-header_mail-wrapper">
                     <div className="">Email:</div>
                     <a href="mailto:mustajab.naqvi110@gmail.com?subject=Hi!" className="text-style-link" >mustajab.naqvi110@gmail.com</a>
                </div>
                <div style={{justifySelf: "end"}}>
                    <div >
                        Passionate about crafting<br/>
                        unforgettable experiences.
                    </div>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}
