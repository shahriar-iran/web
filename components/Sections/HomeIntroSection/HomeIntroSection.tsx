import * as React from "react"
import { AboutCard } from "@/components/AboutCard/AboutCard";
import { Icon } from "@iconify/react";
import { Image } from "@heroui/image";
import NextImage from "next/image";


type HomeIntroSectionPropsType = {

}



export const HomeIntroSection: React.FC<HomeIntroSectionPropsType> = (props) => {

    const {
      
    } = props;

    

    return (
      <div className="relative flex flex-col select-none">
          <Image
            as={NextImage}
            src="/static/assets/images/kids.png" 
            alt="شهریار ایران"
            title="شهریار ایران"
            width={1024}
            height={1024}
            radius="none"
            className="!w-full !h-auto object-fill !max-h-screen !max-w-screen"
            classNames={{wrapper: "!max-w-none top-0 left-0 w-full h-full"}}
          />
          <div className="absolute top-0 left-0 w-full h-full z-10"/>
          <div className="absolute z-10 bottom-0 w-full hidden lg:block">
            <div className="w-full max-w-7xl px-2 2xl:px-0 mx-auto h-90 flex flex-row justify-end">
              <div className="w-101">
                <AboutCard
                  title="دبــــــیرستان هــــیبریدی و غــــیردولتی شــــهریار ایــــــران"
                  footerItems={[
                    {
                      icon: (
                        <Icon icon="solar:calendar-bold-duotone" width="20" height="20" />
                      ),
                      title: "کنکور",
                      value: "-"
                    },
                  ]}
                 imageUrl="/static/assets/images/about-us.jpg"
                />
              </div>
            </div>
          </div>
        </div>
    )
}

