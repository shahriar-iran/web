import { PageTitle } from "@/components/PageTitle/PageTitle";
import { MemoriesDropdown } from "@/components/MemoriesDropdown/MemoriesDropdown";
import { memoriesData } from "@/data/memoriesData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "خاطره بازی"
}

export default async function Page({ searchParams }: { searchParams: Promise<{ year?: string }> }) {
  const params = await searchParams;
  const selectedMemory = params?.year 
    ? memoriesData.find(m => m.id === params.year)
    : undefined;

  return (
    <section className="relative flex flex-col gap-6 md:gap-12 before:absolute before:bg-primary before:rounded-b-3xl before:w-full before:h-[17dvh] md:before:h-[24dvh]">
      <div className="w-full max-w-7xl px-2 2xl:px-0 mx-auto mt-20 md:mt-28 lg:mt-32">
        <div className="flex flex-col gap-3 justify-between items-center">
          <PageTitle
            variant="centered"
            title="(خـاطرات دورۀ اول و دوم دبـیرستــان شــهریــار ایــران)"
            description="هر ساله دبیرستان شهریارتوس تعدادی برنامه تفریحی، فرهنگی و ورزشی برگزار می کند، در این صفحه میتوانید کلیپ های رویدادهای گذشته را مشاهده کنید."
            bgClassName="!fill-primary-100"
            className="!text-white"
            descriptionClassName="!text-foreground/60"
          />
        </div>
      </div>
      
      {/* باکس انتخاب سال */}
      <MemoriesDropdown
        memories={memoriesData}
        selected={selectedMemory}
      />
      
      <div className="flex flex-col items-center gap-8">
        <div className="text-center text-gray-600">
          <p>لطفاً یکی از سال‌های تحصیلی را انتخاب کنید تا خاطرات آن سال را مشاهده کنید.</p>
        </div>
      </div>
      
      <div className="h-10"/>
    </section>
  );
}