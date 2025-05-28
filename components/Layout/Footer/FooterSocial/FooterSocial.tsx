import * as React from "react"
import { FooterSocialItem } from "./FooterSocialItem/FooterSocialItem"

type FooterSocialPropsType = {
}
export const FooterSocial: React.FC<FooterSocialPropsType> = (props) => {

    return (
        <div className="bg-white rounded-3xl gap-2 border-3 border-primary/20 p-2 flex items-center justify-center">
            <FooterSocialItem/>
            <FooterSocialItem/>
            <FooterSocialItem/>
            <FooterSocialItem/>
            <FooterSocialItem/>
        </div>
    )
}