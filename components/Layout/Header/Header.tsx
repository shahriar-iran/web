import React from "react";
import { Button } from "@heroui/button";
import { Menu } from "./Menu/Menu";
import { HeaderLogo } from "./HeaderLogo/HeaderLogo";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"









export interface HeaderProps {
    items: {
        title: string;
        id: string;
        isMenu?: boolean;
    }[];
}




export const Header = (props : HeaderProps) => {
    const {
        items
    } = props;
    


    // const dropdownHandler = async (key: Key) => {
    //     switch (key) {
    //         case "name":
    //             break
    //         case "logout":
    //             await signOut()
    //             break;
    //         case "login":
    //             break;
    //     }
    // }
    
    
    return(
        <header
            className={clsx("sticky shrink-0 z-50 top-0 py-2 px-2  w-full flex justify-center items-center")}
        >
            <div className="mx-auto w-full max-w-7xl flex justify-between items-center gap-3 p-2 md:p-5 rounded-3xl md:rounded-4xl bg-white shadow-xl relative">
                <HeaderLogo/>
                <Menu
                    items={items}
                />
                
                <Button
                    variant="flat"
                    color="primary"
                    size="lg"
                    className={clsx(
                        "border-2 border-primary px-1 pe-3 text-sm gap-2 py-1 h-12 rounded-2xl hidden md:flex"
                    )}
                    as="a"
                    href="/"
                    startContent={(
                        <div className="h-full aspect-square bg-primary bg-white rounded-xl">

                        </div>
                    )}
                >
                    پـیش ‌ثبت‌نـام
                </Button>
                <Button
                    variant="solid"
                    color="primary"
                    size="lg"
                    className={clsx(
                        "border-2 border-foreground bg-foreground text-sm px-1 pe-3 gap-2 py-1 h-12 rounded-2xl hidden md:flex"
                    )}
                    as="a"
                    href="/"
                    startContent={(
                        <div className="h-full aspect-square bg-primary bg-white rounded-xl">

                        </div>
                    )}
                >
                    ورود/عضویت
                </Button>
                <Button
                    variant="solid"
                    color="primary"
                    size="md"
                    className={clsx(
                        "border-2 border-primary px-1 pe-3 text-sm gap-2 py-1 h-10 rounded-2xl flex md:hidden"
                    )}
                    isIconOnly
                >
                    
                </Button>
                
                
                
            </div>
        </header>
    )
}