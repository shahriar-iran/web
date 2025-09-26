import { CusTab } from "@/components/CusTab/CusTab";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "تیم شهریار"
}

export default function Page() {
    return (
        <section className="relative flex flex-col gap-6 md:gap-12">
            <div className="w-full max-w-7xl px-2 2xl:px-0 mx-auto mt-20 md:mt-28 lg:mt-32">
                <div className="flex flex-col gap-3 justify-between items-center">
                    <PageTitle
                        variant="centered"
                        title="(افتــخــــارات دوره اولـــــــــــــــــ)"
                        description="مدرسۀ شهریار ایران برای دوره اول در پنج حوزه مختلف افتخار کسب کرده است. "
                        bgClassName="!fill-primary-100"
                        descriptionClassName="!text-foreground/60"
                    />
                </div>
            </div>
            <div className="w-full bg-primary-50 py-6 flex flex-col justify-center items-center">
                <CusTab
                    items={[
                        {
                            key: "lll",
                            title: "آموزشی",
                        },
                        {
                            key: "222",
                            title: "فرهنگی",
                        },
                        {
                            key: "333",
                            title: "تربیتی",
                        },
                        {
                            key: "444",
                            title: "سلامتی",
                        },
                    ]}
                    theme="primary"
                />
                <div className="flex justify-between items-center w-full max-w-7xl px-2 2xl:px-0 mx-auto">
                    slides
                </div>
            </div>
        </section>
    )
}