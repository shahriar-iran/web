import * as React from "react"
import clsx from "clsx";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";



type MapCardPropsType = {
    presentMode?: boolean;
    title: string;
    address: string;
    phone: string;
    location?: string;
}



export const MapCard: React.FC<MapCardPropsType> = (props) => {


    const {
        title,
        address,
        phone,
        presentMode,
    } = props;

    return (
        <div
            data-present-mode={presentMode}
            className={clsx("relative group/map w-full p-3 rounded-t-3xl rounded-b-4xl text-white", "bg-primary data-[present-mode=true]:bg-foreground col-span-full md:col-span-3 lg:col-span-2 data-[present-mode=true]:lg:col-span-4")}
        >   
            <div className="flex items-start gap-3">
                {/* Detail */}
                <div className="flex flex-col flex-1 justify-between items-start gap-3 truncate min-h-60">
                    <div
                        className={clsx(
                            "relative flex w-full gap-8 flex-col",
                        )}
                    >
                        <div className="flex flex-row items-center gap-1 group-data-[present-mode=true]/map:hidden">
                            <i className="flex justify-center items-center shrink-0">
                                <svg width="12" viewBox="0 0 13 13" className="shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.62598 1.04785C7.41214 3.77677 9.68364 5.8197 12.4805 6.3125C9.68364 6.8053 7.41214 8.84823 6.62598 11.5771L6.38672 12.4062L6.14746 11.5771C5.3613 8.84823 3.0898 6.8053 0.292969 6.3125C3.0898 5.8197 5.3613 3.77677 6.14746 1.04785L6.38672 0.21875L6.62598 1.04785ZM6.29004 4.06641C5.95472 5.23045 4.98597 6.10229 3.79297 6.3125C4.98597 6.52271 5.95472 7.39455 6.29004 8.55859L6.39258 8.91211L6.49414 8.55859C6.82943 7.39465 7.79835 6.5228 8.99121 6.3125C7.79835 6.1022 6.82943 5.23035 6.49414 4.06641L6.39258 3.71289L6.29004 4.06641Z" fill="currentColor"/>
                                </svg>
                            </i>
                            <h4 className="font-semibold text-sm truncate">
                                {title}
                            </h4>
                        </div>
                        <ul className="flex flex-col">
                            <li className="flex w-fit flex-row py-1.5 items-center gap-2">
                                <i className="h-3 w-3 p-0.25 flex justify-center items-center shrink-0 group-data-[present-mode=true]/map:hidden">
                                    <svg viewBox="0 0 12 12" className="shrink-0 text-foreground" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="6" cy="6" r="6" fill="currentColor"/>
                                        <circle cx="6" cy="6" r="3" fill="white"/>
                                    </svg>
                                </i>
                                <h6 
                                    className={clsx(
                                        "font-medium text-xs truncate flex items-center gap-1",
                                        "group-data-[present-mode=true]/map:bg-primary/10",
                                        "group-data-[present-mode=true]/map:py-3",
                                        "group-data-[present-mode=true]/map:px-6",
                                        "group-data-[present-mode=true]/map:rounded-2xl",
                                        "group-data-[present-mode=true]/map:text-sm",
                                        "group-data-[present-mode=true]/map:border-2",
                                        "group-data-[present-mode=true]/map:border-primary",
                                    )}
                                >
                                    <i className="h-5 w-5 p-0.25 hidden justify-center items-center shrink-0 group-data-[present-mode=true]/map:flex">
                                        <Icon icon="solar:arrow-left-down-line-duotone" width="20" height="20" />
                                    </i>
                                    {address}
                                </h6>
                            </li>
                            <li className="flex w-fit flex-row py-1.5 items-center gap-2 group-data-[present-mode=true]/map:hidden">
                                <i className="h-3 w-3 p-0.25 flex justify-center items-center shrink-0">
                                    <svg viewBox="0 0 12 12" className="shrink-0 text-foreground" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="6" cy="6" r="6" fill="currentColor"/>
                                        <circle cx="6" cy="6" r="3" fill="white"/>
                                    </svg>
                                </i>
                                <h6 dir="ltr" className="font-medium text-xs truncate">
                                    {phone}
                                </h6>
                            </li>
                        </ul>
                    </div>
                    <div className="flex">
                        <Button
                            isIconOnly
                            variant="flat"
                            size="lg"
                            className="text-white rounded-3xl border-2 h-15 w-15 backdrop-blur-sm"
                        >
                            <Icon icon="solar:arrow-left-down-line-duotone" width="20" height="20" />
                        </Button>
                    </div>
                </div>
                {/* Show map */}
                <div className="flex shrink-1 group-data-[present-mode=true]/map:hidden">
                    <Button
                        variant="flat"
                        className="text-white border-2 backdrop-blur-sm"
                        startContent={(
                            <Icon icon="solar:calendar-bold-duotone" width="20" height="20" />
                        )}
                    >
                        مشاهده نقشه
                    </Button>
                </div>
            </div>
        </div>
    )
}

