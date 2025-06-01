'use client'

import { Button } from "@heroui/button"
import Link from "next/link"

export default function Error({error, reset}: { error: Error, reset: () => void }) {

    return (
        <section className="pt-[64px] md:pt-[96px] flex-1 w-full flex justify-center items-center flex-col gap-3">
            <div className="flex flex-col gap-4 py-4 items-center w-full">
            <h1 className="font-bold text-xl text-gray-600">مشکلی به وجود اومده</h1>
                <pre dir="ltr" className="select-all text-wrap">{error.message}</pre>
                <div className="flex gap-3 flex-row">
                    <Button
                        color="secondary"
                        as={Link}
                        href="/"
                    >
                        صفحه اصلی
                    </Button>
                    <Button
                        color="default"
                        onPress={reset}
                    >
                        تلاش مجدد
                    </Button>
                </div>
            </div>
        </section>
    )
}