import * as React from "react"

type FooterHeadingPropsType = {
    title: string;
}
export const FooterHeading: React.FC<FooterHeadingPropsType> = (props) => {

    const {
        title
    } = props

    return (
        <div className="relative w-fit h-fit py-1 px-1 select-none before:bg-white before:absolute before:h-full before:w-[calc(100%-16px)] before:top-0 before:right-4">
            <h6 className="w-fit text-sm truncate flex justify-center items-center font-bold text-foreground z-10 relative">
                {title}
            </h6>
        </div>
    )
}