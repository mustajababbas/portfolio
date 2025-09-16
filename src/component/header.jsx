import React from 'react'

export default function Header() {
  return (
   <>
    <nav className="nav">
        <div className='text-center pt-4 d-lg-none'>
            <p className='mb-0'>Mobile responsiveness in progress</p>
        </div>
        <div className="nav-container">
            <div className="nav-info">
                <div>
                    Open for
                    <span className="show-mobile-portrait"> <br/>work —</span>
                    <span className="hide-mobile-portrait"> offers and<br/>collaborations —</span>
                </div>
            </div>
            <a href="#top" className="nav-logo w-inline-block w--current">
                <div>
                    MUSTAJAB ABBAS
                </div>
            </a>
            <div className="nav-info" style={{justifySelf: "end"}}>
                <div className="text-end"><a href="/Syed_Mustajab_Frontend_Engineer.pdf" className='text-decoration-none' target='_blank'>&nbsp; Resume</a><br/>—</div>
            </div>
        </div>
    </nav>
   </>
  )
}
