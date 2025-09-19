export const olympiadRegistrationStepsData = [
  {
    id: 1,
    stepTitle: "مرحلۀ اولــــــــ",
    title: "تکمیل فرم پیش ثبت‌نام المپیاد",
    description: "اولین قدم برای ورود به باشگاه المپیاد شهریار، تکمیل فرم پیش ثبت‌نام آنلاین است. اطلاعات شخصی و تحصیلی خود را به دقت وارد کنید.",
    image: "olympiad-step-1.jpg"
  },
  {
    id: 2,
    stepTitle: "مرحلۀ دومــــــــ",
    title: "بررسی سوابق تحصیلی و علمی",
    description: "کارشناسان ما سوابق تحصیلی، نمرات و رتبه‌های علمی شما در مسابقات المپیاد را بررسی خواهند کرد تا سطح آمادگی شما ارزیابی شود.",
    image: "olympiad-step-2.jpg"
  },
  {
    id: 3,
    stepTitle: "مرحلۀ سومــــــــ",
    title: "آزمون تخصصی المپیاد",
    description: "شرکت در آزمون تخصصی در رشته‌های ریاضی، فیزیک، شیمی یا علوم کامپیوتر برای سنجش دقیق توانایی‌های علمی شما.",
    image: "olympiad-step-3.jpg"
  },
  {
    id: 4,
    stepTitle: "مرحلۀ چهارمــــــــ",
    title: "مصاحبه انگیزشی",
    description: "مصاحبه حضوری با اساتید باتجربه باشگاه المپیاد برای بررسی انگیزه، اهداف و برنامه‌های آینده شما در مسیر المپیاد.",
    image: "olympiad-step-4.jpg"
  },
  {
    id: 5,
    stepTitle: "مرحلۀ پنجمــــــــ",
    title: "اعلام نتایج و پذیرش",
    description: "اعلام نتایج نهایی و در صورت پذیرش، ارائه برنامه آموزشی شخصی‌سازی شده متناسب با سطح و اهداف شما.",
    image: "olympiad-step-5.jpg"
  },
  {
    id: 6,
    stepTitle: "مرحلۀ ششمــــــــ",
    title: "شروع دوره‌های تخصصی",
    description: "آغاز کلاس‌های تخصصی المپیاد با بهترین مربیان کشور و دسترسی به منابع و تجهیزات پیشرفته باشگاه.",
    image: "olympiad-step-6.jpg"
  }
];

export type OlympiadRegistrationStep = {
  id: number;
  stepTitle: string;
  title: string;
  description: string;
  image?: string;
};
