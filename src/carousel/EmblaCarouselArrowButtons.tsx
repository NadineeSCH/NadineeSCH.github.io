import { useCallback, useEffect, useState } from "react";
import type { ComponentPropsWithRef } from "react";
import type { EmblaCarouselType } from "embla-carousel";

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type PropType = ComponentPropsWithRef<"button">;

const BUTTON_BASE_CLASSES = `
  appearance-none bg-transparent touch-manipulation inline-flex cursor-pointer 
  items-center justify-center w-10 h-10 
  transition-all duration-200 
  disabled:opacity-30 disabled:cursor-not-allowed
`;

const BUTTON_THEME_CLASSES = `
  border-[#773b3b] text-[#773b3b] 
  hover:bg-[#773b3b] hover:text-white 
  active:scale-95
`;

export const PrevButton = (props: PropType) => {
  const { children, ...restProps } = props;

  return (
    <button
      className={`${BUTTON_BASE_CLASSES} ${BUTTON_THEME_CLASSES}`}
      type="button"
      {...restProps}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>

      {children}
    </button>
  );
};

export const NextButton = (props: PropType) => {
  const { children, ...restProps } = props;

  return (
    <button
      className={`${BUTTON_BASE_CLASSES} ${BUTTON_THEME_CLASSES}`}
      type="button"
      {...restProps}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>

      {children}
    </button>
  );
};
