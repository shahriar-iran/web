import * as React from "react"
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

type LayoutPropsType = {
    children: React.ReactNode;
}
export const Layout: React.FC<LayoutPropsType> = (props) => {


    const menuItems = [
        {
            title: "خانه",
            id: "/",
            inMenu: true
        },
        {
            title: "درباره ما",
            id: "/about",
            inMenu: true
        },
        {
            title: "تماس با ما",
            id: "/contact",
            inMenu: true
        },
        {
            title: "محصولات",
            id: "/products",
            inMenu: true
        }
    ];


    const {
        children,
    } = props

    return (
        <div className="min-h-screen w-full bg-background flex flex-col justify-between">
            <Header items={menuItems}/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}