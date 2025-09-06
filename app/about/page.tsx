import { AboutUs } from "@/components/AboutUs/AboutUs";
import { MapCard } from "@/components/MapCard/MapCard";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { Icon } from "@iconify/react";
import { AboutCard } from "@/components/AboutCard/AboutCard";
import { InternalPhoneItem } from "@/components/InternalPhoneItem/InternalPhoneItem";
import { CusTab } from "@/components/CusTab/CusTab";



export default function Page() {
    return (
      <section className="relative flex flex-col gap-6 md:gap-12 before:absolute before:bg-primary before:rounded-b-3xl before:w-full before:h-[50dvh]">
        <div className="w-full max-w-7xl px-2 2xl:px-0 mx-auto mt-20 md:mt-28 lg:mt-32">
            <AboutUs/>
        </div>
        <div className="w-full max-w-7xl px-2 2xl:px-0 mx-auto">
          <div className="flex justify-between items-center">
            <PageTitle
              variant="side"
              title="تـــــــاریخچـه مـــــــــا"
              description="از ســــــــــــــــال 1395 تـــا 1402"
            />
          </div>
        </div>
        <div className="w-full bg-primary-50 py-10">
          <div className="flex justify-between items-center w-full max-w-7xl px-2 2xl:px-0 mx-auto">
            slides
          </div>
        </div>



        <div className="w-full max-w-7xl px-2 2xl:px-0 mx-auto">
          <div className="flex justify-between items-center">
            <PageTitle
              variant="side"
              title="مشاهدۀ کاتالوگ‌های شهریار"
              description="برای مشاهده و دانلود کاتالوگ‌ مورد نظر کلیک کنید."
            />
          </div>
        </div>
        <div className="w-full bg-primary-50 py-10">
          <div className="flex justify-between items-center w-full max-w-7xl px-2 2xl:px-0 mx-auto">
            slides
          </div>
        </div>


        {/* Expriences */}
        <div className="w-full max-w-7xl px-2 2xl:px-0 mx-auto">
          <div className="flex justify-between items-center">
            <PageTitle
              variant="side"
              title="تـجربیات جهـانی شهریــار ایـــران"
              description="شهریار ایران از سال 2009 تا 2025 موفق به کسب چندین مدال جهانی شده است."
            />
          </div>
        </div>
        <div className="w-full max-w-7xl px-2 2xl:px-0 mx-auto">
          posts
        </div>

        {/* PhoneNumbers */}
        <div className="w-full max-w-7xl px-2 2xl:px-0 mx-auto">
          <div className="flex justify-between items-center">
            <PageTitle
              variant="side"
              title="شـماره تــلفن‌های داخــلی دبـــیرستان"
              description="لــورم اپیسوم متن ســاختگی بــا..."
            />
            <CusTab
              items={[
                {
                  key: " middle",
                  title: "دورۀ اولـــــــــــ"
                },
                {
                  key: "high",
                  title: "دورۀ دومــــــــ"
                },
              ]} 
              theme="primary"
            />
          </div>
        </div>
        <div className="w-full bg-primary-50 py-4">
          <div className="flex justify-start flex-wrap gap-3 items-center w-full max-w-7xl px-2 2xl:px-0 mx-auto">
          <InternalPhoneItem
              title="کارگردان ساماندهی"
              code="عدد 1"
            />
            <InternalPhoneItem
              title="کارگردان ساماندهی"
              code="عدد 1"
            />
            <InternalPhoneItem
              title="کارگردان ساماندهی"
              code="عدد 1"
            />
            <InternalPhoneItem
              title="کارگردان ساماندهی"
              code="عدد 1"
            />
            <InternalPhoneItem
              title="کارگردان ساماندهی"
              code="عدد 1"
            />
            <InternalPhoneItem
              title="کارگردان ساماندهی"
              code="عدد 1"
            />
            <InternalPhoneItem
              title="کارگردان ساماندهی"
              code="عدد 1"
            />
            <InternalPhoneItem
              title="کارگردان ساماندهی"
              code="عدد 1"
            />
          </div>
        </div>

        {/* Moshavereh */}
        <div className="w-full max-w-7xl px-2 2xl:px-0 mx-auto">
          <div className="grid grid-cols-6 gap-6 justify-center items-end">
            <div className="col-span-2">
              <AboutCard
                title="تلفن‌های تماس برای مشاورۀ دبــــــیرستان شــــهریار ایــــــران"
                footerItems={[
                  {
                    icon: (
                      <Icon icon="solar:calendar-bold-duotone" width="20" height="20" />
                    ),
                    title: "تلفن اول:",
                    value: "051-38662080"
                  },
                  {
                    icon: (
                      <Icon icon="solar:code-scan-bold-duotone" width="20" height="20" />
                    ),
                    title: "تلفن دوم:",
                    value: "051-35026311"
                  },
                ]} imageUrl={""}              />
            </div>
            <div className="col-span-4">
              <div className="flex flex-col gap-3 items-start justify-start">
                <PageTitle
                  variant="side"
                  title="مشاوره رایگان"
                  description="برای دریافت مشاوره رایگان لطفا ایمیل یا شماره تلفن خود را برای ما بنویسید."
                />
                {/* <CounselingForm/> */}
              </div>
            </div>
          </div>
        </div>



        {/* Location */}
        <div className="relative w-full max-w-7xl px-2 2xl:px-0 mx-auto">
          <div className="absolute -top-16 left-0">
            <svg 
              viewBox="0 0 509 214" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="h-40"
            >
              <path d="M95.1191 0.879395C97.3283 0.879395 99.1191 2.67026 99.1191 4.87939V35.1812C99.1191 42.9131 105.387 49.1812 113.119 49.1812H198.881C206.613 49.1812 212.881 42.9131 212.881 35.1812V34.5649C212.881 32.3558 214.672 30.5649 216.881 30.5649C219.09 30.5649 220.881 32.3558 220.881 34.5649V35.1812C220.881 42.9131 227.149 49.1812 234.881 49.1812H281.396C289.128 49.1812 295.396 42.7999 295.396 35.0679C295.396 27.3359 289.128 20.9546 281.396 20.9546H280.059C277.849 20.9546 276.059 19.1637 276.059 16.9546C276.059 14.7456 277.85 12.9546 280.059 12.9546H423.564C425.773 12.9546 427.564 14.7456 427.564 16.9546C427.564 19.1637 425.774 20.9546 423.564 20.9546H317.396C309.664 20.9546 303.396 27.3359 303.396 35.0679C303.396 42.7999 309.664 49.1812 317.396 49.1812H318.629L319.196 49.188C331.084 49.4889 340.629 59.2206 340.629 71.1812V76.3069C340.629 83.4633 346.224 89.2175 352.679 92.3063C360.347 95.9754 366.564 102.192 370.232 109.86C373.321 116.316 379.075 121.911 386.232 121.911H504.918C507.127 121.911 508.918 123.702 508.918 125.911C508.918 128.12 507.127 129.911 504.918 129.911H386.23C379.074 129.911 373.32 135.505 370.231 141.961C366.562 149.628 360.347 155.844 352.679 159.513C346.224 162.602 340.629 168.356 340.629 175.512V191.156C340.629 198.888 346.897 205.156 354.629 205.156H474.49C476.699 205.156 478.49 206.947 478.49 209.156C478.49 211.365 476.699 213.156 474.49 213.156H336.635C336.633 213.156 336.631 213.157 336.629 213.157C336.627 213.157 336.624 213.156 336.622 213.156L311.473 213.157C309.264 213.157 307.473 211.366 307.473 209.157C307.473 206.948 309.264 205.157 311.473 205.157L318.63 205.156C326.361 205.156 332.629 198.888 332.629 191.156V175.512C332.629 168.356 327.034 162.602 320.579 159.513C312.911 155.844 306.694 149.628 303.025 141.96C299.937 135.505 294.182 129.91 287.026 129.91H234.881C227.149 129.91 220.881 136.178 220.881 143.91V209.156C220.881 211.365 219.09 213.156 216.881 213.156C214.672 213.156 212.881 211.365 212.881 209.156V71.1812C212.881 63.4492 206.613 57.1812 198.881 57.1812H113.119C105.387 57.1812 99.1191 63.4492 99.1191 71.1812V99.4702C99.1191 101.679 97.3283 103.47 95.1191 103.47C92.91 103.47 91.1191 101.679 91.1191 99.4702V92.8159C91.1191 85.0839 84.8511 78.8159 77.1191 78.8159H4.60352C2.39438 78.8159 0.603516 77.0251 0.603516 74.8159C0.603648 72.6069 2.39446 70.8159 4.60352 70.8159H77.1191C84.8511 70.8159 91.1191 64.5479 91.1191 56.8159V4.87939C91.1191 2.67026 92.91 0.879395 95.1191 0.879395ZM336.629 96.6782C320.618 96.6782 307.616 109.549 307.401 125.508C307.415 125.64 307.422 125.774 307.422 125.91C307.422 126.045 307.414 126.179 307.401 126.311C307.616 142.271 320.618 155.143 336.629 155.143C352.773 155.143 365.861 142.055 365.861 125.911C365.861 109.766 352.774 96.6782 336.629 96.6782ZM220.881 107.91C220.881 115.642 227.149 121.91 234.881 121.91H287.026C294.183 121.91 299.937 116.315 303.026 109.86C306.695 102.192 312.911 95.9753 320.579 92.3063C327.034 89.2175 332.629 83.4633 332.629 76.3069V71.1812C332.629 63.57 326.555 57.3777 318.99 57.186L318.629 57.1812H234.881C227.149 57.1812 220.881 63.4492 220.881 71.1812V107.91Z" fill="url(#paint0_radial_473_2428)"/>
              <defs>
                <radialGradient id="paint0_radial_473_2428" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(254.761 107.018) rotate(90) scale(127.295 304.818)">
                  <stop stopColor="#2969FF" stopOpacity="0.15"/>
                  <stop offset="1" stopColor="#F6F9FC" stopOpacity="0"/>
                </radialGradient>
              </defs>
            </svg>
          </div>
          <div className="flex justify-between items-center">
            <PageTitle
              variant="side"
              title="موقعیت دبیرستان دورۀ دوم شهریار ایـران"
              description="برای مشاهده موقعیت دقیق روی نقشه کلیک کنید...!"
            />
          </div>
        </div>
        <div className="w-full bg-primary-50 py-3">
          <div className="grid grid-cols-6 gap-3 justify-center items-center w-full max-w-7xl px-3 2xl:px-0 mx-auto">
            <MapCard
              title="شــــعبۀ هـــــاشمیه"
              address="هاشمیه 16، فرشته 19، پلاک 27"
              phone="+98 513 86 62 080"
              presentMode
            />
            <MapCard
              title="شــــعبۀ وکــــیل‌آبــــاد"
              address="وکـیل‌آبــــاد 63 ( آزادگان )، پلاک 24 "
              phone="+98 513 50 26 311"
            />
          </div>
        </div>

        <div/>
      </section>
    )
}