import { Metadata } from "next";
import { PreregisterCard } from "@/components/PreregisterCard/PreregisterCard";

export const metadata: Metadata = {
  title: "پیش ثبت نام | دبیرستان هیبریدی",
};

export default function Page() {
  return (
    <section className="relative flex flex-col gap-6 md:gap-12 before:absolute before:bg-primary before:rounded-b-3xl before:w-full before:h-[50dvh]">
      <div className="w-full max-w-7xl px-2 2xl:px-0 mx-auto mt-20 md:mt-28 lg:mt-32">
        <PreregisterCard />
      </div>
    </section>
  );
}
