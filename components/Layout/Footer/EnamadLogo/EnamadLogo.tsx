import React from "react";
import {Image} from "@heroui/image";



export interface EnamadLogoProps {
    size?: number;
}



export const EnamadLogo: React.FC<EnamadLogoProps> = (props) => {

    const {
        size = 40,
    } = props

    return(
        <div className="relative h-full flex justify-center items-center">
            <Image
                referrerPolicy="origin"
                width={128}
                height={128}
                alt="نماد الکترونیکی"
                title="نماد اعتماد الکترونیکی"
                src="https://trustseal.enamad.ir/logo.aspx?id=593499&Code=XrE4HYlR5YOiXDpb7N7bTxcjkngoQWgY"
                {...{code: "XrE4HYlR5YOiXDpb7N7bTxcjkngoQWgY"}}
                radius="none"
                loading="eager"
                className="object-fill !h-full !w-fit"
                style={{
                    height: (size ? `${size}px !important`: undefined),
                    width: (size ? `${size}px !important`: undefined),
                }}
                classNames={{wrapper: "h-full w-full max-w-none aspect-square bg-black/20 flex justify-center items-center p-0.5 rounded-lg shrink-0"}}
            />
        </div>
    )
}