import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DecayCard from "../hooks/DecayCard";
import GradientText from "../hooks/GradientText";
import Button from "../hooks/Button";

// Typing effect hook for multiple phrases
function useTypingEffect(phrases, speed = 100, pauseDuration = 1000) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;

    if (isTyping) {
      // Typing characters one by one
      if (currentIndex < phrases[currentPhraseIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev + phrases[currentPhraseIndex][currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, speed);
      } else {
        // Completed typing current phrase
        setIsTyping(false);
      }
    } else {
      // Pausing before switching to the next phrase
      timeout = setTimeout(() => {
        setDisplayText(""); // Clear display text for next phrase
        setCurrentIndex(0); // Reset character index
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length); // Move to the next phrase
        setIsTyping(true);
      }, pauseDuration);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, currentPhraseIndex, isTyping, phrases, speed, pauseDuration]);

  return { displayText };
}

function HomePage() {
  const phrases = [
    "FullStack Developer",
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "REACT JS",
    "NODE JS",
    "REACT NATIVE",
    "MongoDB",
    "Express js",
    "SQL",
    "Bootstrap"
  ];

  const { displayText } = useTypingEffect(phrases, 100, 1000);

  return (
    <div className="min-h-screen pt-16 bg-inherit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-32">
          <div className="flex-1">
            <h1 className="text-4xl md:text-4xl font-bold text-white dark:text-white mb-6">
              {displayText}
              <span className="inline-block w-[3px] h-[1em] bg-amber-400 dark:bg-blue-500 ml-1 animate-pulse" />
            </h1>
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={5}
              showBorder={false}
              className="custom-class"
            >
              Passionate about creating beautiful and functional web applications using modern
              technologies.
            </GradientText>
            <div className="flex gap-4 mb-8 mt-10">
              <a
                href="https://github.com/sahidbalwa"
                className="p-2 rounded-full  bg-gray-200 hover:bg-gray-300  "
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://in.linkedin.com/in/sahid-balwa"
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 "
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:balwasahid@gmail.com"
                className="p-2 rounded-full  bg-gray-200 hover:bg-gray-300 "
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <Link to="/projects">
              <Button>View Projects</Button>
            </Link>
          </div>
          <div className="flex-1">
            <DecayCard image="https://avatars.githubusercontent.com/u/138686668?v=4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
