
import { CusAccordion } from "@/components/CusAccordion/CusAccordion";
import { PageTitle } from "@/components/PageTitle/PageTitle";




import { ApproachesSection } from "@/components/Sections/ApproachesSection/ApproachesSection";
import { FeaturesSection } from "@/components/Sections/FeaturesSection/FeaturesSection";
import { CommentSection } from "@/components/Sections/CommentSection/CommentSection";
import { IntroVideoSection } from "@/components/Sections/IntroVideoSection/IntroVideoSection";
import { AboutUsSummarySection } from "@/components/Sections/AboutUsSummarySection/AboutUsSummarySection";
import { HomeIntroSection } from "@/components/Sections/HomeIntroSection/HomeIntroSection";
import { TopRankingsCard } from "@/components/TopRankingsCard/TopRankingsCard";
import { faqData } from "@/data/faqData";
import { Metadata } from "next";
import { FAQSection } from "@/components/Sections/FAQSection/FAQSection";
import { NewsSection } from "@/components/Sections/NewsSection/NewsSection";

export const metadata: Metadata = {
  title: "صفحه اصلی"
}

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
        {/* <NewsSection/> */}
        <FAQSection/>
        <div/>
      </section>
    );
}
