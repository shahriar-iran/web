import * as React from "react"
import { Chip } from "@heroui/chip";
import { Icon } from "@iconify/react";
import { Divider } from "@heroui/react";



 


type InternalPhoneItemPropsType = {
    title: string;
    code: string;
}



export const InternalPhoneItem: React.FC<InternalPhoneItemPropsType> = (props) => {


    const {
        code,
        title,
    } = props;


    return (
        <Chip
            startContent={(
                <i className="bg-foreground text-secondary group-hover/intphone:bg-white group-hover/intphone:text-primary flex items-center justify-center transition-colors rounded-xl aspect-square h-10 w-10">
                    <Icon icon="fluent:person-circle-28-filled" width="24" height="24" />
                </i>
            )}
            endContent={(
                <div className="flex items-center gap-3">
                    <Divider orientation="vertical" className="h-2 opacity-20 transition-colors bg-black group-hover/intphone:bg-white"/>
                    <span className="text-sm font-medium">
                        {code}
                    </span>
                </div>
            )}
            className="cursor-pointer select-none group/intphone h-14 rounded-3xl px-2 pe-6 gap-3 bg-white text-foreground border border-primary/20 transition-colors hover:bg-primary hover:text-white"
        >
            <span className="text-sm font-medium">
                {title}
            </span>
        </Chip>
    )
}

