import React from 'react'

export default function Header() {
  return (
   <>
    <nav className="nav">
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
                <div className="text-end">Portfolio<br/>—</div>
            </div>
        </div>
    </nav>
   </>
  )
}
