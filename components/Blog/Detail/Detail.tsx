import * as React from "react";
import { Avatar } from "@heroui/avatar";
import { Icon } from '@iconify/react';
import {
    Breadcrumbs,
    BreadcrumbItem
  } from "@heroui/breadcrumbs"
import { Button } from "@heroui/react";



type DetailTypeProps = {
  avatarUrl?: string;
  teller: string;
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

export const CommentCard: React.FC<DetailTypeProps> = ({
  avatarUrl,
  category,
  duration,
  releaseDate,
  teller
}) => {
  return (
    <div className="w-full flex justify-between items-center gap-3">
      <div className="flex flex-row justify-center items-center gap-4">
        <Avatar src={avatarUrl} size="lg" />

        <InfoItem icon="fluent:calendar-date-20-regular" label={`از زبان: ${teller}`} />
        <InfoItem icon="fluent:calendar-date-20-regular" label={`انتشار: ${releaseDate}`} />
        <InfoItem icon="fluent:calendar-date-20-regular" label={`زمان مطالعه: ${duration}`} />
        <InfoItem icon="fluent:calendar-date-20-regular" label={`دسته‌بندی: ${category}`} />
      </div>

      <div className="flex flex-row items-center">
      <Breadcrumbs
      itemClasses={{
        item: "px-2",
        separator: "/",
      }}
    >
      <BreadcrumbItem href="#">مقالات</BreadcrumbItem>
      <BreadcrumbItem href="#">آموزشی</BreadcrumbItem>
      <BreadcrumbItem href="#">آموزش معکوس و تاثیرات آن بر یادگیری</BreadcrumbItem>
      </Breadcrumbs>

      <Button
        isIconOnly
        startContent={<Icon icon="fluent:arrow-left-16-regular" width="24" height="24" />}
        className="px-2 py-4 bg-foreground/10" 
      />
      </div>
    </div>
  );
};
