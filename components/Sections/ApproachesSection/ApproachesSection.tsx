"use client"

import * as React from "react"
import { ApproachesCard } from "../../ApproachesCard/ApproachesCard";
import { Icon } from "@iconify/react";
import { Slider } from "../../Slider/Slider";
import { SliderThumbs } from "@/components/SliderThumbs/SliderThumbs";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import type SwiperCore from 'swiper';


type ApproachesSectionPropsType = {

}



const approachesList = [
    {
      id: 1,
      title: "کــار تیمی و نخبه‌مــداری",
      englishTitle: "Teamwork",
      icon: "solar:users-group-rounded-bold-duotone",
      description: "باور داریم نخبگی در کار تیمی شکوفا می‌شود؛ ما محیطی می‌سازیم که استعدادهای برتر در تعامل و همکاری رشد کنند."
    },
    {
      id: 2,
      title: "مسئولــــیت پذیـــری",
      englishTitle: "Responsibility",
      icon: "solar:key-bold-duotone",
      description: "به دانش‌آموزان می‌آموزیم که تصمیم‌هایشان مهم است و نتایجش به خودشان بازمی‌گردد."
    },
    {
      id: 3,
      title: "کوچینگ",
      englishTitle: "Coaching",
      icon: "solar:notification-unread-lines-bold-duotone",
      description: "بررسی و همراهمی دانش‌آموزان با متد کوچینگ و به کمک منتور هر پایه"
    },
    {
      id: 4,
      title: "آینده پژوهی",
      englishTitle: "Future research",
      icon: "solar:palette-round-bold-duotone",
      description: "مدرسه‌ای که دانش آموزان را برای 10 سال آینده و با شرایط 10 سال آینده آماده می کند."
    },
    {
      id: 5,
      title: "شخصی سازی",
      englishTitle: "Personalization",
      icon: "solar:layers-bold-duotone",
      description: "مسیر رشد هر دانش‌آموز را متناسب با استعدادها، علاقه‌ها و نیازهایش طراحی می‌کنیم."
    },
    {
      id: 6,
      title: "نوآوری و پژوهش",
      englishTitle: "Innovation and research",
      icon: "solar:notes-bold-duotone",
      description: "با پژوهش به فهم عمیق می‌رسیم و با نوآوری، آینده را می‌سازیم؛ شهریار جایی است که فکر کردن متوقف نمی‌شود."
    },
    {
      id: 7,
      title: "آرمان گرایی",
      englishTitle: "Idealism",
      icon: "solar:crown-star-bold-duotone",
      description: "ما فقط به موفقیت امروز فکر نمی‌کنیم؛ دانش‌آموز را برای ساختن دنیایی بهتر در فردا تربیت می‌کنیم."
    },
    {
      id: 8,
      title: "بازی‌وارسازی",
      englishTitle: "Gamification",
      icon: "solar:gamepad-minimalistic-bold-duotone",
      description: "یادگیری را با چالش، امتیاز و رقابت هیجان‌انگیز می‌کنیم تا انگیزه دانش‌آموزان زنده بماند."
    },
  ]


export const ApproachesSection: React.FC<ApproachesSectionPropsType> = (props) => {

    const {
      
    } = props;

    const [hoveredIdx, setHoveredIdx] = React.useState(3)

    const swiperRef = React.useRef<SwiperCore | null>(null);
    const [activeIndex, setActiveIndex] = React.useState(0);



    const handleNext = () => {
      if (swiperRef.current) {
        if (swiperRef.current.isEnd) {
          swiperRef.current.slideTo(0);
          setActiveIndex(0);
        } else {
          swiperRef.current.slideNext();
        }
      }
    };
  
    const handleSlideChange = (swiper: SwiperCore) => {
      setActiveIndex(swiper.realIndex);
    };

    return (
      <>
        <div className="flex flex-row gap-3 items-start w-full max-w-7xl mx-auto px-2 2xl:px-0">
          <PageTitle
            variant="side"
            title="رویکردهای مدرسه هیبریدی شهریار ایران"
            description="چرا مدرسۀ شهریار را برای آینده تحصیلی فرزندانمان انتخاب کنیم...؟"
          />
          <SliderThumbs
           count={3}
           active={activeIndex}
           handleNext={handleNext}
          />
        </div>
        <div className="w-full bg-primary-50 py-4 px-2 2xl:px-0">
          <Slider
            swiperRef={swiperRef}
            handleSlideChange={handleSlideChange}
            items={approachesList}
            render={(v, idx) => {
              return (
                <ApproachesCard
                  key={v.id}
                  title={v.title}
                  englishTitle={v.englishTitle}
                  description={v.description}
                  icon={(
                    <Icon 
                      icon={v.icon}
                      width="32" 
                      height="32"
                    />
                  )}
                  isHovered={hoveredIdx === idx}
                  setHovered={() => setHoveredIdx(idx)}
                />
              )
            }}
          />
        </div>
      </>
    )
}
