import * as React from "react"
import {Swiper, SwiperSlide} from "swiper/react";
import type SwiperCore from 'swiper';
import {Mousewheel} from "swiper/modules";
import 'swiper/css';


type SliderPropsType = {
  swiperRef: React.RefObject<SwiperCore | null>;
  handleSlideChange: (s: SwiperCore) => void;
  items: any[];
  render: (v: any, idx: number) => React.ReactNode;
}



export const Slider: React.FC<SliderPropsType> = (props) => {


    const {
      swiperRef,
      items,
      render,
      handleSlideChange,
    } = props;




    return (
      <Swiper
        mousewheel
        slidesPerView="auto"
        spaceBetween={0}
        modules={[Mousewheel]}
        className="w-full max-w-7xl mx-auto"
        wrapperClass="space-x-4"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
      >
        {items.map((v, idx) => {
          return (
            <SwiperSlide key={idx} className="!w-fit">
              {render(v, idx)}
            </SwiperSlide>
          )
        })}
      </Swiper>
    )
}

