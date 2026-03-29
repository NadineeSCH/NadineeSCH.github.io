import React from "react";
import type { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons.tsx";

type PropType = {
  pictures: picture[];
  options?: EmblaOptionsType;
};

export type picture = {
  src: string;
  caption: string;
};

const EmblaCarousel = (props: PropType) => {
  const { pictures, options } = props;

  // Critical: align 'start' is best for variable width slides
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    ...options,
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        {/* Container: Negative margin-left offsets the first slide's padding */}
        <div className="flex -ml-4 touch-pan-y touch-pinch-zoom">
          {pictures.map((picture) => (
            <div className="flex-[0_0_auto] min-w-0 pl-4" key={picture.src}>
              <div className="relative rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                {/* <img 
                  src={picture.src} 
                  alt={picture.caption}
                  className="h-76 w-auto max-w-full md:max-w-2xl object-contain block"
                /> */}
                <figure className="h-100 w-auto relative rounded-sm md:max-w-full max-w-sm shadow-2xl group cursor-pointer">
                  <img
                    src={picture.src}
                    alt={picture.caption}
                    //onLoad={() => setLoaded(true)}
                    className={`block w-full h-full object-scale-down transition-all duration-700 ease-out group-hover:scale-105`}
                  />

                  <figcaption className="capitalize absolute bottom-0 left-0 right-0 px-5 pt-10 pb-4 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white text-lg leading-snug">
                      {picture.caption}
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 flex justify-end items-center gap-4">
        <div className="flex gap-2">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
