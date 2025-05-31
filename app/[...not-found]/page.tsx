import {Button} from "@heroui/button";
import Link from "next/link";
import React from "react";

export default function Page() {
    return (
        <div className="w-full h-full flex-col flex gap-4 min-h-80 px-4 justify-center items-center overflow-x-hidden">
            
            <h1 className="font-bold text-xl text-gray-600">این صفحه پیدا نشد 😓</h1>
            <span className="text-center">ممکن است آدرس را اشتباه وارد کرده باشید و یا حذف یا تغییر کرده باشد.</span>
            <div className="flex gap-3 flex-col xs:flex-row">
                <Button
                    color="secondary"
                    as={Link}
                    href="/"
                    // startContent={<Home/>}
                >
                    صفحه اصلی
                </Button>
            </div>
        </div>
    )
}