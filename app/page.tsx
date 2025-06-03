import { CommentCard } from "@/components/Comment/CommentCard/CommentCard";

export default function Home() {
    return (
      <section className="pt-[72px] pb-96 md:pt-[104px]">
        <div className="text-justiify pt-20">
        <CommentCard
          userName="مـــحمدرضا سلطانـــــــی"
          degree="دانش‌آموز هفتم مدرسۀ شهریار"
          rating={4.5}
          date="1403/03/10"
          comment="این مدرسه جزو بهترین مدارس ایران هست، از وقتی ایـنجا ثبت‌نام کـردم عــملکردم خیلی بـهتر شده
و خیلی رسیدگی خوبی دارن، کلی دوست جدید پیــــدا کردم و مدرسه کلی بــــرنامه‌های خفن و جـــذاب
داره واسمون، راستی اردو هم اینجا زیاد داریم."
          avatarUrl="https://i.pravatar.cc/150?img=32"
        />
        </div>
      </section>
    );
}
