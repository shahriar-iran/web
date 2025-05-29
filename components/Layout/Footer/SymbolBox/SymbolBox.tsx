import React from "react";
import { Card, CardBody } from "@heroui/card";
import clsx from "clsx";



export interface SymbolBoxProps {
    className?: string;
    children: React.ReactNode;
}



export const SymbolBox: React.FC<SymbolBoxProps> = (props) => {

    const {
        className,
        children,
    } = props

    return(
        <Card 
            isPressable
            shadow="none"
            fullWidth
            className={clsx("", className)}
        >
            <CardBody className="justify-center overflow-hidden items-center max-h-16">
                {children}
            </CardBody>
        </Card>
    )
}