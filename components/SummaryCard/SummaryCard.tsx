import * as React from "react";
import clsx from "clsx";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import {Star} from "@/components/Vectors";
import { Image } from "@heroui/image";
import NextImage from "next/image";





type SummaryCardPropsType = {
    year: string;
    imageUrl: string;
}



export const SummaryCard: React.FC<SummaryCardPropsType> = (props) => {
    const {
        imageUrl,
        year,
    } = props;
    return(
        <div
  className={clsx(
    "relative group/memory select-none rounded-3xl overflow-hidden shrink-0 h-72 w-[250px] border-2 border-foreground/10 hover:border-primary transition-all duration-500 hover:-rotate-12"
  )}
>
  <Card className="relative flex flex-col justify-between h-full p-0 bg-white transition duration-500 group-hover/memory:bg-primary" radius="none" shadow="none">
   
    <div className="relative h-2/3 w-full p-1">
      <Image
        as={NextImage}
        alt="HeroUI hero Image"
        src={imageUrl}
        width={400}
        height={400}
        className="!w-full !h-full object-cover grayscale group-hover/memory:grayscale-0 transition-all duration-500"
        classNames={{ wrapper: "!max-w-none w-full h-full" }}
      />

      <div className="absolute top-2 left-2 z-10">
        <Button
          isIconOnly
          className="bg-foreground/10 backdrop-blur-md border-2 border-white min-w-fit !p-1"
          endContent={
            <Icon icon="solar:arrow-right-line-duotone" width="20" height="20" className="rotate-45 text-white" />
          }
        >
          <span className="text-white hidden group-hover/memory:block transition-all duration-500 px-1 text-sm">
            جــــــزئـیـات
          </span>
        </Button>
      </div>
    </div>

    <CardFooter className="px-4 pb-3 pt-2 flex justify-between items-center z-10">
      <div className="flex items-center gap-1">
        <i className="text-primary group-hover/memory:text-foreground">
          <Star size={20} />
        </i>
        <span className="text-foreground text-sm group-hover/memory:text-white">
          سال تحصیلی:
        </span>
      </div>
      <span className="text-foreground font-bold text-sm group-hover/memory:text-white">
        {year}
      </span>
    </CardFooter>
  </Card>
</div>
    )
}