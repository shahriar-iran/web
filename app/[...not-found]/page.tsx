import {Button} from "@heroui/button";
import Link from "next/link";
import React from "react";

export default function Page() {
    return (
        <section className="pt-[64px] md:pt-[96px] flex-1 w-full flex justify-center items-center flex-col gap-3">
            <div className="flex flex-col gap-4 py-4 items-center w-full">
                <h1 className="font-bold text-xl text-gray-600">این صفحه پیدا نشد</h1>
                <span className="text-center">ممکن است آدرس را اشتباه وارد کرده باشید و یا حذف یا تغییر کرده باشد.</span>
                <div className="flex gap-3 flex-col xs:flex-row">
                    <Button
                        color="secondary"
                        as={Link}
                        href="/"
                    >
                        صفحه اصلی
                    </Button>
                </div>
            </div>
        </section>
    )
}