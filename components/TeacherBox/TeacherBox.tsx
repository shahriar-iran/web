import * as React from "react";
import { Card , CardBody , CardFooter, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import {Star} from "@/components/Vectors";
import clsx from "clsx";


type TeacherBoxPropsType = {
    masterName: string;
    educational: string;
    jobPosition: string;
    x: string;
}



export const TeacherBox: React.FC<TeacherBoxPropsType> = (props) => {
const {
    educational,
    jobPosition,
    masterName,
    x
} = props;
return(
    <div
            className={clsx("relative group/box rounded-3xl overflow-hidden shrink-0 h-100 border-2 border-primary/25 hover:border-primary")}
        >
            <Card
        className="relative justify-center h-full text-[] bg-gradient-to-t from-foreground to-white p-2" radius="lg" shadow="none"
    >
      <CardHeader>
        <div className="flex w-full justify-end">
            <Button
            radius="lg"
            isIconOnly
            startContent={
                <i className="rotate-45 text-white"><Icon icon="solar:arrow-right-line-duotone" width="24" height="24"/></i>
            }
            className="bg-foreground/5 backdrop-blur border border-white p-3"
            />
        </div>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col gap-2 justify-end h-full">
            <div className="flex items-center gap-1">
                <i className="text-primary">
                    <Star size={24}/>
                </i>
                <span className="text-xl text-white">
                {educational}
                </span>
            </div>
            <div className="flex flex-col gap-5">
                <span className="text-large text-white flex justify-start">
                    {masterName}
                </span>
                <span className="text-white/60">
                    {jobPosition}
                </span>
            </div>
        </div>
      </CardBody>
      <CardFooter>
        <div className="flex w-full justify-start">
            <Button
            className="p-2 border-2 border-white bg-foreground/5 backdrop-blur flex items-center"
            startContent={
                <>
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M19.624 13.3781V16.0731C19.624 17.0815 18.799 17.9065 17.7907 17.9065H5.36068C4.35234 17.9065 3.52734 17.0815 3.52734 16.0731V13.3781C3.52734 8.95978 7.10234 5.38478 11.5207 5.38478H11.6307C16.049 5.37562 19.624 8.95978 19.624 13.3781Z" fill="#22C197"/>
                    <path d="M12.2617 2.69727V5.4106C12.0509 5.39226 11.84 5.3831 11.6292 5.3831H11.5192C11.3084 5.3831 11.0976 5.39226 10.8867 5.4106V2.69727C10.8867 2.32143 11.1984 2.00977 11.5742 2.00977C11.9501 2.00977 12.2617 2.32143 12.2617 2.69727Z" fill="#22C197"/>
                    <path d="M14.616 17.8965C14.506 19.4915 13.186 20.7473 11.5726 20.7473C9.9593 20.7473 8.63013 19.4915 8.5293 17.8965H14.616Z" fill="#22C197"/>
                </svg>
                </>
            }
            >
                <span className="text-sm text-white">
                    {x}
                </span>
            </Button>
        </div>
      </CardFooter>  
    </Card>
</div>
    
)
}