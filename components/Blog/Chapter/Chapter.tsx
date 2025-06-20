"use client";
import * as React from "react";
import { CometStar, Star } from "@/components/Vectors";

type ChapterPropsType = {
  listItems: string[];
  initialSelectedKey?: React.Key;
};

export const Chapter: React.FC<ChapterPropsType> = ({
  listItems = [],
  initialSelectedKey = "0",
}) => {
  const [selectedKey, setSelectedKey] = React.useState<React.Key>(initialSelectedKey);

  return (
    <div className="flex flex-col justify-center gap-8">
      <div className="bg-foreground/15 w-fit flex gap-4 justify-center items-center px-5 py-2 rounded-xl">
        <i className="text-primary">
          <CometStar size={24} />
        </i>
        <h1 className="text-foreground">ســـــــرفـصـــــل‌هـــای ایــــن مقــــــالـــــــه</h1>
        <i className="text-primary rotate-180">
          <CometStar size={24} />
        </i>
      </div>

      <div className="w-full max-w-[347px] flex flex-col gap-2 bg-white shadow-sm rounded-2xl">
        {listItems.map((item, index) => {
          const key = index.toString();
          const isSelected = selectedKey === key;

          return (
            <button
              key={key}
              onClick={() => setSelectedKey(key)}
              className={`flex items-start gap-2 px-3 py-2 rounded-lg text-right transition-all ${
                isSelected
                  ? "bg-primary/5 text-foreground font-semibold"
                  : "hover:bg-muted text-foreground/50"
              }`}
            >
              <i
                className={`mt-[2px] shrink-0 transition-all ${
                  isSelected ? "text-primary" : "text-foreground"
                }`}
              >
                <Star size={16} />
              </i>

              <span className="text-sm leading-relaxed">{item}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
