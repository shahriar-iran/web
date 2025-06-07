import { useForm, SubmitHandler } from "react-hook-form";
import {Detail} from "@/components/Blog/Detail/Detail"
import { CommentCard } from "@/components/Comment/CommentCard/CommentCard";
import { CusInput } from "@/components/General/CusInput/CusInput";
import { CusSelect } from "@/components/General/CusSelect/CusSelect";





export default function Home() {


  // const { control, handleSubmit } = useForm({
  //   defaultValues: {
  //     name: "",
  //     phone: "",
  //   },
  // });

  // type FormValues = {
  //   consultationType: string;
  // };


  // const {
  //   control,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<FormValues>({
  //   defaultValues: {
  //     consultationType: "", // مقدار اولیه
  //   },
  // });

    return (
      <section className="pt-[72px] pb-96 md:pt-[104px]">
        <div className="text-justiify pt-20 flex flex-col gap-40">
            {/* <Detail
              avatarUrl="https://i.pravatar.cc/150?img=32"
              teller="دکتر احمدی"
              releaseDate="۱۴۰۴/۰۳/۱۲"
              duration="۷ دقیقه"
              category="یادگیری معکوس"
            />
            
            <CommentCard
                userName="مـــحمدرضا سلطانـــــــی"
                degree="دانش‌آموز هفتم مدرسۀ شهریار "
                comment="این مدرسه جزو بهترین مدارس ایران هست، از وقتی ایـنجا ثبت‌نام کـردم عــملکردم خیلی بـهتر شده
و خیلی رسیدگی خوبی دارن، کلی دوست جدید پیــــدا کردم و مدرسه کلی بــــرنامه‌های خفن و جـــذاب
داره واسمون، راستی اردو هم اینجا زیاد داریم."
                rating={4.8}
                date="1404/03/15"
                avatarUrl="https://i.pravatar.cc/100?img=32"
            />
            <CusInput control={control} name="name" label="نام و نام خانوادگی خود را وارد کنید" /> */}
            
            {/* <CusSelect
              name="consultationType"
              control={control}
              className="w-full p-20"
            /> */}
            
        </div>
      </section>
    );
}
