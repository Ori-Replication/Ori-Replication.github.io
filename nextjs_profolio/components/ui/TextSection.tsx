"use client";  // 添加这一行

import React, { useState } from "react";
import { TextGenerateEffect } from "./text-generate-effect";

const TextSection = () => {
  const [showSecondText, setShowSecondText] = useState(false);

  return (
    <div className="flex justify-center relative my-20 z-10">
      <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
        <TextGenerateEffect 
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
          words="Hi! I&apos;m Ori, an undergraduate at [ShanghaiTech](https://www.shanghaitech.edu.cn/eng/) University."
          highlightWords={["Ori"]}
        />

        <TextGenerateEffect 
          className="text-center text-sm md:text-lg lg:text-2xl"
          words="Major in Computer Science, research in AI for Biology."
          highlightWords={["AI", "Biology"]}
          delay={3} 
        />
      </div>
    </div>
  );
};

export default TextSection;
