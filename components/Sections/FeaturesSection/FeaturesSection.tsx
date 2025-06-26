import * as React from "react"
import { ApproachesCard } from "../../ApproachesCard/ApproachesCard";
import { Icon } from "@iconify/react";
import { Slider } from "../../Slider/Slider";
import { SliderThumbs } from "@/components/SliderThumbs/SliderThumbs";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import type SwiperCore from 'swiper';
import { FeatureCard } from "@/components/FeatureCard/FeatureCard";


type FeaturesSectionPropsType = {

}



const featuresList = [
    {
      id: 1,
      title: "کــار تیمی و نخبه‌مــداری",
      englishTitle: "Teamwork",
      icon: "solar:users-group-rounded-bold-duotone",
    },
]


export const FeaturesSection: React.FC<FeaturesSectionPropsType> = (props) => {

    const {
      
    } = props;

    

    return (
      <div className="flex flex-col gap-5 items-center w-full max-w-7xl mx-auto px-2 2xl:px-0">
        <PageTitle
          variant="centered"
          title="هشت‌ وجهی تاکتیکی مدرسه هیبریدی شهریار ایران"
          description="(شــهریار ایـــران، اولــین مــدرسه هیــبریدی ایـــران)"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
            <FeatureCard
              title="هـــــویت‌یــــــابی و مــــــــعناشناســـــــی"
              englishTitle="Semantics"
              image="/static/assets/images/s1.png"
              code="1"
            />
            <FeatureCard
              title="مـــهـــارت‌ورزی‌ و اشتغال‌پـــذیری"
              englishTitle="Employability"
              image="/static/assets/images/s2.png"
              code="2"
            />
            <FeatureCard
              title="استعدادیابی و تــــــــوسعه فـــــــردی"
              englishTitle="Personal development"
              image="/static/assets/images/s3.png"
              code="3"
            />
            <FeatureCard
              title="آمــــوزش فــــراگیر و پــــیشرفتــــه"
              englishTitle="Advanced learning"
              image="/static/assets/images/s4.png"
              code="4"
            />
            <FeatureCard
              title="بـــــــــازی، لــــــــذت طــــــــبیعت"
              englishTitle="Play, pleasure, nature"
              image="/static/assets/images/s5.png"
              code="5"
            />
            <FeatureCard
              title="پــــــــایـــــش جــــــــسـم و روان"
              englishTitle="Body and Mind Monitoring"
              image="/static/assets/images/s6.png"
              code="6"
            />
            <FeatureCard
              title="آفـــــــــریـنش‌هـــــــای هـــنری و ادبــــی"
              englishTitle="Artistic creations"
              image="/static/assets/images/s7.png"
              code="7"
            />
            <FeatureCard
              title="مدیـــــریــــــت مـجــــــــازی و تولید دیجیتال"
              englishTitle="Virtual Management"
              image="/static/assets/images/s8.png"
              code="8"
            />
        </div>
      </div>
    )
}

