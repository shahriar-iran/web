import * as React from "react";
import { Avatar } from "@heroui/avatar";
import { Icon } from '@iconify/react';
import { Button } from "@heroui/button";
import Link from "next/link";

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
    <nav aria-label="breadcrumb" className={`w-full overflow-x-auto no-scrollbar ${className}`}>
  <ol className="flex items-center gap-2 text-sm whitespace-nowrap min-w-max">
    {items.map((item, index) => {
      const isLast = index === items.length - 1;
      return (
        <li key={index} className="flex items-center gap-2 shrink-0">
          {!isLast ? (
            <>
              <Link
                href={item.url}
                className="text-foreground/35 font-semibold truncate max-w-[120px]"
              >
                {item.title}
              </Link>
              <span className="text-gray-400">{separator}</span>
            </>
          ) : (
            <span className="text-foreground font-bold truncate max-w-[140px]">
              {item.title}
            </span>
          )}
        </li>
      );
    })}
  </ol>
</nav>

  );
};


const InfoItem: React.FC<{ icon: string; label: string | React.ReactNode }> = ({ icon, label }) => (
  <div className="flex items-center gap-2 shrink-0">
    <Icon icon={icon} width="24" height="24" />
    <span className="text-foreground/30">{label}</span>
  </div>
);

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
    <div className="w-full flex flex-col gap-4 md:flex-row md:justify-between md:items-center p-2">

  {/* قسمت آواتار و اطلاعات */}
  <div className="w-full overflow-x-auto scroll-smooth no-scrollbar border-b border-foreground/10 pb-3">
    <div className="flex items-center gap-4 min-w-max whitespace-nowrap">
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
  </div>

  {/* بردکرامب و دکمه برگشت */}
  <div className="flex flex-row items-center gap-2 md:self-end mt-3 md:mt-0">
    <Breadcrumbs items={breadCrumbs} className="px-2 py-1" separator="/" />

    <div className="hidden md:block">
      <Button
        size="lg"
        isIconOnly
        startContent={<Icon icon="solar:arrow-left-line-duotone" width="24" height="24" />}
        className="px-3 py-5 bg-foreground/10"
      />
    </div>
  </div>

</div>  );
};
