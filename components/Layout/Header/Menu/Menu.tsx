import React, { useState } from "react";
import {MenuItem, MenuItemProps} from '@/components/Layout/Header/Menu/MenuItem';
import { ScrollShadow } from "@heroui/react";
import {motion} from 'framer-motion';

export interface MenuProps {
    items: MenuItemProps[];
}

export const Menu = (props : MenuProps) => {
    const {
        items
    } = props;

    const [isOpen, setOpen] = React.useState(false);
    const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
    const [dotPosition, setDotPosition] = React.useState({ left: 0, width: 0 });

    return (
        <div
            data-open={isOpen}
            className="flex-1 group/nav flex justify-start items-center h-14 md:w-0"
        >
            <ScrollShadow
                hideScrollBar
                orientation="horizontal"
                size={0}
                as="nav"
                className="flex max-w-[calc(100%)] bg-background md:bg-transparent md:max-w-none w-fit right-0 absolute h-[calc(100%+2px)] md:h-full pe-2 md:pe-0 ps-[68px] py-4 md:ps-0 md:relative transition-transform md:transition-none z-10 items-center gap-2 -translate-y-24 md:translate-y-0 group-data-[open=true]/nav:translate-y-0"
            >
                <ul
                    className="relative flex-row gap-x-2 items-center justify-start h-full w-fit md:w-full flex"
                >
                    {items.map((item, idx) => {
                        if (!item.isMenu) return null;
                        return (
                            <MenuItem
                                key={idx}
                                id={item.id}
                                title={item.title}
                                isActive={activeIndex === idx}
                                isMenu={item.isMenu}
                            />
                        )
                    })}
                </ul>
                <motion.div
                    className="absolute h-2 bg-[#0C0E16] dark:bg-white rounded-full hidden md:block"
                    animate={{
                        left: dotPosition.left,
                        width: dotPosition.width,
                        opacity: activeIndex !== null ? 1 : 0,
                    }}
                    transition={{type: "linear", stiffness: 300, damping: 20}}
                />
            </ScrollShadow>   
        </div>
    )
}