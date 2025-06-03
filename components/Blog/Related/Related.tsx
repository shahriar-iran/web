"use client";
import * as React from "react";
import { RelatedArticle } from "./RelatedArticles/RelatedArticles"; 
import {CometStar} from "@/components/Vectors";

type ArticleType = {
    id: number;
    label: string | React.ReactNode;
    date: string | Date;
    duration: string;
};

export const Related: React.FC = () => {
    const articles: ArticleType[] = [
        {
            id: 1,
            label: "دوچرخه‌سواری در طبیعت به مناسبت روز زمین پاک",
            date: "۲۴ فروردین ۱۴۰۳",
            duration: "۳",
        },
        {
            id: 2,
            label: (
                <>
                    گزارش تصویری |{" "}
                    دوچرخ‌سواری شاعرانه به مناسبت بزرگداشت سعدی
                </>
            ),
            date: "۲۴ فروردین ۱۴۰۳",
            duration: "۵",
        },
        {
            id: 3,
            label: "شهریار ایران در مسیر رشد، رقابت و راهبری",
            date: "۲۴ فروردین ۱۴۰۳",
            duration: "۴",
        },
        {
            id: 4,
            label: "آزمون‌های جمع‌بندی؛ شکوفایی موفقیت شهریاری‌ها",
            date: "۲۴ فروردین ۱۴۰۳",
            duration: "۶",
        },
        {
            id: 5,
            label: "آزمون‌های جمع‌بندی؛ شکوفایی موفقیت شهریاری‌ها",
            date: "۲۴ فروردین ۱۴۰۳",
            duration: "۶",
        },
        {
            id: 6,
            label: "آزمون‌های جمع‌بندی؛ شکوفایی موفقیت شهریاری‌ها",
            date: "۲۴ فروردین ۱۴۰۳",
            duration: "۶",
        },
        {
            id: 7,
            label: "آزمون‌های جمع‌بندی؛ شکوفایی موفقیت شهریاری‌ها",
            date: "۲۴ فروردین ۱۴۰۳",
            duration: "۶",
        },
    ];

    return (
        <div className="bg-white rounded-2xl w-full max-w-lg mx-auto">
            <div className="flex items-center justify-between mb-4 bg-primary/10 px-4 py-6 rounded-t-2xl">
                <div className="text-sm font-bold text-right flex items-center gap-1">
                    <i className="text-primary rotate-90">
                        <CometStar size={20}/>
                    </i>
                سایر عناوین مرتبط   
                </div>
                <span className="text-sm font-semibold text-foreground">{articles.length} مقاله</span>
            </div>
            
            <div className="divide-y divide-foreground/10">
                {articles.map((article) => (
                    <RelatedArticle
                        key={article.id}
                        label={article.label}
                        date={article.date}
                        duration={article.duration}
                    />
                ))}
            </div>
            
        </div>
    );
};
