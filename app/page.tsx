import { AboutCard } from "@/components/AboutCard/AboutCard";
import { ApproachesCard } from "@/components/ApproachesCard/ApproachesCard";
import { FeatureCard } from "@/components/FeatureCard/FeatureCard";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Icon } from "@iconify/react/dist/iconify.js";




export default function Home() {
    return (
      <section className="pt-[72px] md:pt-[104px] flex flex-col gap-16">
        <div className="flex flex-row gap-3 items-start w-full max-w-7xl mx-auto px-3">
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
          <div className="flex flex-col mt-12 gap-3">
            <PageTitle
              variant="side"
              title="دربــــــــارۀ مـــــــــا"
              description="دبیرستــــان غـــــیردولتی شــــهریار ایـــــران"
            />
            <p className="font-light leading-7 text-foreground text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چـــاپگرها و متون بــــلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع بــــا هـــــــدف بهبود ابـــزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تـــــا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاق می‌سازد.
            </p>
            <div className="flex flex-row justify-between gap-4">
              <Button
                color="primary"
                variant="shadow"
                size="lg"
                radius="lg"
                className="rounded-2xl"
                endContent={(
                  <div className="text-white flex justify-center items-center">
                    <Icon icon="solar:arrow-left-line-duotone" width="20" height="20" />
                  </div>
                )}
              >
                ادامه مطلب
              </Button>
              <Card radius="lg" shadow="none" className="border-3 border-primary/20">
                <CardBody className="flex-row gap-8 p-2">
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
        <div className="flex flex-row gap-3 items-start w-full max-w-7xl mx-auto px-3">
          <PageTitle
            variant="side"
            title="رویکردهای مدرسه هیبریدی شهریار ایران"
            description="چرا مدرسۀ شهریار را برای آینده تحصیلی فرزندانمان انتخاب کنیم...؟"
          />
        </div>
        <div className="w-full bg-primary-50 py-10">
          <div className="flex flex-row gap-3 w-full max-w-7xl mx-auto px-3">
            <ApproachesCard
              title="کــار تیمی و نخبه‌مــداری"
              englishTitle="Teamwork"
              icon={(
                <Icon icon="solar:calendar-bold-duotone" width="32" height="32" />
              )}
            />
            <ApproachesCard
              title="مسئولــــیت پذیـــری"
              englishTitle="Responsibility"
              icon={(
                <Icon icon="solar:calendar-bold-duotone" width="32" height="32" />
              )}
              className="!text-orange-500"
            />
            <ApproachesCard
              title="مسئولــــیت مسئولــــیت پذیـــری"
              englishTitle="Responsibility Responsibility"
              icon={(
                <Icon icon="solar:calendar-bold-duotone" width="32" height="32" />
              )}
              className="!text-purple-500"
            />
            <ApproachesCard
              title="مسئولــــ ــری"
              englishTitle="Responsibility Responsibility Responsibility"
              icon={(
                <Icon icon="solar:calendar-bold-duotone" width="32" height="32" />
              )}
              variant="wide"
               className="!text-purple-500"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center w-full max-w-7xl mx-auto px-3">
          <PageTitle
            variant="centered"
            title="(هشت‌ وجهی تاکتیکی مدرسه هیبریدی شهریار ایران)"
            description="(شــهریار ایـــران، اولــین مــدرسه هیــبریدی ایـــران)"
          />
          <div className="flex flex-row flex-wrap gap-3 w-full">
            <FeatureCard
              title="هـــــویت‌یــــــابی و مــــــــعناشناســـــــی"
              englishTitle="Semantics"
              image="/static/assets/images/s1.png"
            />
            <FeatureCard
              title="هـــــویت‌یــــــابی و مــــــــعناشناســـــــی"
              englishTitle="Semantics"
              image="/static/assets/images/s1.png"
            />
            <FeatureCard
              title="هـــــویت‌یــــــابی و مــــــــعناشناســـــــی"
              englishTitle="Semantics"
              image="/static/assets/images/s1.png"
            />
            <FeatureCard
              title="هـــــویت‌یــــــابی و مــــــــعناشناســـــــی"
              englishTitle="Semantics"
              image="/static/assets/images/s1.png"
            />
          </div>
        </div>
      </section>
    );
}
