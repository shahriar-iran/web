import { Divider } from "@heroui/divider"
import * as React from "react"
import { FooterBox } from "./FooterBox/FooterBox"
import { FooterCopyright } from "./FooterCopyright/FooterCopyright"
import { FooterSocial } from "./FooterSocial/FooterSocial"
import { Logo } from "@/components/Logo/Logo"
import { HybridSchoolLogo } from "./HybridSchoolLogo/HybridSchoolLogo"
import { SymbolBox } from "./SymbolBox/SymbolBox"
import { EnamadLogo } from "./EnamadLogo/EnamadLogo"
import { ContactBox } from "./ContactBox/ContactBox"
import { LinksBox } from "./LinksBox/LinksBox"
import { AboutBox } from "./AboutBox/AboutBox"

type FooterPropsType = {

}
export const Footer: React.FC<FooterPropsType> = () => {

    return (
        <footer className="flex flex-col gap-0">
            <div className="bg-primary/5 py-6 px-4 rounded-t-3xl">
                <div className="grid gap-y-6 sm:gap-x-6 grid-cols-12 mx-auto w-full max-w-7xl">
                    <FooterBox
                        title="مدرســه شهریــار ایـــــران"
                        className="col-span-12 sm:col-span-12 md:col-span-12 xl:col-span-5"
                    >
                        <AboutBox/>
                    </FooterBox>
                    <FooterBox
                        title="لینک‌های اصلی"
                        className="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-2"
                    >
                        <LinksBox/>
                    </FooterBox>
                    <FooterBox
                        title="آدرس و شماره تماس"
                        className="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3"
                    >
                        <ContactBox/>
                    </FooterBox>
                    <FooterBox
                        className="col-span-12 sm:col-span-12 md:col-span-4 xl:col-span-2"
                    >
                        <div className="grid grid-cols-2 gap-3">
                            <SymbolBox className="col-span-2">
                                <Logo size={40}/>
                            </SymbolBox>
                            <SymbolBox className="col-span-1">
                                <HybridSchoolLogo size={40}/>
                            </SymbolBox>
                            <SymbolBox className="col-span-1">
                                <EnamadLogo size={40}/>
                            </SymbolBox>
                        </div>
                    </FooterBox>
                </div>
            </div>
            <Divider className="bg-primary h-0.5 mx-auto w-full max-w-7xl"/>
            <div className="flex flex-col md:flex-row gap-3 justify-between items-center mx-auto w-full max-w-7xl px-4 xl:px-0 pb-6 md:pb-10 pt-6">
                <FooterCopyright/>
                <FooterSocial/>
            </div>
        </footer>
    )
}