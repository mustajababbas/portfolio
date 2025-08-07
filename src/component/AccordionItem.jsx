import { useState, useRef, useEffect } from "react";
import AccordionToggle from "./AccordionToggle";

export default function AccordionItem({ number, titlePart1, titlePart2, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="home-process_dropdown">
      <div
        className="home-process_dropdown-top"
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: "pointer" }}
      >
        <div className="home-process_title-block">
          <div className="overflow-hidden">
            <div className="home-process_number">
              <span className="number-s1">0</span>
              <span className="number-s2">{number}</span>
            </div>
            <div className="home-process_number-abs">
              <span className="number-abs-s1">0</span>
              <span className="number-abs-s2">{number}</span>
            </div>
          </div>
          <div className="overflow-hidden">
            <h3 className="home-process_heading">
              <span className="process-s1">{titlePart1}&nbsp;</span>
              <span className="process-s2">{titlePart2}</span>
            </h3>
            <h3 className="home-process_heading-abs">
                <span className="process-abs-s1">{titlePart1}&nbsp;</span>
                <span className="process-abs-s2">{titlePart2}</span>
            </h3>
          </div>
        </div>
        <AccordionToggle isOpen={isOpen} />
      </div>

      <div
        className={`home-process_dropdown-bottom ${isOpen ? "open" : ""}`}
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
          overflow: "hidden",
          transition: "max-height 0.4s ease",
        }}
      >
        <div className="home-process_dropdown-content">
          <p className="mb-0">{content}</p>
        </div>
      </div>

      <div className="home-process_line"></div>
    </div>
  );
}
