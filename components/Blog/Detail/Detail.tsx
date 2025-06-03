import * as React from "react";
import { Avatar } from "@heroui/avatar";
import { Icon } from '@iconify/react';
import {Breadcrumbs, BreadcrumbItem} from "@heroui/breadcrumbs";
import { Button } from "@heroui/button";
import Link from "next/link";



type DetailTypeProps = {
  avatarUrl?: string;
  teller: string | React.ReactNode;
  releaseDate: string;
  duration: string | number;
  category: string;
};

const InfoItem: React.FC<{ icon: string; label: string }> = ({ icon, label }) => (
  <div className="flex items-center gap-2">
    <Icon icon={icon} width="24" height="24" />
    <span className="text-foreground/20">{label}</span>
  </div>
);

export const Detail: React.FC<DetailTypeProps> = ({
  avatarUrl,
  category,
  duration,
  releaseDate,
  teller
}) => {


    const breadCrumbs = [
        {
            title: "مقالات",
            url: "/hybrid"
        },
        {
            title: "آموزشی",
            url: "/hybrid"
        },
        {
            title: "آموزش معکوس و تاثیرات آن بر یادگیری",
            url: "/hybrid"
        },
    ]

  return (
    <div className="w-full flex justify-between items-center gap-3">
      <div className="flex flex-row justify-center items-center gap-4">
        <Avatar src={avatarUrl} size="md" />

        <InfoItem icon="fluent:person-circle-28-filled" label={`از زبان: ${teller}`} />
        <InfoItem icon="fluent:calendar-date-20-regular" label={`انتشار: ${releaseDate}`} />
        <InfoItem icon="fluent:clock-alarm-20-regular" label={`زمان مطالعه: ${duration}`} />
        <InfoItem icon="fluent:calendar-date-20-regular" label={`دسته‌بندی: ${category}`} />
      </div>

      <div className="flex flex-row items-center">
        <Breadcrumbs
            underline="hover"
            color="secondary"
            className="ps-12  w-full "
            classNames={{base: "inline-grid", list: "flex-nowrap w-full overflow-y-hidden pb-2"}}
            separator="/"
            >
                {breadCrumbs.map(({title, url}, idx) => (
                    <BreadcrumbItem key={idx} href={url}>
                        {title}
                     </BreadcrumbItem>
                        ))}
        </Breadcrumbs>
      

      <Button
      size="lg"
        isIconOnly
        startContent={<Icon icon="fluent:arrow-left-16-regular" width="24" height="24" />}
        className="px-3 py-5 bg-foreground/10" 
      />
      </div>
    </div>
  );
};
