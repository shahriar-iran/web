"use client"

import * as React from "react"
import { ApproachesCard } from "../../ApproachesCard/ApproachesCard";
import { Icon } from "@iconify/react";
import { Slider } from "../../Slider/Slider";
import { SliderThumbs } from "@/components/SliderThumbs/SliderThumbs";
import { PageTitle } from "@/components/PageTitle/PageTitle";



type ApproachesSectionPropsType = {

}



const approachesList = [
    {
      id: 1,
      title: "کــار تیمی و نخبه‌مــداری",
      englishTitle: "Teamwork",
      icon: "solar:users-group-rounded-bold-duotone",
    },
    {
      id: 2,
      title: "مسئولــــیت پذیـــری",
      englishTitle: "Responsibility",
      icon: "solar:key-bold-duotone",
    },
    {
      id: 3,
      title: "کوچینگ",
      englishTitle: "Coaching",
      icon: "solar:notification-unread-lines-bold-duotone",
    },
    {
      id: 4,
      title: "آینده پژوهی",
      englishTitle: "Future research",
      icon: "solar:palette-round-bold-duotone",
    },
    {
      id: 5,
      title: "شخصی سازی",
      englishTitle: "Personalization",
      icon: "solar:layers-bold-duotone",
    },
    {
      id: 6,
      title: "نوآوری و پژوهش",
      englishTitle: "Innovation and research",
      icon: "solar:notes-bold-duotone",
    },
  ]


export const ApproachesSection: React.FC<ApproachesSectionPropsType> = (props) => {

    const {

    } = props;

    const [hoveredIdx, setHoveredIdx] = React.useState(3)


    return (
      <>
        <div className="flex flex-row gap-3 items-start w-full max-w-7xl mx-auto px-2 2xl:px-0">
          <PageTitle
            variant="side"
            title="رویکردهای مدرسه هیبریدی شهریار ایران"
            description="چرا مدرسۀ شهریار را برای آینده تحصیلی فرزندانمان انتخاب کنیم...؟"
          />
          <SliderThumbs count={3}/>
        </div>
        <div className="w-full bg-primary-50 py-4 px-2 2xl:px-0">
          <Slider
            items={approachesList}
            render={(v, idx) => {
              return (
                <ApproachesCard
                  key={v.id}
                  title={v.title}
                  englishTitle={v.englishTitle}
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

