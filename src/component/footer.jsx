import TextReveal from "./reveal-heading";

export default function Footer() {


    return (
        <footer className="footer">
            <div className="px-4 px-md-5">
                <div className="footer_component">
                    <div className="footer_content-wrapper">
                        <div className="footer_content">
                            <TextReveal textOne="HAVE AN IDEA?" headingSize="h1"/>
                            <div className="footer_contact-wrapper">
                                <div>Drop me an email:</div>
                                <a href="mailto:mustajab.naqvi110@gmail.com" className="link-mail w-inline-block">
                                    <div className="link-mail_one">MUSTAJAB.NAQVI110@GMAIL.COM</div>
                                    <div className="link-mail_two">LET'S CREATE MAGIC!</div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="footer_bottom">
                        <a href="#top" className="footer-link-wrapper visibility-custom w-inline-block">
                            <div>Back to top</div>
                        </a>

                        <a href="#about" className="footer-link-wrapper w-inline-block">
                            <div>01 &nbsp;About</div>
                        </a>

                        <a href="#projects" className="footer-link-wrapper w-inline-block">
                            <div>02 &nbsp;Projects</div>
                        </a>

                        <a href="#process" className="footer-link-wrapper w-inline-block">
                            <div>03 &nbsp;Process</div>
                        </a>

                        <div>©{new Date().getFullYear()}</div>
                    </div>

                </div>
            </div>
        </footer>
    );
}
