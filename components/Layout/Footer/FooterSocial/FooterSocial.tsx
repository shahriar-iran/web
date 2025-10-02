import * as React from "react"
import { FooterSocialItem } from "./FooterSocialItem/FooterSocialItem"
import { faYoutube, faInstagram, faLinkedin, faXTwitter, faTelegram,  } from '@fortawesome/free-brands-svg-icons'
import { SplusIcon } from "@/components/Icons/Splus"
import { AparatIcon } from "@/components/Icons/Aparat"

type FooterSocialPropsType = {
}
export const FooterSocial: React.FC<FooterSocialPropsType> = (props) => {

    return (
        <div className="bg-white rounded-3xl gap-2 border-3 border-primary/20 p-2 flex items-center justify-center">
            <FooterSocialItem
                icon={AparatIcon}
                title="آپارات"
                href="http://aparat.com/shahriareiran"
            />
            <FooterSocialItem
                icon={faXTwitter}
                title="ایکس (توئیتر)"
                href="https://twitter.com/Shahriariran1"
            />
            <FooterSocialItem
                icon={faLinkedin}
                title="لینکدین"
                href="https://www.linkedin.com/in/shahriar-iran-605789293/"
            />
            <FooterSocialItem
                icon={faInstagram}
                title="اینستاگرام"
                href="http://instagram.com/shahriareiran"
            />
            <FooterSocialItem
                icon={faTelegram}
                title="تلگرام"
                href="http://t.me/shahriareiran"
            />
            <FooterSocialItem
                icon={SplusIcon}
                title="سروش"
                href="https://splus.ir/shahriareiran"
            />
        </div>
    )
}