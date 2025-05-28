// "use client"

import * as React from "react"
import { IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Tooltip } from "@heroui/tooltip"
import Link from "next/link"

type FooterSocialItemPropsType = {
    icon: IconDefinition;
    title: string;
    href: string;
}

export const FooterSocialItem: React.FC<FooterSocialItemPropsType> = (props) => {

    const {
        icon,
        title,
        href,
    } = props

    return (
        <Tooltip
            content={title}
            color="foreground"
            showArrow
        >
            <Link
                href={href}
                target="_blank"
            >
                <div
                    className="rounded-2xl bg-foreground/5 hover:bg-primary hover:text-white flex justify-center items-center transition cursor-pointer duration-500 w-12 h-12 p-2.5"
                >
                    <FontAwesomeIcon 
                        icon={icon}
                    />
                </div>
            </Link>
        </Tooltip>
    )
}