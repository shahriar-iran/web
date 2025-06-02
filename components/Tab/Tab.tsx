"use client";
import * as React from "react";
import clsx from "clsx";

type ThemeType = "primary" | "secondary" | "forground";

type TabPropsType = {
    items: {
        id: number;
        title: string;
    }[];
    theme: ThemeType;
    withIcon?: boolean;
    icon?: React.ReactNode;
    className?: string;
};

export const Tab: React.FC<TabPropsType> = ({
    items,
    theme = "primary",
    withIcon = false,
    icon,
    className
}) => {
    const [active, setActive] = React.useState(0);

    const baseBtnClass =
        "px-4.5 py-2.5 rounded-2xl transition-all duration-500 text-sm font-medium";

    const getBtnClass = (isActive: boolean) => {
        switch (theme) {
            case "primary":
                return isActive
                    ? "bg-primary text-white"
                    : "bg-transparent text-foreground border border-foreground/15";
            case "secondary":
                return isActive
                    ? "bg-secondary text-white"
                    : "bg-transparent text-foreground border border-foreground/15";
            case "forground":
                return isActive
                    ? "bg-foreground text-white"
                    : "bg-foreground/10 text-foreground";
            default:
                return "";
        }
    };

    return (
        <div className={clsx("flex gap-2", className)}>
            {items.map((item, index) => (
                        <button
                    key={item.id}
                    onClick={() => setActive(index)}
                    className={clsx(baseBtnClass, getBtnClass(index === active))}
                >
                   {withIcon && ( 
                    <div className="flex items-center gap-2">
                        <i className="bg-foreground p-1 rounded-full">{icon}</i>
                        <span>{item.title}</span>
                    </div>
                )}
                {!withIcon && (
                    <div className="flex items-center gap-2">
                        <span>{item.title}</span>
                    </div>
                )}
                </button>
            ))}
        </div>
    );
};
