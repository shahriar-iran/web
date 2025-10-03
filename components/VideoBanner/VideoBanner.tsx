"use client"

import * as React from "react"
import { Button, Card, CardBody, CardFooter, CardHeader, Image } from "@heroui/react";
import { Icon } from "@iconify/react";
import NextImage from "next/image"
import Link from "next/link";


type VideoBannerPropsType = {
  src: string;
  alt: string;
  title: string;
  href?: string;
}


export const VideoBanner: React.FC<VideoBannerPropsType> = (props) => {

    const {
      src,
      alt,
      title,
      href = "#"
    } = props;

    

    return (
      <Card
        fullWidth
        shadow="none"
        as={Link}
        href={href}
        className="group/vbanner bg-primary h-full max-h-full rounded-3xl cursor-pointer"
      >
        <CardBody
          className="relative w-full h-full flex items-center justify-center p-0 overflow-hidden"
        >
            <Image
              as={NextImage}
              src={src}
              alt={alt}
              title={title}
              width={512}
              height={512}
              className="!w-full !h-full object-cover"
              classNames={{wrapper: "!max-w-none"}}
            />
            <Button 
                size="lg" 
                color="default"
                variant="bordered"
                isIconOnly
                className="z-10 border-white text-white group-hover/vbanner:bg-white group-hover/vbanner:text-primary group-hover/vbanner:scale-105 rounded-3xl px-2 h-13 w-13 absolute bottom-4 right-4 transition-transform duration-500"
              >
                <Icon icon="solar:arrow-left-up-outline" width="28" height="28" />
          </Button>
        </CardBody>
      </Card>
    )
}

