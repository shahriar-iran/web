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
            <h6 className="font-light text-xs text-primary group-hover/olead:text-white opacity-60 transition-all duration-300">
                {leader.subject}
            </h6>
        </div>
    </div>
  );
};
