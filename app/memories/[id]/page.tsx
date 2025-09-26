import { memoriesData } from "@/data/memoriesData";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const currentMemory = memoriesData.find(m => m.id === id);
  
  return {
    title: currentMemory ? currentMemory.title : "خاطره بازی"
  };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const currentMemory = memoriesData.find(m => m.id === id);
  
  if (!currentMemory) {
    notFound();
  }

  return (
    <section className="relative flex flex-col gap-6 md:gap-12 before:absolute before:bg-primary before:rounded-b-3xl before:w-full before:h-[17dvh] md:before:h-[24dvh]">
      <div className="w-full max-w-7xl px-2 2xl:px-0 mx-auto mt-20 md:mt-28 lg:mt-32">
        <div className="flex flex-col gap-3 justify-between items-center">
          <PageTitle
            variant="centered"
            title={currentMemory.title}
            description="هر ساله دبیرستان شهریارتوس تعدادی برنامه تفریحی، فرهنگی و ورزشی برگزار می کند، در این صفحه میتوانید کلیپ های رویدادهای گذشته را مشاهده کنید."
            bgClassName="!fill-primary-100"
            className="!text-white"
            descriptionClassName="!text-foreground/60"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-8">
        {/* نمایش خاطره انتخاب شده */}
        <div className="w-full max-w-4xl bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-primary mb-4 text-center">
            {currentMemory.title}
          </h2>
          
          <div className="text-center text-gray-600">
            <p className="mb-4">خاطرات و تصاویر مربوط به این سال تحصیلی</p>
            
            {/* اینجا می‌تونید گالری تصاویر، ویدیوها یا خاطرات را بذارید */}
            <div className="bg-gray-100 rounded-lg p-8 mt-4">
              <p className="text-gray-500">
                محتوای خاطرات {currentMemory.title} به زودی اضافه خواهد شد...
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="h-10"/>
    </section>
  );
}