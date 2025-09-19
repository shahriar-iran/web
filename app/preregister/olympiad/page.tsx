import { Metadata } from "next";
import { PreregisterCard } from "@/components/PreregisterCard/PreregisterCard";
import { PreregisterForm } from "@/components/PreregisterForm/PreregisterForm";
import { CusAccordion } from "@/components/CusAccordion/CusAccordion";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { OlympiadLeadersSection } from "@/components/OlympiadLeadersSection/OlympiadLeadersSection";
import { OlympiadAchievementCard } from "@/components/Cards/OlympiadAchievementCard/OlympiadAchievementCard";
import { olympiadLeadersData } from "@/data/olympiadLeaders";
import { olympiadAchievementsData } from "@/data/olympiadAchievements";

export const metadata: Metadata = {
  title: "پیش ثبت نام | باشگاه المپیاد",
};

export default function Page() {
  return (
    <section className="relative flex flex-col gap-6 md:gap-12 before:absolute before:bg-primary before:rounded-b-3xl before:w-full before:h-[50dvh]">
      <div className="w-full max-w-7xl px-2 2xl:px-0 mx-auto mt-20 md:mt-28 lg:mt-32">
        <PreregisterCard />
      </div>
      <div className="w-full max-w-7xl px-2 2xl:px-0 mx-auto">
        <PreregisterForm
          id="olympiad"
          title="بــــــــــــــــاشگاه الـــــــــــمپیاد شـــــــــــــهریــــــار ایــــــــــــــــــران"
          img="register-box-olympiad.svg"
        />
      </div>
      <div className="flex flex-col gap-3 items-center w-full">
        <div className="w-full max-w-7xl mx-auto px-3">
          <PageTitle
            variant="side"
            title="آشنایی با باشگاه المپیاد شهریار ایران"
            description="دبیرستــــان غـــــیردولتی شــــهریار ایـــــران"
          />
        </div>
        <div className="w-full py-10">
          <div className="flex justify-between items-center w-full max-w-7xl px-2 2xl:px-0 mx-auto">
            ---
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 items-center w-full">
        <div className="w-full max-w-7xl mx-auto px-3">
          <PageTitle
            variant="side"
            title="مراحل ثبت‌نام در باشگاه المپیاد شهریار ایران"
            description="دبیرستــــان غـــــیردولتی شــــهریار ایـــــران"
          />
        </div>
        <div className="w-full bg-primary-50 py-10">
          <div className="flex justify-between items-center w-full max-w-7xl px-2 2xl:px-0 mx-auto">
            ---
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 items-center w-full">
        <div className="w-full max-w-7xl mx-auto px-3">
          <PageTitle
            variant="centered"
            title="(افــــــتخــارات باشگــــــاه المپیـــــــــــاد)"
            description="(شــهریار ایـــران، اولــین مــدرسه هیــبریدی ایـــران)"
          />
        </div>
        <div className="w-full py-10">
          <div className="w-full max-w-7xl px-2 2xl:px-0 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {olympiadAchievementsData.map((achievement) => (
                <OlympiadAchievementCard key={achievement.id} data={achievement} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <OlympiadLeadersSection
        leaders={olympiadLeadersData}
      />
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
      <div className="h-10"/>
    </section>
  );
}
