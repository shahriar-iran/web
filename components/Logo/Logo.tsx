import React from "react";




export interface LogoProps {
    size?: number;
}



export const Logo = ( props : LogoProps) => {
    const {
        size
    } = props;
    return(
        <div className="w-20" style={{width: size}}>
            
        </div>
    )
}