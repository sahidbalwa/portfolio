import React, { useState, useEffect } from 'react';

function useTypingEffect(phrases, speed = 100, pauseDuration = 1000) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const typing = () => {
      if (currentIndex < phrases[currentPhraseIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayText(prev => prev + phrases[currentPhraseIndex][currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, speed);

        return () => clearTimeout(timeout);
      } else {
        // After finishing the current phrase, wait for the pauseDuration, then start next phrase
        const resetTimeout = setTimeout(() => {
          setDisplayText('');
          setCurrentIndex(0);
          setCurrentPhraseIndex(prev => (prev + 1) % phrases.length); // Loop through phrases
        }, pauseDuration);

        return () => clearTimeout(resetTimeout);
      }
    };

    typing();
  }, [currentIndex, currentPhraseIndex, speed, phrases, pauseDuration]);

  return { displayText };
}

const TypingEffect = () => {
  const phrases = [
    "Frontend Developer",
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "REACT JS",
    "NODE JS",
    "TYPESCRIPT"
  ];

  const { displayText } = useTypingEffect(phrases, 100, 1000);

  return (
    <div>
      <h1>{displayText}</h1>
    </div>
  );
};

export default TypingEffect;
