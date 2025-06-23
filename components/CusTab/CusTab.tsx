"use client";
import * as React from "react";
import clsx from "clsx";
import { Button } from "@heroui/button";
import { Tab, Tabs } from "@heroui/tabs";

type ThemeType = "primary" | "secondary" | "forground";

type CusTabPropsType = {
    items: {
        key: React.Key;
        title: string;
        icon?: React.ReactNode;
    }[];
    theme: ThemeType;
    className?: string;
    selectedKey?: React.Key;
    onSelectionChange?: (key: React.Key) => void;
};

export const CusTab: React.FC<CusTabPropsType> = ({
    items,
    theme = "primary",
    className,
    selectedKey,
    onSelectionChange,
}) => {



    return (
        <Tabs 
            items={items}
            variant="solid"
            color="primary"
            size="lg"
            classNames={{
                tabList: "rounded-xl",
                tab: "h-12 px-6 rounded-2xl",
                cursor: "rounded-2xl"
            }}
        >
            {(tab) => (<Tab title={tab.title} />)}
        </Tabs>
    )


    // const [active, setActive] = React.useState(selectedKey || items[0].key);

    // React.useEffect(() => {
    //     if (selectedKey) setActive(selectedKey)
    // }, [selectedKey])

    // const baseBtnClass =
    //     "px-4.5 py-2.5 rounded-2xl transition-all duration-500 text-sm font-medium";

    // const getBtnClass = (isActive: boolean) => {
    //     switch (theme) {
    //         case "primary":
    //             return isActive
    //                 ? "bg-primary text-white"
    //                 : "bg-transparent text-foreground border border-foreground/15";
    //         case "secondary":
    //             return isActive
    //                 ? "bg-secondary text-white"
    //                 : "bg-transparent text-foreground border border-foreground/15";
    //         case "forground":
    //             return isActive
    //                 ? "bg-foreground text-white"
    //                 : "bg-foreground/10 text-foreground";
    //         default:
    //             return "";
    //     }
    // };

    // return (
    //     <div className={clsx("flex gap-2", className)}>
    //         {items.map((item, index) => (
    //             <Button
    //                 key={item.key}
    //                 size="lg"
    //                 variant="bordered"
    //                 onClick={() => {
    //                     setActive(item.key)
    //                     onSelectionChange?.(item.key)
    //                 }}
    //                 startContent={(
    //                     !!item.icon 
    //                     ? <i className="bg-foreground p-1 rounded-full">{item.icon}</i> 
    //                     : undefined
    //                 )}
    //                 className={clsx(baseBtnClass, getBtnClass(index === active))}
    //             >
    //                 <div className="flex items-center gap-2">
    //                     <span>{item.title}</span>
    //                 </div>
    //             </Button>
    //         ))}
    //     </div>
    // );
};
