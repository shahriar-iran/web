import * as React from "react"
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

type LayoutPropsType = {
    children: React.ReactNode;
}
export const Layout: React.FC<LayoutPropsType> = (props) => {


    const menuItems = [
        {
            title: "مدرسه هیبریدی",
            id: "/hybrid",
            inMenu: true
        },
        {
            title: "درباره ما",
            id: "/about",
            inMenu: true
        },
        {
            title: "افتخارات",
            id: "/honors",
            inMenu: true
        },
        {
            title: "خاطره‌بازی",
            id: "/memorise",
            inMenu: true
        },
        {
            title: "تیم شهریار",
            id: "/team",
            inMenu: true
        }
    ];


    const {
        children,
    } = props

    return (
        <div className="min-h-screen w-full bg-primary flex flex-col justify-between">
            <Header items={menuItems}/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}