import { SummaryCard } from "@/components/Comment/SummaryCard/SummaryCard";


export default function Home() {
    return (
      <section className="pt-[72px] pb-96 md:pt-[104px]">
        <div className="text-justiify pt-20">
        <SummaryCard
                name="صالح محمدی"
                avatarUrl="https://i.pravatar.cc/150?img=12"
                degree="کارشناس ارشد طراحی رابط کاربری"
                date="فروردین ۱۴۰۳"
                bgClassName="bg-blue-100 text-blue-700 rounded-xl text-center"
                starClassName=""
            />
        </div>
      </section>
    );
}
