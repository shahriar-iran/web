"use client"

import * as React from "react"
import { SliderThumbs } from "@/components/SliderThumbs/SliderThumbs";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Mousewheel } from "swiper/modules";
import { CommentCard } from "@/components/CommentCard/CommentCard";
import { commentsData } from "@/data/commentsData";
import "swiper/css";
import "swiper/css/navigation";

type CommentSectionPropsType = {

}



const commentList = [

]


export const CommentSection: React.FC<CommentSectionPropsType> = (props) => {

    const [activeSlide, setActiveSlide] = React.useState(0);
    const [swiper, setSwiper] = React.useState<any>(null);

    const handleSlideChange = (swiper: any) => {
        setActiveSlide(swiper.activeIndex);
    };

    const handleNext = () => {
        if (swiper) {
            swiper.slideNext();
        }
    };

    // محاسبه تعداد کل اسلایدها بر اساس slidesPerView
    const totalSlides = Math.ceil([...commentsData, ...commentsData, ...commentsData].length / 3);


    

    return (
      <div className="flex flex-col gap-5 items-center w-full max-w-7xl mx-auto px-2 2xl:px-0">
        <PageTitle
          variant="centered"
          title="(نظـرات دانـش‌آمـوزان و اولیاء دربارۀ شهریـار ایــران)"
          description="دیدگاه‌های صادقانه از زبان کسانی که ما را می‌شناسند"
        />
        <Swiper
          modules={[Mousewheel]}
          spaceBetween={0}
          slidesPerView={3}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: true,
          }}
          grabCursor={true}
          dir="rtl"
          className="max-w-full"
          onSwiper={setSwiper}
          onSlideChange={handleSlideChange}
        >
          {[...commentsData, ...commentsData, ...commentsData].map((comment, index) => (
            <SwiperSlide
              key={comment.id + "-" + index}
              className="!h-full  shrink-0"
            >
              <CommentCard
                id={+comment.id}
                fullName={comment.fullName}
                comment={comment.comment}
                date={comment.date}
                grade={comment.grade}
                isActive={index === activeSlide}
                isParent={comment.isParent}
                parentName={comment.parentName}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <SliderThumbs
          count={totalSlides}
          active={Math.floor(activeSlide / 3)}
          hideNumbers
          // onNext={handleNext}
        />
      </div>
    )
}

