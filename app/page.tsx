import { AboutCard } from "@/components/AboutCard/AboutCard";
import { ArticleCard } from "@/components/ArticleCard/ArticleCard";
import { CusAccordion } from "@/components/CusAccordion/CusAccordion";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Image } from "@heroui/image";
import NextImage from "next/image"



import { ApproachesSection } from "@/components/Sections/ApproachesSection/ApproachesSection";
import { FeaturesSection } from "@/components/Sections/FeaturesSection/FeaturesSection";
import { CommentSection } from "@/components/Sections/CommentSection/CommentSection";
import { IntroVideoSection } from "@/components/Sections/IntroVideoSection/IntroVideoSection";
import { AboutUsSummarySection } from "@/components/Sections/AboutUsSummarySection/AboutUsSummarySection";
import { HomeIntroSection } from "@/components/Sections/HomeIntroSection/HomeIntroSection";
import { TopRankingsCard } from "@/components/TopRankingsCard/TopRankingsCard";



export default function Page() {
    return (
      <section className=" flex flex-col gap-6 md:gap-12">
        <section className="relative flex flex-col gap-6 md:gap-12 before:absolute before:bg-primary before:rounded-b-3xl before:w-full before:h-[100dvh]">
          <div className="w-full h-[100dvh] max-w-7xl px-2 2xl:px-0 mx-auto mt-20 md:mt-28 lg:mt-32">
              <TopRankingsCard/> 
          </div>
        </section>
        {/* <HomeIntroSection/> */}
        {/* <TopRankingsCard/> */}
        <AboutUsSummarySection/>
        <ApproachesSection/>
        <FeaturesSection/>
        <CommentSection/>
        <IntroVideoSection/>
        <div className="flex flex-col gap-4 w-full max-w-7xl mx-auto px-3">
          <PageTitle
            variant="side"
            title="جدیدترین اخبار شهریار ایران"
            description="ایپسوم متن ساختگی با تولید سادگی نـامفــــــهوم از صنعت..."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
            <div className="flex flex-col gap-4">
              <ArticleCard
                title="گزارش تصویری | دورهمی شاعرانه به مناسبت سالروز بزرگداشت سعدی"
                footerItems={[
                  {
                    icon: (
                      <Icon icon="solar:calendar-bold-duotone" width="20" height="20" />
                    ),
                    value: "02 اردیبهشت 1395"
                  },
                ]}
              />
              <ArticleCard
                title="گزارش تصویری | دورهمی شاعرانه به مناسبت سالروز بزرگداشت سعدی"
                footerItems={[
                  {
                    icon: (
                      <Icon icon="solar:calendar-bold-duotone" width="20" height="20" />
                    ),
                    value: "02 اردیبهشت 1395"
                  },
                ]}
              />
              <ArticleCard
                title="گزارش تصویری | دورهمی شاعرانه به مناسبت سالروز بزرگداشت سعدی"
                footerItems={[
                  {
                    icon: (
                      <Icon icon="solar:calendar-bold-duotone" width="20" height="20" />
                    ),
                    value: "02 اردیبهشت 1395"
                  },
                ]}
              />
            </div>
            <div className="flex flex-col gap-4">
              <ArticleCard
                title="گزارش تصویری | دورهمی شاعرانه به مناسبت سالروز بزرگداشت سعدی"
                footerItems={[
                  {
                    icon: (
                      <Icon icon="solar:calendar-bold-duotone" width="20" height="20" />
                    ),
                    value: "02 اردیبهشت 1395"
                  },
                ]}
              />
              <ArticleCard
                title="گزارش تصویری | دورهمی شاعرانه به مناسبت سالروز بزرگداشت سعدی"
                footerItems={[
                  {
                    icon: (
                      <Icon icon="solar:calendar-bold-duotone" width="20" height="20" />
                    ),
                    value: "02 اردیبهشت 1395"
                  },
                ]}
              />
              <ArticleCard
                title="گزارش تصویری | دورهمی شاعرانه به مناسبت سالروز بزرگداشت سعدی"
                footerItems={[
                  {
                    icon: (
                      <Icon icon="solar:calendar-bold-duotone" width="20" height="20" />
                    ),
                    value: "02 اردیبهشت 1395"
                  },
                ]}
              />
            </div>
            <div className="flex flex-col gap-4">
              <ArticleCard
                title="گزارش تصویری | دورهمی شاعرانه به مناسبت سالروز بزرگداشت سعدی"
                footerItems={[
                  {
                    icon: (
                      <Icon icon="solar:calendar-bold-duotone" width="20" height="20" />
                    ),
                    value: "02 اردیبهشت 1395"
                  },
                ]}
              />
              <ArticleCard
                title="گزارش تصویری | دورهمی شاعرانه به مناسبت سالروز بزرگداشت سعدی"
                footerItems={[
                  {
                    icon: (
                      <Icon icon="solar:calendar-bold-duotone" width="20" height="20" />
                    ),
                    value: "02 اردیبهشت 1395"
                  },
                ]}
              />
              <ArticleCard
                title="گزارش تصویری | دورهمی شاعرانه به مناسبت سالروز بزرگداشت سعدی"
                footerItems={[
                  {
                    icon: (
                      <Icon icon="solar:calendar-bold-duotone" width="20" height="20" />
                    ),
                    value: "02 اردیبهشت 1395"
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center w-full">
          <div className="w-full max-w-7xl mx-auto px-3">
            <PageTitle
              variant="side"
              title="جواب تمام سوالاتت اینجاست"
              description="ایپسوم متن ساختگی با تولید سادگی نـامفــــــهوم از صنعت..."
            />
          </div>
          <CusAccordion/>
        </div>
        <div/>
      </section>
    );
}
