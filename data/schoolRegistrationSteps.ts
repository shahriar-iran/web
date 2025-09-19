export const schoolRegistrationStepsData = [
  {
    id: 1,
    title: "تکمیل فرم پیش ثبت‌نام",
    description: "اولین قدم برای ثبت‌نام در باشگاه المپیاد، تکمیل فرم پیش ثبت‌نام است. در این مرحله اطلاعات اولیه خود را وارد کنید.",
    icon: "solar:document-add-bold-duotone"
  },
  {
    id: 2,
    title: "بررسی مدارک و تأیید اولیه",
    description: "پس از ارسال فرم، کارشناسان ما مدارک شما را بررسی کرده و در صورت تأیید، با شما تماس خواهند گرفت.",
    icon: "solar:file-check-bold-duotone"
  },
  {
    id: 3,
    title: "آزمون ورودی و مصاحبه",
    description: "شرکت در آزمون ورودی و مصاحبه حضوری برای بررسی سطح علمی و انگیزه شما در ادامه تحصیل.",
    icon: "solar:user-speak-rounded-bold-duotone"
  },
  {
    id: 4,
    title: "نتایج و ثبت‌نام نهایی",
    description: "اعلام نتایج آزمون و در صورت قبولی، انجام مراحل ثبت‌نام نهایی و پرداخت شهریه.",
    icon: "solar:medal-star-bold-duotone"
  },
  {
    id: 5,
    title: "شروع دوره آموزشی",
    description: "ورود به باشگاه المپیاد و شروع دوره‌های آموزشی تخصصی با بهترین اساتید کشور.",
    icon: "solar:graduation-bold-duotone"
  }
];

export type SchoolRegistrationStep = {
  id: number;
  title: string;
  description: string;
  icon?: string;
  image?: string;
};
