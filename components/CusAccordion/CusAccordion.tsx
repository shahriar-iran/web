"use client"


import * as React from "react"
import { Accordion, AccordionItem } from "@heroui/accordion";

type CusAccordionPropsType = {

}



export const CusAccordion: React.FC<CusAccordionPropsType> = (props) => {


    const {

    } = props;

    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    const items = [
        {
            title: "من در مدرسه‌ی محل سکونت خودم مشغول تحصیل هستم، چطور از خدمات مدرسه مجازی استفاده کنم؟",
            content: "می‌تونی با صرف کمترین هزینه در مدرسه شهر خودت به تحصیل ادامه بدی و همزمان از سیستم آمـــوزشی ما هم بــــهره‌مند بشی، امــــتحانات مـــدرسه خــــودت رو شــــرکت کـنی و بـــــا آمــــــوزش‌های مدرسه مجــــازی شاگرد اول بشی!."
        },
        {
            title: "من در مدرسه‌ی محل سکونت خودم مشغول تحصیل هستم، چطور از خدمات مدرسه مجازی استفاده کنم؟",
            content: "می‌تونی با صرف کمترین هزینه در مدرسه شهر خودت به تحصیل ادامه بدی و همزمان از سیستم آمـــوزشی ما هم بــــهره‌مند بشی، امــــتحانات مـــدرسه خــــودت رو شــــرکت کـنی و بـــــا آمــــــوزش‌های مدرسه مجــــازی شاگرد اول بشی!."
        },
        {
            title: "من در مدرسه‌ی محل سکونت خودم مشغول تحصیل هستم، چطور از خدمات مدرسه مجازی استفاده کنم؟",
            content: "می‌تونی با صرف کمترین هزینه در مدرسه شهر خودت به تحصیل ادامه بدی و همزمان از سیستم آمـــوزشی ما هم بــــهره‌مند بشی، امــــتحانات مـــدرسه خــــودت رو شــــرکت کـنی و بـــــا آمــــــوزش‌های مدرسه مجــــازی شاگرد اول بشی!."
        },
        {
            title: "من در مدرسه‌ی محل سکونت خودم مشغول تحصیل هستم، چطور از خدمات مدرسه مجازی استفاده کنم؟",
            content: "می‌تونی با صرف کمترین هزینه در مدرسه شهر خودت به تحصیل ادامه بدی و همزمان از سیستم آمـــوزشی ما هم بــــهره‌مند بشی، امــــتحانات مـــدرسه خــــودت رو شــــرکت کـنی و بـــــا آمــــــوزش‌های مدرسه مجــــازی شاگرد اول بشی!."
        },
        {
            title: "من در مدرسه‌ی محل سکونت خودم مشغول تحصیل هستم، چطور از خدمات مدرسه مجازی استفاده کنم؟",
            content: "می‌تونی با صرف کمترین هزینه در مدرسه شهر خودت به تحصیل ادامه بدی و همزمان از سیستم آمـــوزشی ما هم بــــهره‌مند بشی، امــــتحانات مـــدرسه خــــودت رو شــــرکت کـنی و بـــــا آمــــــوزش‌های مدرسه مجــــازی شاگرد اول بشی!."
        },
    ]

    return (
        <Accordion
            dividerProps={{
                className: "bg-transparent border-t-2 border-divider border-dashed"            
            }}
        >
            {items.map((v, idx) => {
                return (
                    <AccordionItem
                        key={idx}
                        title={v.title}
                        classNames={{
                            indicator: "data-[open=true]:text-primary data-[open=true]:bg-white bg-foreground/5 select-none rounded-2xl h-10 w-10 flex items-center justify-center transition-colors !rotate-0",
                            content: "text-foreground/50 text-sm font-light text-justify",
                            title: "text-sm font-semibold",
                            base: "data-[open=true]:bg-primary-50 group/accitem px-6 pt-6 pb-4",
                        }}
                        startContent={(
                            <div className="bg-primary-100 border border-primary text-primary group-data-[open=true]/accitem:bg-primary group-data-[open=true]/accitem:text-white font-normal transiton-colors select-none text-lg rounded-2xl h-10 w-10 flex items-center justify-center">
                                {idx + 1}
                            </div>
                        )}
                        
                        indicator={(
                            <svg width={20} viewBox="0 0 16 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.0063 14.5278C5.87964 14.5278 5.75297 14.4811 5.65297 14.3811L2.31297 11.0411C2.11964 10.8478 2.11964 10.5278 2.31297 10.3345C2.5063 10.1411 2.8263 10.1411 3.01964 10.3345L6.35964 13.6745C6.55297 13.8678 6.55297 14.1878 6.35964 14.3811C6.25964 14.4745 6.13297 14.5278 6.0063 14.5278Z" />
                                <path d="M6.00586 14.5277C5.73253 14.5277 5.50586 14.301 5.50586 14.0277V2.69434C5.50586 2.421 5.73253 2.19434 6.00586 2.19434C6.27919 2.19434 6.50586 2.421 6.50586 2.69434V14.0277C6.50586 14.301 6.27919 14.5277 6.00586 14.5277Z" />
                                <path d="M13.3403 6.53462C13.2136 6.53462 13.087 6.48796 12.987 6.38796L9.64695 3.04796C9.45362 2.85462 9.45362 2.53462 9.64695 2.34129C9.84029 2.14796 10.1603 2.14796 10.3536 2.34129L13.6936 5.68129C13.887 5.87462 13.887 6.19462 13.6936 6.38796C13.5936 6.48796 13.467 6.53462 13.3403 6.53462Z"/>
                                <path d="M9.99414 14.5277C9.72081 14.5277 9.49414 14.301 9.49414 14.0277V2.69434C9.49414 2.421 9.72081 2.19434 9.99414 2.19434C10.2675 2.19434 10.4941 2.421 10.4941 2.69434V14.0277C10.4941 14.301 10.2741 14.5277 9.99414 14.5277Z" />
                            </svg>
                        )}

                    >
                        {v.content}
                    </AccordionItem>
                )
            })}
        </Accordion>
    )
}

