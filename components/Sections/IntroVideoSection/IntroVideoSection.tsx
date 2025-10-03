import * as React from "react"
import { VideoPlayer } from "@/components/VideoPlayer/VideoPlayer";
import { VideoBanner } from "@/components/VideoBanner/VideoBanner";


type IntroVideoSectionPropsType = {

}





export const IntroVideoSection: React.FC<IntroVideoSectionPropsType> = (props) => {

    const {
      
    } = props;

    

    return (
      <div className="w-full bg-primary-50 py-4 px-2 2xl:px-0">
        <div className="grid grid-cols-12 gap-4 w-full max-w-7xl mx-auto">
          <div className="col-span-4 hidden lg:block">
            <VideoBanner
              src="/banner-preregister.jpg"
              alt="بنر پیش ثبت نام"
              title="فرم پیش ثبت‌نام برای سال تحصیلی 1404-1405"
              href="/preregister/school"
            />
          </div>
          <div className="col-span-full lg:col-span-8">
            <VideoPlayer
              title="دبیرستــــان غـــــیردولتی دورۀ اول و دوم شــــهریار ایـــــران "
              alt="ویدیو معرفی مدرسه شهریار ایران"
              src="/hybrid.mp4"
              aparatLink="https://www.aparat.com/v/ThkLT"
            />
          </div>
        </div>
      </div>
    )
}

