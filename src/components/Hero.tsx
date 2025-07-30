"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { AuroraText } from "@/components/magicui/aurora-text";

const useTypingEffect = (
  words: string[],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000
) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.slice(0, currentText.length + 1));
          } else {
            // Finished typing, start deleting after pause
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          // Deleting
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            // Finished deleting, move to next word
            setIsDeleting(false);
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    isDeleting,
    currentWordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return currentText;
};

export default function Hero() {
  const typedText = useTypingEffect([
    "frontend development",
    "backend development",
    "web development",
    "full-stack development",
  ]);

  return (
    <BackgroundBeamsWithCollision>
      <section id="home" className="w-full">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between max-md:mt-18 max-lg:mt-[95px]">
            <div className="lg:w-1/2 mb-10 lg:mb-0 ml-0 md:ml-0 lg:ml-12 animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Hi There, <br />
                <AuroraText>I&#39;m Koustav Majhi</AuroraText>
              </h1>
              <p className="text-3xl font-bold mb-8 text-primary min-h-[2rem] max-md:text-xl ">
                I am into{" "}
                <span className="bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
                  {typedText}
                  <span className="animate-pulse bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
                    |
                  </span>
                </span>
              </p>
              <div className="flex space-x-4">
                <Link href="#projects">
                  <Button
                    size="lg"
                    className="transform rounded-lg bg-black font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                  >
                    View Projects
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="transform rounded-lg border border-gray-300 bg-white font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900"
                  >
                    Contact Me
                  </Button>
                </Link>
              </div>
              <div className="flex space-x-3 mt-5 lg:mt-10">
                <Link
                  href="https://github.com/KoustavDev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="icon"
                    variant="outline"
                    className="hover:scale-110 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub Profile</span>
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/koustav-majhi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="icon"
                    variant="outline"
                    className="hover:scale-110 hover:!bg-[#0077B5] hover:!text-white hover:!border-[#0077B5]"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn Profile</span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 w-full max-w-md mx-auto">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <Image
                  src="/images/Koustav-Majhi.jpeg"
                  alt="Hero Image"
                  fill
                  className="object-cover rounded-full shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  );
}


{/* <div className="text-3xl mb-8 text-primary min-h-[2rem] max-md:text-xl ">
  I am into{" "}
  <span className="bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
    {typedText}
    <span className="animate-pulse">|</span>
  </span>
</div>; */}