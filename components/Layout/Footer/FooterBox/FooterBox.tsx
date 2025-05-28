import * as React from "react"
import { FooterHeading } from "../FooterHeading/FooterHeading";
import clsx from "clsx";

type FooterBoxPropsType = {
    title?: string;
    className?: string;
    children: React.ReactNode;
}
export const FooterBox: React.FC<FooterBoxPropsType> = (props) => {

    const {
        title,
        className,
        children,
    } = props

    return (
        <div className={clsx("flex flex-col gap-3", className)}>
            {!!title && (<FooterHeading title={title}/>)}
            {children}
        </div>
    )
}