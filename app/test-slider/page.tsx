"use client";

import * as React from "react";
import { UniversalSliderSection } from "@/components/UniversalSliderSection";
import { OlympiadLeaderCard } from "@/components/Cards/OlympiadLeaderCard";
import { olympiadLeadersData } from "@/data/olympiadLeaders";

export default function TestSliderPage() {
  return (
    <div className="min-h-screen py-10">
      <UniversalSliderSection
        data={olympiadLeadersData}
        CardComponent={OlympiadLeaderCard}
        title="مربیان المپیاد"
        description="بهترین اساتید برای آمادگی المپیادهای علمی"
        titleVariant="side"
        itemsPerView={3}
        itemsPerViewTablet={2}
        itemsPerViewMobile={1}
        gap={24}
        loop={false}
        enableMousewheel={true}
        thumbsPosition="bottom"
      />
    </div>
  );
}
