import * as React from "react";
import clsx from "clsx";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Avatar, AvatarGroup } from "@heroui/avatar";
import { Badge } from "@heroui/badge";
import { Icon } from "@iconify/react/dist/iconify.js";





type TopRankingsCardPropsType = {
  
}



export const TopRankingsCard: React.FC<TopRankingsCardPropsType> = (props) => {
    const {
        
    } = props;


    return (
      <Card className="p-3 rounded-4xl gap-3 max-w-144" shadow="none" radius="lg">
        <CardBody className="overflow-hidden rounded-3xl rounded-tl-none p-0 flex items-start flex-col gap-0">
          <div className="flex gap-2 items-center w-full h-full">
            <div className="flex-1 h-full flex items-start px-2">
              <AvatarGroup isBordered>
                {[1, 2, 3].map((student, index) => (
                    <Avatar
                        key={index}
                        // src={student.avatar}
                        // name={student.name}
                        size="lg"
                        // className="border-2 border-white shadow-sm hover:scale-110 transition-transform duration-200 hover:z-10 relative"
                        style={{ zIndex: 10 - index }}
                    />
                ))}
              </AvatarGroup>
            </div>
            <div className="relative h-40 w-40 bg-primary/10 rounded-t-3xl flex items-center justify-center">
              <div className="relative shrink-0 bg-primary p-1 rounded-[18px] w-fit h-fit">
                <Avatar
                  radius="lg"
                  showFallback
                  size="lg"
                  fallback="ر"
                  name="Saeed Ahmadi"
                  className="bg-white text-primary font-bold text-xl w-22 h-22"
                />
              </div>
              <div className="absolute bottom-0 -right-10 bg-primary/10 h-10 w-10">
                <div className="w-full h-full bg-white rounded-bl-3xl"/>
              </div>
            </div>
          </div>

          <div className="w-full bg-primary/10 rounded-tr-3xl px-4 py-4 flex items-center justify-between gap-2">
            <div className="w-full flex flex-row gap-2 items-center">
              <div className="w-full flex flex-col gap-1 items-start">
                <div className="truncate w-full text-foreground font-bold flex items-center gap-1">
                  <span>رسول احمدی فر</span>
                </div>
                <div className="truncate w-full text-white font-medium flex justify-between items-center gap-1">
                  <span className="text-primary">مقام های برتر المپیاد</span>
                </div>
              </div>
            </div>
            <div className="shrink-0 truncate flex items-center gap-2 px-4 py-4 rounded-3xl bg-primary/10">
              <Icon icon="solar:bell-bing-bold-duotone" className="text-primary w-6 h-6"/>
              <span>کنکور 1402</span>
            </div>
          </div>

          <div className="w-full bg-primary flex flex-row text-white justify-between gap-4 px-5 py-3 items-center">
            <div className="flex flex-row items-center text-sm gap-1">
              <span className="font-normal">
                رتبه ی دو رقمی
              </span>
              <span className="font-extrabold text-lg">
                کنکـــور ریاضــی
              </span>
            </div>

            <div className="flex flex-row items-center text-sm gap-3">
              <span className="font-normal">
                رتبه
              </span>
              <span className="relative font-black text-5xl">
                98
                <span className="absolute opacity-20 -left-2 -top-0.5">
                  98
                </span>
              </span>
            </div>
          </div>
        </CardBody>
        <CardFooter className="bg-foreground rounded-3xl h-36 flex flex-row gap-4 justify-between items-center">
          <div className="h-full min-h-full flex-1 max-w-96 flex flex-col gap-4 items-start">
            <div className="text-white truncate font-medium flex items-center gap-1">
              <span>مقام های برتر المپیاد</span>
              <span className="truncate text-primary font-bold">
                تفکر و کار آفرینی
              </span>
            </div>
            <div className="flex-1"/>
            <div className="w-full flex flex-row pr-8 gap-2 items-center">
              <div className="w-full flex flex-col gap-1 items-start">
                <div className="truncate w-full text-white font-bold flex items-center gap-1">
                  <span>رسول احمدی فر</span>
                </div>
                <div className="truncate w-full text-white font-medium flex justify-between items-center gap-1">
                  <span className="text-primary">مقام های برتر المپیاد</span>
                  <span className="truncate text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20">
                    کسب مقام سوم المپیاد
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 bg-gradient-to-br from-primary to-primary/10 p-1 rounded-[18px]">
            <Avatar
              radius="lg"
              showFallback
              size="lg"
              fallback="ر"
              name="Saeed Ahmadi"
              className="bg-white text-primary font-bold text-xl w-22 h-22"
            />
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-[#FF952A] to-[#FF952A]/10 text-[#FF952A] p-1 rounded-[20px]">
              <div className="w-full h-full bg-white rounded-[16px] p-1.5 flex flex-col justify-center items-center">
                <svg viewBox="0 0 20 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" d="M15 17.9479H14.1667V17.7396C14.1667 16.8229 13.4167 16.0729 12.5 16.0729H10.625V14.1646C10.4167 14.1896 10.2083 14.1979 10 14.1979C9.79167 14.1979 9.58333 14.1896 9.375 14.1646V16.0729H7.5C6.58333 16.0729 5.83333 16.8229 5.83333 17.7396V17.9479H5C4.65833 17.9479 4.375 18.2312 4.375 18.5729C4.375 18.9146 4.65833 19.1979 5 19.1979H15C15.3417 19.1979 15.625 18.9146 15.625 18.5729C15.625 18.2312 15.3417 17.9479 15 17.9479Z"/>
                  <path opacity="0.4" d="M4.60039 10.5646C4.05039 10.3563 3.56706 10.0146 3.18372 9.63125C2.40872 8.77292 1.90039 7.74792 1.90039 6.54792C1.90039 5.34792 2.84206 4.40625 4.04206 4.40625H4.50872C4.29206 4.84792 4.16706 5.33958 4.16706 5.86458V8.36458C4.16706 9.14792 4.31706 9.88958 4.60039 10.5646Z"/>
                  <path opacity="0.4" d="M18.1004 6.54792C18.1004 7.74792 17.5921 8.77292 16.8171 9.63125C16.4337 10.0146 15.9504 10.3563 15.4004 10.5646C15.6837 9.88958 15.8337 9.14792 15.8337 8.36458V5.86458C15.8337 5.33958 15.7087 4.84792 15.4921 4.40625H15.9587C17.1587 4.40625 18.1004 5.34792 18.1004 6.54792Z" />
                  <path d="M12.4993 2.53125H7.49935C5.65768 2.53125 4.16602 4.02292 4.16602 5.86458V8.36458C4.16602 11.5896 6.77435 14.1979 9.99935 14.1979C13.2243 14.1979 15.8327 11.5896 15.8327 8.36458V5.86458C15.8327 4.02292 14.341 2.53125 12.4993 2.53125ZM12.366 7.90625L11.8493 8.53958C11.766 8.63125 11.7077 8.81458 11.716 8.93958L11.766 9.75625C11.7993 10.2562 11.441 10.5146 10.9743 10.3312L10.216 10.0312C10.0993 9.98958 9.89935 9.98958 9.78268 10.0312L9.02435 10.3312C8.55768 10.5146 8.19935 10.2562 8.23268 9.75625L8.28268 8.93958C8.29102 8.81458 8.23268 8.63125 8.14935 8.53958L7.63268 7.90625C7.30768 7.52292 7.44935 7.09792 7.93268 6.97292L8.72435 6.77292C8.84935 6.73958 8.99935 6.62292 9.06602 6.51458L9.50768 5.83125C9.78268 5.40625 10.216 5.40625 10.491 5.83125L10.9327 6.51458C10.9993 6.62292 11.1493 6.73958 11.2743 6.77292L12.066 6.97292C12.5493 7.09792 12.691 7.52292 12.366 7.90625Z" />
                  <path opacity="0.4" d="M12.3658 7.90645L11.8491 8.53978C11.7658 8.63145 11.7075 8.81478 11.7158 8.93978L11.7658 9.75645C11.7991 10.2564 11.4408 10.5148 10.9741 10.3314L10.2158 10.0314C10.0991 9.98978 9.89914 9.98978 9.78247 10.0314L9.02414 10.3314C8.55747 10.5148 8.19914 10.2564 8.23247 9.75645L8.28247 8.93978C8.2908 8.81478 8.23247 8.63145 8.14914 8.53978L7.63247 7.90645C7.30747 7.52311 7.44914 7.09811 7.93247 6.97311L8.72414 6.77311C8.84914 6.73978 8.99914 6.62311 9.0658 6.51478L9.50747 5.83145C9.78247 5.40645 10.2158 5.40645 10.4908 5.83145L10.9325 6.51478C10.9991 6.62311 11.1491 6.73978 11.2741 6.77311L12.0658 6.97311C12.5491 7.09811 12.6908 7.52311 12.3658 7.90645Z" />
                </svg>
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    )
}