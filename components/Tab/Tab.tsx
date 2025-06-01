"use client";
import * as React from "react";
import clsx from "clsx";

type ThemeType = "primary" | "secondary" | "forground" | "blur";

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
                    ? "bg-[#2969FF] text-white"
                    : "bg-transparent text-[#151B32] border border-[#151B32]/10";
            case "secondary":
                return isActive
                    ? "bg-[#22C197] text-white"
                    : "bg-transparent text-[#151B32] border border-[#151B32]/10";
            case "forground":
                return isActive
                    ? "bg-[#151B32] text-white"
                    : "bg-[#151B32]/10 text-[#151B32]";
            case "blur":
                return isActive
                    ? "bg-white/20 text-white"
                    : "bg-transparent text-[#151B32] border border-[#151B32]/10";
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
                    <div className="flex items-center gap-1">
                        {withIcon && icon}
                        <span>{item.title}</span>
                    </div>
                </button>
            ))}
        </div>
    );
};
