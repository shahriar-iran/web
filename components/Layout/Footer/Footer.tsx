import { Divider } from "@heroui/react"
import * as React from "react"
import { FooterBox } from "./FooterBox/FooterBox"
import { FooterCopyright } from "./FooterCopyright/FooterCopyright"
import { FooterSocial } from "./FooterSocial/FooterSocial"

type FooterPropsType = {

}
export const Footer: React.FC<FooterPropsType> = () => {

    return (
        <footer className="flex flex-col gap-0">
            <div className="bg-primary/5 py-6 px-4 rounded-t-3xl grid gap-10 grid-cols-5">
                <FooterBox
                    title="مدرســه شهریــار ایـــــران"
                    className="col-span-2"
                />
                <FooterBox
                    title="لینک‌های اصلی"
                    className="col-span-1"
                />
                <FooterBox
                    title="آدرس و شماره تماس"
                    className="col-span-1"
                />
                <FooterBox
                    className="col-span-1"
                />
            </div>
            <Divider className="bg-primary"/>
            <div className="flex flex-row gap-3 justify-between items-center px-4 pb-10 pt-6">
                <FooterCopyright/>
                <FooterSocial/>
            </div>
        </footer>
    )
}