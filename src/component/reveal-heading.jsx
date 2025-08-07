import React, { useEffect, useState } from "react";

const TextReveal = ({
  textOne,
  textTwo,
  textThree,
  textFour,
  headingSize = "h2",
}) => {
  const Heading = headingSize;
  const texts = [textOne, textTwo, textThree, textFour];
  const [delays, setDelays] = useState([]);

  useEffect(() => {
    if (textOne) {
      const randomDelays = textOne.split("").map(() => Math.random() * 1.5);
      setDelays(randomDelays);
    }
  }, [textOne]);

  return (
    <Heading className="text-reveal heading-style-h1">
      {texts.map((text, i) => (
        <span key={i} className={`h1-span-${i + 1}`}>
          {text?.split("").map((char, index) => (
            <span
              key={index}
              className="char"
              style={{ animationDelay: `${delays[index] || 0}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
      ))}
    </Heading>
  );
};

export default TextReveal;
