import { Metadata } from "next";
import { PreregisterCard } from "@/components/PreregisterCard/PreregisterCard";
import { PreregisterForm } from "@/components/PreregisterForm/PreregisterForm";
import { CusAccordion } from "@/components/CusAccordion/CusAccordion";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { SchoolRegistrationStepsSection } from "@/components/Sections/SchoolRegistrationStepsSection";
import { schoolRegistrationStepsData } from "@/data/schoolRegistrationSteps";
import { CommentSection } from "@/components/Sections/CommentSection/CommentSection";

export const metadata: Metadata = {
  title: "پیش ثبت نام | دبیرستان هیبریدی",
};

export default function Page() {
  return (
    <section className="relative flex flex-col gap-6 md:gap-12 before:absolute before:bg-primary before:rounded-b-3xl before:w-full before:h-[50dvh]">
      <div className="w-full max-w-7xl px-2 2xl:px-0 mx-auto mt-20 md:mt-28 lg:mt-32">
        <PreregisterCard />
      </div>
      <div className="w-full max-w-7xl px-2 2xl:px-0 mx-auto">
        <PreregisterForm
          id="school"
          title="ثبـــــت‌نــــــام حضــــــــوری در مدرسه شـــــــــــــهریــــــار ایــــــــــــــــــران"
          img="register-box-school.svg"
        />
      </div>
      <div className="flex flex-col gap-3 items-center w-full">
        <div className="w-full max-w-7xl mx-auto px-3">
          <PageTitle
            variant="side"
            title="مـــــدرسۀ هـــــیبریدی چـــــــیست؟"
            description="دبیرستــــان غـــــیردولتی شــــهریار ایـــــران"
          />
        </div>
        <div className="w-full py-10">
          <div className="flex justify-between items-center w-full max-w-7xl px-2 2xl:px-0 mx-auto">
            ---
          </div>
        </div>
      </div>
      <SchoolRegistrationStepsSection
        steps={schoolRegistrationStepsData}
        showNavigation={true}      
      />
      <CommentSection/>
      <div className="flex flex-col gap-3 items-center w-full">
        <div className="w-full max-w-7xl mx-auto px-3">
          <PageTitle
            variant="side"
            title="جواب تمام سوالاتت اینجاست"
            description="ایپسوم متن ساختگی با تولید سادگی نـامفــــــهوم از صنعت..."
          />
        </div>
        <CusAccordion
          items={[]}  
        />
      </div>
      <div className="h-10"/>
    </section>
  );
}
