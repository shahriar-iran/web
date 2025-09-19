import { Avatar } from "@heroui/avatar";
import * as React from "react";

export type OlympiadLeader = {
  id: number;
  name: string;
  subject: string;
  avatar?: string; // اختیاری - مسیر عکس آواتار
}

type OlympiadLeaderCardProps = {
  data: OlympiadLeader;
}

export const OlympiadLeaderCard: React.FC<OlympiadLeaderCardProps> = ({ data: leader }) => {
  return (
    <div 
      className={`relative select-none overflow-hidden group/olead rounded-3xl p-6 h-24 flex flex-row gap-4 items-center bg-primary-50 shadow-[inset_0_0_0_1px_hsl(var(--heroui-primary)_/_1)] text-foreground hover:bg-primary hover:text-white transition-all duration-300`}
    >
        <Avatar
            size="lg"
            src={leader.avatar}
            name={leader.name}
            fallback={leader.name.split(" ").slice(0, 2).map(word => word.charAt(0)).join(" ")}
            showFallback
            className="truncate bg-primary text-white border border-primary group-hover/olead:bg-white group-hover/olead:text-primary group-hover/olead:border-white transition-all duration-300"
        />
        <div className="flex flex-col gap-2">
            <h5 className="font-bold text-sm">
                {leader.name}
            </h5>

            <h6 className="flex flex-row items-center gap-1 font-light text-xs text-primary group-hover/olead:text-white transition-all duration-300">
                <svg width="8" height="8" viewBox="0 0 6 5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.24609 3.4066C0.579428 3.0217 0.579426 2.05945 1.24609 1.67455L3.70703 0.253728C4.3737 -0.131172 5.20703 0.349953 5.20703 1.11975V3.9614C5.20703 4.7312 4.3737 5.21232 3.70703 4.82742L1.24609 3.4066Z" />
                </svg>
                <span className="opacity-60">
                  {leader.subject}
                </span>
            </h6>
        </div>
    </div>
  );
};
