import * as React from "react"
import { Footer } from "./Footer/Footer";

type LayoutPropsType = {
    children: React.ReactNode;
}
export const Layout: React.FC<LayoutPropsType> = (props) => {

    const {
        children,
    } = props

    return (
        <main className="min-h-screen w-screen bg-background flex flex-col justify-between">
            
            {children}
            <Footer/>
        </main>
    )
}