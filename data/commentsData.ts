export interface Comment {
  id: string;
  fullName: string;
  grade: string;
  date: string;
  avatarUrl?: string;
  comment: string;
  isParent?: boolean;
  parentName?: string;
}

export const commentsData: Comment[] = [
  {
    id: "1",
    fullName: "محمدرضا سلطانی",
    grade: "هفتم",
    date: new Date(2023, 4, 23).toDateString(),
    avatarUrl: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
    comment: "این مدرسه جزو بهترین مدارس ایران هست، از وقتی ایـنجا ثبت‌نام کـردم عــملکردم خیلی بـهتر شده و خیلی رسیدگی خوبی دارن، کلی دوست جدید پیــــدا کردم و مدرسه کلی بــــرنامه‌های خفن و جـــذاب داره واسمون، راستی اردو هم اینجا زیاد داریم.",
  },
  {
    id: "2",
    fullName: "فاطمه احمدی",
    grade: "نهم",
    date: new Date(2023, 5, 1).toDateString(),
    avatarUrl: "https://mdbcdn.b-cdn.net/img/new/avatars/1.webp",
    comment: "من به عنوان یک دانش‌آموز خیلی راضی هستم از مدرسه شهریار ایران، معلم‌ها خیلی باحالن و کلی چیزای جدید یاد می‌گیرم. برنامه‌های فوق‌العاده‌ای دارن که هم سرگرمم می‌کنه و هم یادگیریم رو افزایش می‌ده. دوست دارم همیشه اینجا باشم!",
  },
  {
    id: "3",
    fullName: "سجاد کریمی",
    grade: "هشتم",
    date: new Date(2023, 5, 10).toDateString(),
    avatarUrl: "https://mdbcdn.b-cdn.net/img/new/avatars/3.webp",
    comment: "من به عنوان یک اولیاء خیلی راضی هستم از مدرسه شهریار ایران، بچه‌ام کلی پیشرفت کرده و معلم‌ها خیلی با حوصله و دلسوز هستن. برنامه‌های فوق‌العاده‌ای دارن که بچه‌ها رو هم سرگرم می‌کنه و هم یادگیریشون رو افزایش می‌ده.",
    isParent: true,
    parentName: "عباس کریمی",
  },
  {
    id: "4",
    fullName: "مینا رضایی",
    grade: "دهم",
    date: new Date(2023, 5, 15).toDateString(),
    avatarUrl: "https://mdbcdn.b-cdn.net/img/new/avatars/4.webp",
    comment: "مدرسه شهریار ایران بهترین انتخاب برای من بود. معلم‌ها خیلی باحالن و کلی چیزای جدید یاد می‌گیرم. برنامه‌های فوق‌العاده‌ای دارن که هم سرگرمم می‌کنه و هم یادگیریم رو افزایش می‌ده. دوست دارم همیشه اینجا باشم!",
  },
  {
    id: "5",
    fullName: "علی موسوی",
    grade: "یازدهم",
    date: new Date(2023, 5, 20).toDateString(),
    avatarUrl: "https://mdbcdn.b-cdn.net/img/new/avatars/5.webp",
    comment: "من به عنوان یک اولیاء خیلی راضی هستم از مدرسه شهریار ایران، بچه‌ام کلی پیشرفت کرده و معلم‌ها خیلی با حوصله و دلسوز هستن. برنامه‌های فوق‌العاده‌ای دارن که بچه‌ها رو هم سرگرم می‌کنه و هم یادگیریشون رو افزایش می‌ده.",
    isParent: true,
    parentName: "زهرا موسوی",
  },
];