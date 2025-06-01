import * as React from "react"
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

type LayoutPropsType = {
    children: React.ReactNode;
}
export const Layout: React.FC<LayoutPropsType> = (props) => {


    const menuItems = [
        {
            id: "hybrid",
            title: "مدرسه هیبریدی",
            path: "/hybrid",
        },
        {
            id: "about",
            title: "درباره ما",
            path: "/about",
        },
        {
            id: "honors",
            title: "افتخارات",
            path: "/honors",
        },
        {
            id: "memorise",
            title: "خاطره‌بازی",
            path: "/memorise",
        },
        {
            id: "team",
            title: "تیم شهریار",
            path: "/team",
        }
    ];


    const {
        children,
    } = props

    return (
        <div className="min-h-screen w-full bg-background flex flex-col">
            <Header items={menuItems}/>
            <main className="flex-1 flex flex-col relative">
                {children}
            </main>
            <Footer/>
        </div>
    )
}