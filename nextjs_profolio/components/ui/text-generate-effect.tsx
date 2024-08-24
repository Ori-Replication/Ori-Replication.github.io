"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  onComplete?: () => void;
  highlightWords?: string[];
  delay?: number;
}

interface Word {
  text: string;
  url?: string;
  isLink: boolean;
}

export const TextGenerateEffect = ({
  words,
  className,
  onComplete,
  highlightWords = [],
  delay = 0,
}: TextGenerateEffectProps) => {
  const [scope, animate] = useAnimate();
  const linkRegex = /\[(.*?)\]\((.*?)\)/g;

  const removePunctuation = (word: string) => word.replace(/^[.,\/#!$%\^&\*;:{}=\-_`~()]+|[.,\/#!$%\^&\*;:{}=\-_`~()]+$/g, "");

  const wordsArray: Word[] = words.split(/(\s+|\n)/).map((word): Word => {
    const match = linkRegex.exec(word);
    if (match) {
      return {
        text: match[1],
        url: match[2],
        isLink: true,
      };
    }
    return { text: word, isLink: false };
  });

  useEffect(() => {
    const animationDelay = delay * 1000; 
    const totalDuration = wordsArray.length * 50; 
    const startDelay = animationDelay + totalDuration;

    setTimeout(() => {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 1.75,
          delay: stagger(0.175),
        }
      ).then(() => {
        if (onComplete) {
          onComplete();
        }
      });
    }, startDelay);
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((wordObj, idx) => {
          const cleanWord = removePunctuation(wordObj.text);
          const isHighlighted = highlightWords.includes(cleanWord);
          const classNames = cn(
            {
              'text-purple': isHighlighted,
              'dark:text-white text-black': !isHighlighted,
              'opacity-0': true
            }
          );

          if (wordObj.isLink) {
            return (
              <motion.span
                key={wordObj.text + idx}
                className="opacity-0"
              >
                <a href={wordObj.url} className="text-purple underline">
                  {wordObj.text}
                </a>{" "}
              </motion.span>
            );
          }
          if (wordObj.text === "\n") {
            return <br key={"br-" + idx} />;
          }
          return (
            <motion.span
              key={wordObj.text + idx}
              className={classNames}
            >
              {wordObj.text}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
