import * as React from "react";
import { Avatar } from "@heroui/avatar";
import { Icon } from '@iconify/react';
import { Button } from "@heroui/button";
import Link from "next/link";

// ✅ breadcrumb دستی
type Breadcrumb = {
  title: string;
  url: string;
};

const Breadcrumbs: React.FC<{
  items: Breadcrumb[];
  separator?: string;
  className?: string;
}> = ({ items, separator = "/", className = "" }) => {
  return (
    <nav aria-label="breadcrumb" className={`w-full ${className}`}>
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-2">
              {!isLast ? (
                <>
                  <Link href={item.url} className="text-foreground/35 font-semibold">
                    {item.title}
                  </Link>
                  <span className="text-gray-400">{separator}</span>
                </>
              ) : (
                <span className="text-foreground font-bold">{item.title}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

// ✅ info item component
const InfoItem: React.FC<{ icon: string; label: string | React.ReactNode }> = ({ icon, label }) => (
  <div className="flex items-center gap-2">
    <Icon icon={icon} width="24" height="24" />
    <span className="text-foreground/30">{label}</span>
  </div>
);

// ✅ main component
type DetailTypeProps = {
  avatarUrl?: string;
  teller: string | React.ReactNode;
  releaseDate: string;
  duration: string | number;
  category: string;
};

export const Detail: React.FC<DetailTypeProps> = ({
  avatarUrl,
  category,
  duration,
  releaseDate,
  teller
}) => {
  const breadCrumbs = [
    { title: "مقالات", url: "/hybrid" },
    { title: "آموزشی", url: "/hybrid" },
    { title: "آموزش معکوس و تاثیرات آن بر یادگیری", url: "/hybrid" },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row md:justify-between items-start md:items-center gap-3 p-2">
      {/* ✅ آواتار و اطلاعات */}
      <div className="flex flex-wrap items-center gap-4">
        <Avatar
          src={avatarUrl}
          size="md"
          color="primary"
          isBordered={true}
          radius="lg"
        />
  
        <InfoItem
          icon="fluent:person-circle-28-filled"
          label={
            <>
              <span className="hidden md:inline">از زبان: </span>
              <span className="text-foreground font-medium">{teller}</span>
            </>
          }
        />
        <InfoItem
          icon="fluent:calendar-date-20-regular"
          label={
            <>
              <span className="hidden md:inline">انتشار: </span>
              <span className="text-foreground font-medium">{releaseDate}</span>
            </>
          }
        />
        <InfoItem
          icon="fluent:clock-alarm-20-regular"
          label={
            <>
              <span className="hidden md:inline">زمان مطالعه: </span>
              <span className="text-foreground font-medium">{duration}</span>
            </>
          }
        />
        <InfoItem
          icon="fluent:calendar-date-20-regular"
          label={
            <>
              <span className="hidden md:inline">دسته‌بندی: </span>
              <span className="text-foreground font-medium">{category}</span>
            </>
          }
        />
      </div>
  
      {/* ✅ Breadcrumb و دکمه */}
      <div className="flex flex-row items-center gap-2 md:self-end">
        <Breadcrumbs items={breadCrumbs} className="px-2 py-1" separator="/" />
  
        <Button
          size="lg"
          isIconOnly
          startContent={<Icon icon="solar:arrow-left-line-duotone" width="24" height="24" />}
          className="px-3 py-5 bg-foreground/10"
        />
      </div>
    </div>
  );
  
};
