import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import * as React from "react"

type FooterSocialItemPropsType = {
}
export const FooterSocialItem: React.FC<FooterSocialItemPropsType> = (props) => {

    return (
        <div
            className="rounded-2xl bg-foreground/5 hover:bg-primary hover:text-white flex justify-center items-center transition cursor-pointer duration-500 w-10 h-10 p-2"
        >
            <FontAwesomeIcon 
                icon={faYoutube}
                size="xs"
            />
        </div>
    )
}