import {Detail} from "@/components/Blog/Detail/Detail"


export default function Home() {
    return (
      <section className="pt-[72px] pb-96 md:pt-[104px]">
        <div className="text-justiify pt-20">
        <Detail
        avatarUrl="https://i.pravatar.cc/150?img=32"
        teller="دکتر احمدی"
        releaseDate="۱۴۰۴/۰۳/۱۲"
        duration="۷ دقیقه"
        category="یادگیری معکوس"
      />
        </div>
      </section>
    );
}
