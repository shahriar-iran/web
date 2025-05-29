"use client";
import React from "react";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger} from "@heroui/react";
import { Menu } from "./Menu/Menu";
import { HeaderLogo } from "./HeaderLogo/HeaderLogo";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"

// import {signOut} from "@/auth";








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
            className={clsx("sticky shrink-0 z-50 top-0 overflow-hidden transition-colors duration-500 bg-white shadow-xl w-full p-3 rounded-2xl flex justify-center items-center")}
        >
            <div className="max-w-screen-7xl flex justify-between items-center w-full gap-3">
                <HeaderLogo/>
                <Menu
                    items={items}
                />
                
                <Button
                    variant="bordered"
                    className={clsx(
                        "flex items-center justify-start gap-2 transition-colors border rounded-2xl px-2 min-w-10 h-14 w-40 us:w-auto us:px-4 bg-primary/15 border-primary text-primary dark:text-white z-0"
                    )}
                    as="a"
                    href="/"
                >
                    <FontAwesomeIcon
                        icon={faCircleUser} 
                        className="!h-[26px] bg-white p-1.5 rounded-xl"
                     />
                    <span
                        className={clsx("text-sm text-primary us:block")}
                    >
                        پـیش ‌ثبت‌نـام
                    </span>
                </Button>
                <Button
                    variant="solid"
                    className={clsx(
                        "flex items-center justify-start gap-4 transition-colors border rounded-2xl px-2 min-w-10 h-14 w-40 us:w-auto us:px-4 bg-foreground border-foreground text-primary dark:text-white z-0"
                    )}
                    as="a"
                    href="/"
                >
                    <FontAwesomeIcon
                        icon={faCircleUser} 
                        className="!h-[26px] bg-white p-1.5 rounded-xl"
                     />
                    <span
                        className={clsx("text-sm text-white us:block")}
                    >
                        ورود/عضویت
                    </span>
                </Button>
                
                
                
                
            </div>
        </header>
    )
}