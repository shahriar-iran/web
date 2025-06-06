import * as React from "react";
import { Avatar } from "@heroui/avatar";
import { Icon } from '@iconify/react';
import { Button } from "@heroui/button";



type DetailTypeProps = {
  avatarUrl?: string;
  teller: string | React.ReactNode;
  releaseDate: string;
  duration: string | number;
  category: string;
};

const InfoItem: React.FC<{ icon: string; label: string |React.ReactNode }> = ({ icon, label }) => (
  <div className="flex items-center gap-2">
    <Icon icon={icon} width="24" height="24" />
    <span className="text-foreground/30">{label}</span>
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
    <div className="w-full flex justify-between items-center gap-3 p-2">
      <div className="flex flex-row justify-center items-center gap-4">
        <i className="">
          <Avatar 
            src={avatarUrl} 
            size="md"
            color="primary"
            isBordered={true}
            radius="lg" 
            />
        </i>
        

        <InfoItem
          icon="fluent:person-circle-28-filled"
          label={
            <>
              از زبان: <span className="text-foreground font-medium">{teller}</span>
            </>
          }
        />

        <InfoItem
          icon="fluent:calendar-date-20-regular"
          label={
            <>
              انتشار: <span className="text-foreground font-medium">{releaseDate}</span>
            </>
          }
        />

        <InfoItem
          icon="fluent:clock-alarm-20-regular"
          label={
            <>
              زمان مطالعه: <span className="text-foreground font-medium">{duration}</span>
            </>
          }
        />

        <InfoItem
          icon="fluent:calendar-date-20-regular"
          label={
            <>
              دسته‌بندی: <span className="text-foreground font-medium">{category}</span>
            </>
          }
        />

      </div>

      <div className="flex flex-row items-center">
      
          {/* breadcrumb */}
            

      

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







