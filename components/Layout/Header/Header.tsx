import React from "react";
import {Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger} from "@heroui/react";
import { Menu } from "./Menu/Menu";
import { HeaderLogo } from "./HeaderLogo/HeaderLogo";
import clsx from "clsx";
// import {signOut} from "@/auth";








export interface HeaderProps {
    items: {
        title: string;
        id: string;
        inMenu?: boolean;
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
            className={clsx("sticky shrink-0 z-50 top-0 overflow-hidden transition-colors duration-500 bg-background/10 backdrop-blur-3xl w-full p-3 border border-solid flex justify-center items-center border-[#FBFCFF03]")}
        >
            <div className="max-w-screen-2xl flex justify-between items-center w-full gap-3">
                <HeaderLogo/>
                <Menu
                    items={items}
                />
                <Button
                    variant="bordered"
                    className={clsx(
                        "flex items-center gap-2 transition-colors border rounded-[1px] px-0 min-w-10 h-14 w-14 us:w-auto us:px-4 hover:bg-primary hover:text-white bg-primary/10 border-primary text-primary dark:text-white z-0"
                    )}
                    as="a"
                    href="/"
                >
                    <i className={clsx("")}>
                        {/* <HeaderShopIcon/> */}
                    </i>
                    <span
                        className={clsx("text-sm hidden us:block")}
                    >
                        فروشگاه راهساز ماشین
                    </span>
                </Button>
                <Dropdown radius="none" size="lg">
                    <DropdownTrigger>
                        <Button
                            isIconOnly
                            className={clsx(
                                "border rounded-[1px] h-14 w-14 transition-colors border-[#0C0E16] bg-[#0C0E16] text-white dark:border-white dark:bg-white dark:text-[#0C0E16] z-0"
                            )}
                            as="a"
                            href="#"
                        >
                            <i>
                                {/* <HeaderUserIcon/> */}
                            </i>
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="User Menu">
                        <DropdownItem key="menu-item">Menu Item</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </header>
    )
}