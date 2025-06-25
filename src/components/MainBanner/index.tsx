'use client';

import { useState, useEffect } from "react";
import Header from "../Header";
import clsx from "clsx";

type MainBannerProps = {
  id: string
  image: string
  tag: string
  title: string
  subtitle: string
}
// dado mockado, substituir pelo dado real
const dataSlides: MainBannerProps[] = [
  {
    id: "01",
    image: "https://placehold.co/1920x500",
    tag: "Marcação 1",
    title: "Título do Banner 1",
    subtitle: "Este é o subtítulo do primeiro banner."
  },
  {
    id: "02",
    image: "https://placehold.co/1920x500",
    tag: "Marcação 2",
    title: "Título do Banner 2",
    subtitle: "Este é o subtítulo do segundo banner."
  },
  {
    id: "03",
    image: "https://placehold.co/1920x500",
    tag: "Marcação 3",
    title: "Título do Banner 3",
    subtitle: "Este é o subtítulo do terceiro banner."
  }
];

export default function MainBanner() {
  const [slides] = useState(dataSlides)
  const [currentId, setCurrentId] = useState<string>(dataSlides[0].id)

  function handleClickDots(id: string) {
    setCurrentId(id);
  }

  function handlePrevious() {
    const currentIndex = slides.findIndex(slide => slide.id === currentId);
    const prevIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentId(slides[prevIndex].id);
  }

  function handleNext() {
    const currentIndex = slides.findIndex(slide => slide.id === currentId);
    const nextIndex = (currentIndex + 1) % slides.length;
    setCurrentId(slides[nextIndex].id);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentId(prevId => {
        const currentIndex = slides.findIndex(slide => slide.id === prevId);
        const nextIndex = (currentIndex + 1) % slides.length;
        return slides[nextIndex].id;
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides, currentId]);

  const currentSlide = slides.find(slide => slide.id === currentId) || slides[0];

  return (
    <div className={clsx(
      "w-full min-h-[500px]",
      "flex flex-col items-center justify-center",
      "bg-gray-500 relative"
    )} style={{ backgroundImage: `url(${currentSlide.image})` }}>
      <div className={clsx(
        "flex flex-col items-center justify-center",
        "w-full mx-auto relative"
      )}>
        <div className={clsx(
          "content w-full",
          "flex flex-col items-center justify-center"
        )}>
          <span className={clsx(
            "bg-white text-gray-900",
            "rounded-xl px-4 py-1",
            "text-sm mb-3 font-medium"
          )}>
              {currentSlide.tag}
          </span>
          <h1 className={clsx(
            "text-center text-4xl font-bold mb-2"
          )}>
            {currentSlide.title}
          </h1>
          <p className={clsx(
            "text-center text-lg",
            "max-w-2xl px-4"
          )}>
            {currentSlide.subtitle}
          </p>
        </div>
        
        {/* Botão Voltar */}
        <button
          onClick={handlePrevious}
          className={clsx(
            "absolute left-4 top-1/2",
            "transform -translate-y-1/2",
            "bg-white bg-opacity-80 hover:bg-opacity-100",
            "text-gray-900 w-10 h-10",
            "rounded-full flex items-center justify-center",
            "transition-all duration-200 shadow-lg"
          )}
        >
          <svg className={clsx("w-5 h-5")} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Botão Avançar */}
        <button
          onClick={handleNext}
          className={clsx(
            "absolute right-4 bottom-0",
            "transform -translate-y-1/2",
            "bg-white bg-opacity-80 hover:bg-opacity-100",
            "text-gray-900 w-10 h-10",
            "rounded-full flex items-center justify-center",
            "transition-all duration-200 shadow-lg"
          )}
        >
          <svg className={clsx("w-5 h-5")} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Dots */}
      <div className={clsx(
        "absolute bottom-5 left-0 right-0",
        "flex justify-center gap-2 mt-6"
      )}>
        {slides.map((slide) => (
          <button
            key={slide.id}
            onClick={() => handleClickDots(slide.id)}
            className={clsx(
              "w-3 h-3 rounded-full transition-colors duration-200",
              slide.id === currentId ? 'bg-gray-900' : 'bg-gray-300 hover:bg-gray-400'
            )}
          />
        ))}
      </div>
    </div>
  );
}