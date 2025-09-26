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
    <section className="relative flex flex-col gap-6 md:gap-12 before:absolute before:bg-primary before:rounded-b-3xl before:w-full before:h-[26dvh] md:before:h-[32dvh]">
        <div className="w-full max-w-7xl px-2 2xl:px-0 mx-auto mt-20 md:mt-28 lg:mt-34">
            <div className="flex flex-col gap-3 justify-between items-start">
                <PageTitle
                    variant="side"
                    title={currentMemory.title}
                    description="دبیرستـان غـیردولتی شـهریار ایــران"
                    className="!text-white"
                    starClassName="!text-white"
                    descriptionClassName="!text-foreground"
                />
                <p className="text-white text-justify z-10 text-sm font-light">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چـــاپگرها و متون بــــلکه روزنامـه و
        مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز است.
                </p>
            </div>
        </div>

      <div className="flex flex-col items-center gap-8">
        {/* نمایش خاطره انتخاب شده */}
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 2xl:px-0 mx-auto">
            <div className="bg-red-500 rounded-lg shadow-md h-20 p-4">
                
            </div>
            <div className="bg-red-500 rounded-lg shadow-md h-20 p-4">
                
            </div>
            <div className="bg-red-500 rounded-lg shadow-md h-20 p-4">
                
            </div>
        </div>
      </div>

        <div className="w-full max-w-7xl px-2 2xl:px-0 mx-auto mt-20 md:mt-28 lg:mt-32">
            <div className="flex flex-col gap-3 justify-between items-center">
                <PageTitle
                    variant="centered"
                    title="(گـــــالری تــــصاویر 1397 - 1396)"
                    description="مدرسۀ شهریار ایران برای دوره اول در پنج حوزه مختلف افتخار کسب کرده است."
                    bgClassName="!fill-primary-100"
                    descriptionClassName="!text-foreground/60"
                />
            </div>
        </div>
      
      <div className="h-10"/>
    </section>
  );
}