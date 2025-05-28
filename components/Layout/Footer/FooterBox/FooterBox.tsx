import * as React from "react"
import { FooterHeading } from "../FooterHeading/FooterHeading";
import clsx from "clsx";

type FooterBoxPropsType = {
    title?: string;
    className?: string;
}
export const FooterBox: React.FC<FooterBoxPropsType> = (props) => {

    const {
        title,
        className,
    } = props

    return (
        <div className={clsx("flex flex-col gap-3", className)}>
            {!!title && (<FooterHeading title={title}/>)}
            <p className="text-sm font-[300] text-justify text-clamp-4">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجــــله در ستون و سطرآنچنان 
که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع بــا هدف‌از
و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.    
            </p> 
        </div>
    )
}