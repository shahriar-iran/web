import * as React from "react"
import { AboutCard } from "@/components/AboutCard/AboutCard";
import { Icon } from "@iconify/react";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import Link from "next/link";
import { ScrollShadow } from "@heroui/scroll-shadow";


type AboutUsSummarySectionPropsType = {

}



export const AboutUsSummarySection: React.FC<AboutUsSummarySectionPropsType> = (props) => {

    const {
      
    } = props;

    

    return (
      <div className="flex flex-row flex-wrap gap-8 items-end justify-center w-full max-w-7xl px-2 2xl:px-0 mx-auto xl:py-12">
          <div className="max-w-[400px] min-w-[200px]">
            <AboutCard
              title="دبــــــیرستان هــــیبریدی و غــــیردولتی شــــهریار ایــــــران"
              imageUrl="/static/assets/images/about-us.jpg"
              footerItems={[
                  {
                    icon: (
                      <Icon icon="solar:calendar-bold-duotone" width="20" height="20" />
                    ),
                    title: "سـال‌ تـاسیس:",
                    value: "02 اردیبهشت 1395"
                  },
                  {
                    icon: (
                        <Icon icon="solar:code-scan-bold-duotone" width="20" height="20" />
                    ),
                    title: "تــعداد شـعب:",
                    value: "3 شـــعبــــه"
                  },
              ]}
            />
          </div>
          <div className="flex flex-col mb-12 gap-4 md:gap-12 flex-1">
            <PageTitle
              variant="side"
              title="دربــــــــارۀ مـــــــــا"
              description="دبیرستــــان غـــــیردولتی شــــهریار ایـــــران"
            />
            <p className="font-light leading-7 text-foreground text-justify">
              مدرسه شهریارایران به‌عنوان یکی از پیشروترین مراکز آموزشی کشور، با رویکردی نوین در یادگیری، مسیر خود را آغاز کرده است.
              <br/>
ما با تکیه بر روش‌های آموزشی ترکیبی، بهره‌گیری از فناوری‌های نوین و ایجاد محیطی پویا و الهام‌بخش، در تلاش هستیم تا دانش‌آموزانی توانمند، خلاق و آماده ورود به آینده‌ای روشن تربیت کنیم.
              <br/>
شهریارایران با سه شعبه فعال در دبیرستان دوره اول، دبیرستان دوره دوم و دفتر مرکزی، فضایی را فراهم کرده است که در آن آموزش تنها به انتقال دانش محدود نمی‌شود؛ بلکه پرورش مهارت‌های تفکر، خلاقیت، مسئولیت‌پذیری و کار تیمی در اولویت قرار دارد.
            </p>
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <Button
                color="primary"
                variant="shadow"
                size="lg"
                radius="lg"
                className="rounded-2xl order-last md:order-first"
                endContent={(
                  <div className="text-white flex justify-center items-center">
                    <Icon icon="solar:arrow-left-line-duotone" width="20" height="20" />
                  </div>
                )}
                as={Link}
                href="/about"
              >
                ادامه مطلب
              </Button>
              <Card radius="lg" shadow="none" className="border-3 border-primary/20">
                <CardBody className="py-1 pr-1 pl-3">
                  <ScrollShadow orientation="horizontal" hideScrollBar className="flex flex-row gap-8 max-w-96">
                    <div className="shrink-0 flex flex-row items-center gap-2">
                      <div className="text-foreground bg-foreground/10 rounded-xl p-2 h-9 w-9 flex justify-center items-center">
                        <Icon icon="solar:user-hands-bold-duotone" width="20" height="20" />
                      </div>
                      <span className="font-bold text-sm text-foreground/45">
                        دانش آموزان ما
                      </span>
                      <span className="font-bold text-xl text-foreground">
                        710
                      </span>
                    </div>
                    <div className="shrink-0 flex flex-row items-center gap-2">
                      <div className="text-foreground bg-foreground/10 rounded-xl p-2 h-9 w-9 flex justify-center items-center">
                        <Icon icon="solar:notes-bold-duotone" width="20" height="20" />
                      </div>
                      <span className="font-bold text-sm text-foreground/45">
                        اساتید ما  
                      </span>
                      <span className="font-bold text-xl text-foreground">
                        37
                      </span>
                    </div>
                  </ScrollShadow>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
    )
}

