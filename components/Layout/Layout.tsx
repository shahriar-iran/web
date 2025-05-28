import * as React from "react"
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

type LayoutPropsType = {
    children: React.ReactNode;
}
export const Layout: React.FC<LayoutPropsType> = (props) => {

    const {
        children,
    } = props

    return (
        <main className="min-h-screen w-screen bg-background flex flex-col justify-between">
            <Header/>
            {children}
            <Footer/>
        </main>
    )
}