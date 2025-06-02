import { Chapter } from "@/components/Blog/Chapter/Chapter";



export default function Home() {
    return (
      <section className="pt-[72px] pb-96 md:pt-[104px]">
        <div className="text-justiify pt-20">
        <Chapter
  listItems={[
    "آموزش معکوس چیست؟",
    "تاریخچه آموزش معکوس چیست؟",
    "تأثیر مثبت آموزش معکوس بر آموزش چیست؟",
    "۴ ستون یادگیری معکوس کدامند؟",
    "آموزش معکوس با آموزش هیبریدی چه تفاوتی دارد؟",
    "مقایسه یادگیری مستقیم با یادگیری معکوس",
    "تفاوت گل‌کار و گُل کار در آموزش معکوس و مستقیم",
    "در آموزش معکوس چه چالش‌هایی پیش‌رو است؟",
    "جمع‌بندی",
  ]}
  initialSelectedKey="3"
/>


        </div>
      </section>
    );
}
