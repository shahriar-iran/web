import * as React from "react"
import { FooterSocialItem } from "./FooterSocialItem/FooterSocialItem"
import { faYoutube, faInstagram, faLinkedin, faXTwitter, faTelegram,  } from '@fortawesome/free-brands-svg-icons'

type FooterSocialPropsType = {
}
export const FooterSocial: React.FC<FooterSocialPropsType> = (props) => {

    return (
        <div className="bg-white rounded-3xl gap-2 border-3 border-primary/20 p-2 flex items-center justify-center">
            <FooterSocialItem
                icon={faYoutube}
                title="یوتیوب"
                href="#"
            />
            <FooterSocialItem
                icon={faXTwitter}
                title="ایکس (توئیتر)"
                href="#"
            />
            <FooterSocialItem
                icon={faLinkedin}
                title="لینکدین"
                href="#"
            />
            <FooterSocialItem
                icon={faInstagram}
                title="اینستاگرام"
                href="#"
            />
            <FooterSocialItem
                icon={faTelegram}
                title="تلگرام"
                href="#"
            />
        </div>
    )
}