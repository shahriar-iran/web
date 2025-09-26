import { PageTitle } from "@/components/PageTitle/PageTitle";
import { MemoriesDropdown } from "@/components/MemoriesDropdown/MemoriesDropdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "خاطره بازی"
}

interface Memory {
  id: string;
  title: string;
}

export default function Page({ searchParams }: { searchParams: { year?: string } }) {

    const memories: Memory[] = [
        {
            id: "1396-1397",
            title: "خاطرات سال 1397-1396",
        },
        {
            id: "1397-1398",
            title: "خاطرات سال 1398-1397",
        },
        {
            id: "1398-1399",
            title: "خاطرات سال 1399-1398",
        },
        {
            id: "1400-1399",
            title: "خاطرات سال 1400-1399",
        },
        {
            id: "1401-1400",
            title: "خاطرات سال 1401-1400",
        },
    ];

    const selectedMemory = searchParams.year 
        ? memories.find(m => m.id.toString() === searchParams.year)
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
            <MemoriesDropdown
                memories={memories}
                selected={selectedMemory}
            />
            <div className="h-10"/>
        </section>
    )
}