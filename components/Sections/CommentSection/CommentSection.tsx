import * as React from "react"
import { SliderThumbs } from "@/components/SliderThumbs/SliderThumbs";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { CommentCard } from "@/components/CommentCard/CommentCard";


type CommentSectionPropsType = {

}



const commentList = [

]


export const CommentSection: React.FC<CommentSectionPropsType> = (props) => {

    const {
      
    } = props;

    

    return (
      <div className="flex flex-col gap-5 items-center w-full max-w-7xl mx-auto px-2 2xl:px-0">
        <PageTitle
          variant="centered"
          title="(نظـرات دانـش‌آمـوزان و اولیاء دربارۀ شهریـار ایــران)"
          description="ایپسوم متن ساختگی با تولید سادگی نـامفـهوم از"
        />
        <div className="grid grid-cols-5 gap-4 items-center w-full">
          <CommentCard
            fullName="مـــحمدرضا سلطانـــــــی"
            role="دانش آموز پایه هفتم"
            rating={0}
            date="2 خرداد 1402"
            comment="این مدرسه جزو بهترین مدارس ایران هست، از وقتی ایـنجا ثبت‌نام کـردم عــملکردم خیلی بـهتر شده
و خیلی رسیدگی خوبی دارن، کلی دوست جدید پیــــدا کردم و مدرسه کلی بــــرنامه‌های خفن و جـــذاب
داره واسمون، راستی اردو هم اینجا زیاد داریم."
            isActive={false}
          />
          <CommentCard
            fullName="مـــحمدرضا سلطانـــــــی"
            role="دانش آموز پایه هفتم"
            rating={0}
            date="2 خرداد 1402"
            comment="این مدرسه جزو بهترین مدارس ایران هست، از وقتی ایـنجا ثبت‌نام کـردم عــملکردم خیلی بـهتر شده
و خیلی رسیدگی خوبی دارن، کلی دوست جدید پیــــدا کردم و مدرسه کلی بــــرنامه‌های خفن و جـــذاب
داره واسمون، راستی اردو هم اینجا زیاد داریم."
            isActive={true}
            className="col-span-3"
          />
          <CommentCard
            fullName="مـــحمدرضا سلطانـــــــی"
            role="دانش آموز پایه هفتم"
            rating={0}
            date="2 خرداد 1402"
            comment="این مدرسه جزو بهترین مدارس ایران هست، از وقتی ایـنجا ثبت‌نام کـردم عــملکردم خیلی بـهتر شده
و خیلی رسیدگی خوبی دارن، کلی دوست جدید پیــــدا کردم و مدرسه کلی بــــرنامه‌های خفن و جـــذاب
داره واسمون، راستی اردو هم اینجا زیاد داریم."
            isActive={false}
          />
        </div>
        <SliderThumbs
          count={5}
          active={0}
          hideNumbers
          hideNextBtn
        />
      </div>
    )
}

