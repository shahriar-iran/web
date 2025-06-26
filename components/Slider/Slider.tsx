import * as React from "react"
import {Swiper, SwiperSlide} from "swiper/react";
import {Mousewheel} from "swiper/modules";
import 'swiper/css';


type SliderPropsType = {
  items: any[];
  render: (v: any, idx: number) => React.ReactNode;
}



export const Slider: React.FC<SliderPropsType> = (props) => {


    const {
      items,
      render,
    } = props;


    return (
      <Swiper
        mousewheel
        slidesPerView="auto"
        spaceBetween={0}
        modules={[Mousewheel]}
        className="w-full max-w-7xl mx-auto"
        wrapperClass="space-x-4"
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

