import { Metadata } from "next";
import { PreregisterCard } from "@/components/PreregisterCard/PreregisterCard";
import { PreregisterForm } from "@/components/PreregisterForm/PreregisterForm";
import { CusAccordion } from "@/components/CusAccordion/CusAccordion";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { OlympiadLeadersSection } from "@/components/OlympiadLeadersSection/OlympiadLeadersSection";
import type { OlympiadLeader } from "@/components/Cards/OlympiadLeaderCard/OlympiadLeaderCard";

export const metadata: Metadata = {
  title: "پیش ثبت نام | باشگاه المپیاد",
};

const olympiadLeaders: OlympiadLeader[] = [
  {
    id: 1,
    name: "دکتر احمد محمدی",
    subject: "ریاضیات",
    experience: "۱۵ سال تجربه تدریس",
    description: "متخصص در المپیاد ریاضی و مدرس برتر کشوری با رکورد قبولی بالا در مسابقات بین‌المللی",
    color: "text-blue-600",
    bgGradient: "bg-gradient-to-br from-blue-500 to-blue-700"
  },
  {
    id: 2,
    name: "دکتر زهرا کریمی",
    subject: "فیزیک",
    experience: "۱۲ سال تجربه تدریس",
    description: "دکتری فیزیک نظری و مربی تیم‌های المپیاد فیزیک با موفقیت‌های چشمگیر در عرصه بین‌الملل",
    color: "text-purple-600",
    bgGradient: "bg-gradient-to-br from-purple-500 to-purple-700"
  },
  {
    id: 3,
    name: "دکتر علی رضایی",
    subject: "شیمی",
    experience: "۱۰ سال تجربه تدریس",
    description: "استاد دانشگاه و مدرس المپیاد شیمی با تخصص در شیمی آلی و روش‌های نوین تجزیه",
    color: "text-green-600",
    bgGradient: "bg-gradient-to-br from-green-500 to-green-700"
  },
  {
    id: 4,
    name: "دکتر فاطمه احمدی",
    subject: "زیست‌شناسی",
    experience: "۸ سال تجربه تدریس",
    description: "متخصص زیست‌شناسی مولکولی و مدرس المپیاد زیست با رویکرد علمی و عملی",
    color: "text-teal-600",
    bgGradient: "bg-gradient-to-br from-teal-500 to-teal-700"
  },
  {
    id: 5,
    name: "مهندس حسن موسوی",
    subject: "علوم کامپیوتر",
    experience: "۹ سال تجربه تدریس",
    description: "مهندس نرم‌افزار و مدرس برنامه‌نویسی المپیاد با تخصص در الگوریتم‌ها و ساختمان داده",
    color: "text-indigo-600",
    bgGradient: "bg-gradient-to-br from-indigo-500 to-indigo-700"
  },
  {
    id: 6,
    name: "خانم مریم صادقی",
    subject: "ادبیات فارسی",
    experience: "۱۱ سال تجربه تدریس",
    description: "دکتری زبان و ادبیات فارسی و مدرس المپیاد ادبی با سابقه درخشان در مسابقات ملی",
    color: "text-pink-600",
    bgGradient: "bg-gradient-to-br from-pink-500 to-pink-700"
  }
];

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
          <div className="flex justify-between items-center w-full max-w-7xl px-2 2xl:px-0 mx-auto">
            ---
          </div>
        </div>
      </div>
      <OlympiadLeadersSection
        leaders={olympiadLeaders}
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
