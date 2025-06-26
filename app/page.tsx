import { AboutCard } from "@/components/AboutCard/AboutCard";
import { ArticleCard } from "@/components/ArticleCard/ArticleCard";
import { CusAccordion } from "@/components/CusAccordion/CusAccordion";
import { FeatureCard } from "@/components/FeatureCard/FeatureCard";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Image } from "@heroui/image";
import NextImage from "next/image"
import { ApproachesSection } from "@/components/Sections/ApproachesSection/ApproachesSection";



export default function Page() {
    return (
      <section className=" flex flex-col gap-6 md:gap-12">
        <div className="relative flex flex-col select-none">
          <Image
            as={NextImage}
            src="/static/assets/images/kids.png" 
            alt="شهریار ایران"
            title="شهریار ایران"
            width={1024}
            height={1024}
            radius="none"
            className="!w-full !h-auto object-fill !max-h-screen !max-w-screen"
            classNames={{wrapper: "!max-w-none top-0 left-0 w-full h-full"}}
          />
          <div className="absolute top-0 left-0 w-full h-full z-10"/>
          <div className="absolute z-10 bottom-0 w-full hidden lg:block">
            <div className="w-full max-w-7xl px-2 2xl:px-0 mx-auto h-90 flex flex-row justify-end">
              <div className="w-101">
                <AboutCard
                  title="دبــــــیرستان هــــیبریدی و غــــیردولتی شــــهریار ایــــــران"
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
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-8 items-end justify-center w-full max-w-7xl px-2 2xl:px-0 mx-auto xl:py-12">
          <div className="max-w-[400px] min-w-[200px]">
            <AboutCard
              title="دبــــــیرستان هــــیبریدی و غــــیردولتی شــــهریار ایــــــران"
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
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چـــاپگرها و متون بــــلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع بــــا هـــــــدف بهبود ابـــزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تـــــا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاق می‌سازد.
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
              >
                ادامه مطلب
              </Button>
              <Card radius="lg" shadow="none" className="border-3 border-primary/20">
                <CardBody className="flex-row gap-8 py-1 px-1">
                  <div className="shrink-0 flex flex-row items-center gap-2">
                    <div className="text-foreground bg-foreground/10 rounded-xl p-2 flex justify-center items-center">
                      <Icon icon="solar:user-hands-bold-duotone" width="20" height="20" />
                    </div>
                    <span className="font-bold text-sm text-foreground/45">
                      دانش آموزان ما
                    </span>
                    <span className="font-bold text-xl text-foreground">
                      1128
                    </span>
                  </div>
                  <div className="shrink-0 flex flex-row items-center gap-2">
                    <div className="text-foreground bg-foreground/10 rounded-xl p-2 flex justify-center items-center">
                      <Icon icon="solar:bag-3-bold-duotone" width="20" height="20" />
                    </div>
                    <span className="font-bold text-sm text-foreground/45">
                      کــــارگـــاه‌های مـا  
                    </span>
                    <span className="font-bold text-xl text-foreground">
                      34
                    </span>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
        <ApproachesSection/>
        <div className="flex flex-col gap-3 items-center w-full max-w-7xl mx-auto px-2 2xl:px-0">
          <PageTitle
            variant="centered"
            title="هشت‌ وجهی تاکتیکی مدرسه هیبریدی شهریار ایران"
            description="(شــهریار ایـــران، اولــین مــدرسه هیــبریدی ایـــران)"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
            <FeatureCard
              title="هـــــویت‌یــــــابی و مــــــــعناشناســـــــی"
              englishTitle="Semantics"
              image="/static/assets/images/s1.png"
              code="1"
            />
            <FeatureCard
              title="مـــهـــارت‌ورزی‌ و اشتغال‌پـــذیری"
              englishTitle="Employability"
              image="/static/assets/images/s2.png"
              code="2"
            />
            <FeatureCard
              title="استعدادیابی و تــــــــوسعه فـــــــردی"
              englishTitle="Personal development"
              image="/static/assets/images/s3.png"
              code="3"
            />
            <FeatureCard
              title="آمــــوزش فــــراگیر و پــــیشرفتــــه"
              englishTitle="Advanced learning"
              image="/static/assets/images/s4.png"
              code="4"
            />
            <FeatureCard
              title="بـــــــــازی، لــــــــذت طــــــــبیعت"
              englishTitle="Play, pleasure, nature"
              image="/static/assets/images/s5.png"
              code="5"
            />
            <FeatureCard
              title="پــــــــایـــــش جــــــــسـم و روان"
              englishTitle="Body and Mind Monitoring"
              image="/static/assets/images/s6.png"
              code="6"
            />
            <FeatureCard
              title="آفـــــــــریـنش‌هـــــــای هـــنری و ادبــــی"
              englishTitle="Artistic creations"
              image="/static/assets/images/s7.png"
              code="7"
            />
            <FeatureCard
              title="مدیـــــریــــــت مـجــــــــازی و تولید دیجیتال"
              englishTitle="Virtual Management"
              image="/static/assets/images/s8.png"
              code="8"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center w-full">
          <div className="w-full max-w-7xl mx-auto px-3">
            <PageTitle
              variant="side"
              title="جواب تمام سوالاتت اینجاست"
              description="ایپسوم متن ساختگی با تولید سادگی نـامفــــــهوم از صنعت..."
            />
          </div>
          <CusAccordion/>
        </div>
        <div className="flex flex-col gap-4 w-full max-w-7xl mx-auto px-3">
          <PageTitle
            variant="side"
            title="جدیدترین اخبار شهریار ایران"
            description="ایپسوم متن ساختگی با تولید سادگی نـامفــــــهوم از صنعت..."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
            <div className="flex flex-col gap-4">
              <ArticleCard
                title="گزارش تصویری | دورهمی شاعرانه به مناسبت سالروز بزرگداشت سعدی"
                footerItems={[
                  {
                    icon: (
                      <Icon icon="solar:calendar-bold-duotone" width="20" height="20" />
                    ),
                    value: "02 اردیبهشت 1395"
                  },
                ]}
              />
              <ArticleCard
                title="گزارش تصویری | دورهمی شاعرانه به مناسبت سالروز بزرگداشت سعدی"
                footerItems={[
                  {
                    icon: (
                      <Icon icon="solar:calendar-bold-duotone" width="20" height="20" />
                    ),
                    value: "02 اردیبهشت 1395"
                  },
                ]}
              />
              <ArticleCard
                title="گزارش تصویری | دورهمی شاعرانه به مناسبت سالروز بزرگداشت سعدی"
                footerItems={[
                  {
                    icon: (
                      <Icon icon="solar:calendar-bold-duotone" width="20" height="20" />
                    ),
                    value: "02 اردیبهشت 1395"
                  },
                ]}
              />
            </div>
            <div className="flex flex-col gap-4">
              <ArticleCard
                title="گزارش تصویری | دورهمی شاعرانه به مناسبت سالروز بزرگداشت سعدی"
                footerItems={[
                  {
                    icon: (
                      <Icon icon="solar:calendar-bold-duotone" width="20" height="20" />
                    ),
                    value: "02 اردیبهشت 1395"
                  },
                ]}
              />
              <ArticleCard
                title="گزارش تصویری | دورهمی شاعرانه به مناسبت سالروز بزرگداشت سعدی"
                footerItems={[
                  {
                    icon: (
                      <Icon icon="solar:calendar-bold-duotone" width="20" height="20" />
                    ),
                    value: "02 اردیبهشت 1395"
                  },
                ]}
              />
              <ArticleCard
                title="گزارش تصویری | دورهمی شاعرانه به مناسبت سالروز بزرگداشت سعدی"
                footerItems={[
                  {
                    icon: (
                      <Icon icon="solar:calendar-bold-duotone" width="20" height="20" />
                    ),
                    value: "02 اردیبهشت 1395"
                  },
                ]}
              />
            </div>
            <div className="flex flex-col gap-4">
              <ArticleCard
                title="گزارش تصویری | دورهمی شاعرانه به مناسبت سالروز بزرگداشت سعدی"
                footerItems={[
                  {
                    icon: (
                      <Icon icon="solar:calendar-bold-duotone" width="20" height="20" />
                    ),
                    value: "02 اردیبهشت 1395"
                  },
                ]}
              />
              <ArticleCard
                title="گزارش تصویری | دورهمی شاعرانه به مناسبت سالروز بزرگداشت سعدی"
                footerItems={[
                  {
                    icon: (
                      <Icon icon="solar:calendar-bold-duotone" width="20" height="20" />
                    ),
                    value: "02 اردیبهشت 1395"
                  },
                ]}
              />
              <ArticleCard
                title="گزارش تصویری | دورهمی شاعرانه به مناسبت سالروز بزرگداشت سعدی"
                footerItems={[
                  {
                    icon: (
                      <Icon icon="solar:calendar-bold-duotone" width="20" height="20" />
                    ),
                    value: "02 اردیبهشت 1395"
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div/>
      </section>
    );
}
