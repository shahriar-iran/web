"use client"

import * as React from "react"
import { ApproachesCard } from "../../ApproachesCard/ApproachesCard";
import { Icon } from "@iconify/react";
import { UniversalSliderSection } from "@/components/UniversalSliderSection/UniversalSliderSection";


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
      description: "با به‌کارگیری عناصر بازی در آموزش، انگیزه درونی دانش‌آموزان را تقویت می‌کنیم."
    },
  ]


export const ApproachesSection: React.FC<ApproachesSectionPropsType> = (props) => {
    const [hoveredIdx, setHoveredIdx] = React.useState(3);

    return (
      <UniversalSliderSection
        title="رویکردهای مدرسه هیبریدی شهریار ایران"
        description="چرا مدرسۀ شهریار را برای آینده تحصیلی فرزندانمان انتخاب کنیم...؟"
        titleVariant="side"
        itemsPerView={4}
        itemsPerViewTablet={2}
        itemsPerViewMobile={1}
        gap={0}
        // freeMode={true}
        loop={false}
        enableMousewheel={true}
        hasBackground={true}
        backgroundClass="bg-primary-50"
        showSliderThumbs={true}
        slideCount={approachesList.length}
      >
        {approachesList.map((approach, idx) => (
          <ApproachesCard
            key={approach.id}
            title={approach.title}
            englishTitle={approach.englishTitle}
            description={approach.description}
            icon={(
              <Icon 
                icon={approach.icon}
                width="32" 
                height="32"
              />
            )}
            isHovered={hoveredIdx === idx}
            setHovered={() => setHoveredIdx(idx)}
          />
        ))}
      </UniversalSliderSection>
    )
}

