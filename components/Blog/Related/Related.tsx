"use client";
import * as React from "react";
import { RelatedArticle } from "./RelatedArticles/RelatedArticles"; 

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
    ];

    return (
        <div className="bg-white rounded-2xl shadow max-w-md mx-auto">
            <div className="flex items-center justify-between mb-4 bg-primary/10 p-4 rounded-t-2xl">
                <span className="text-sm font-bold text-right">سایر عناوین مرتبط</span>
                <span className="text-xs text-foreground">{articles.length} مقاله</span>
            </div>

            <div className="divide-y p-5">
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
