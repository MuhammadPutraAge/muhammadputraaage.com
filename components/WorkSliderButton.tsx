"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { HTMLAttributes } from "react";

interface Props {
  containerClassName?: HTMLAttributes<HTMLDivElement>["className"];
  btnClassName?: HTMLAttributes<HTMLButtonElement>["className"];
  iconClassName?: string;
}

const WorkSliderButton = ({
  containerClassName,
  btnClassName,
  iconClassName,
}: Props) => {
  const swiper = useSwiper();

  return (
    <div className={containerClassName}>
      <button className={btnClassName} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconClassName} />
      </button>

      <button className={btnClassName} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconClassName} />
      </button>
    </div>
  );
};

export default WorkSliderButton;
