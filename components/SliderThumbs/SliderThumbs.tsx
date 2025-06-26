import * as React from "react"
import { Icon } from "@iconify/react";
import { Button } from "@heroui/button";
import clsx from "clsx";



type SliderThumbsPropsType = {
  count: number,
  active?: number;
  handleNext: () => void;
}


export const SliderThumbs: React.FC<SliderThumbsPropsType> = (props) => {

    const {
        count,
        active = 0,
        handleNext,
    } = props;

    const current = active + 1
    const px = active <= 0 ? 0 : (active > count ? count : active)


    return (
      <div className="flex items-center gap-4 select-none">
        <div className="flex items-center gap-0.75 font-bold text-xl text-foreground">
          <span className="opacity-40 text-sm">{count}</span>
          <span className="opacity-40 text-sm">/</span>
          <span className="">{current}</span>
        </div>
        <div
          style={{"--px": `${px * 34}px`} as React.CSSProperties}
          className={clsx(
            "flex flex-row items-center gap-1.5 relative overflow-hidden",
            "after:w-7 after:h-0.75 after:rounded-full after:bg-foreground after:absolute after:transition-all after:duration-500 after:right-[var(--px,0)]"
          )}
        >
          {new Array(count).fill(null).map((v, idx) => (
            <div 
              key={idx}
              className="w-7 h-0.75 rounded-full bg-foreground/20" 
            />
          ))}
        </div>
        <Button
            color="primary"
            variant="bordered"
            size="lg"
            isIconOnly
            className="h-14 w-14 rounded-3xl"
            onPress={handleNext}
        >
          <Icon icon="solar:arrow-left-line-duotone" width="20" height="20" />
        </Button>
      </div>
    )
}

