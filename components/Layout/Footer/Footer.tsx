import { Divider } from "@heroui/react"
import * as React from "react"

type FooterPropsType = {

}
export const Footer: React.FC<FooterPropsType> = () => {

    return (
        <footer className="py-4 px-4 flex flex-col gap-4 bg-primary/5 ">
            <Divider className="bg-primary"/>
        </footer>
    )
}