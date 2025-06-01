import * as React from "react"
import clsx from "clsx";
import {TextBackground} from "@/components/Vectors";
import {CometStar} from "@/components/Vectors";



 


type TitlePropsType = {
    title: string;
    description: string;
    className?: string;
    starColor?: string;
    bgColor?: string;
}



export const PageTitle: React.FC<TitlePropsType> = (props) => {


    const {
        className,
        title,
        description,
        starColor = "#151B32",
        bgColor = "#2969FF"
    } = props;

    return (
        <main className="flex flex-col justify-center items-center gap-2">
            <div className="flex flex-row justify-center items-center gap-5">
                <i className={clsx(starColor)}>
                    <CometStar size={24}/>
                </i>
                    <h1 className="font-bold">
                        {title}
                    </h1>
                <i className={clsx("rotate-180" , starColor)}>
                    <CometStar size={24}/>
                </i>
            </div>
            <div className="relative">
                <i className={clsx(bgColor)}>
                    <TextBackground/>
                </i>
                
                <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white truncate">
                    {description}
                </h2>
            </div>
        </main>
    
    )
}

