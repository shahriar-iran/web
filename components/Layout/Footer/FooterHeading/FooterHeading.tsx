import * as React from "react"

type FooterHeadingPropsType = {
    title: string;
}
export const FooterHeading: React.FC<FooterHeadingPropsType> = (props) => {

    const {
        title
    } = props

    return (
        <div className="relative w-fit h-fit py-1 px-1 bg-white">
            <h6 className="w-fit text-sm flex justify-center items-center font-bold text-foreground">
                {title}
            </h6>
        </div>
    )
}