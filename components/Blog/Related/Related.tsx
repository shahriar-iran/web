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
                    <span className="text-primary/80">دوچرخ‌سواری شاعرانه</span> به مناسبت بزرگداشت سعدی
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
        <div className="bg-white rounded-lg shadow p-4 max-w-md mx-auto">
            <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-right">سایر عناوین مرتبط</span>
                <span className="text-xs text-gray-400">{articles.length} مقاله</span>
            </div>

            <div className="divide-y">
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
