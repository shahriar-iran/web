"use client";

import * as React from "react";
import { UniversalSliderSection } from "@/components/UniversalSliderSection";
import { OlympiadLeaderCard } from "@/components/Cards/OlympiadLeaderCard";
import { olympiadLeadersData } from "@/data/olympiadLeaders";

export default function TestSliderTitlePage() {
  return (
    <div className="min-h-screen py-10 space-y-20">
      {/* با thumbs در title */}
      <UniversalSliderSection
        data={olympiadLeadersData}
        CardComponent={OlympiadLeaderCard}
        title="مربیان المپیاد - نسخه Title Thumbs"
        description="بهترین اساتید برای آمادگی المپیادهای علمی"
        titleVariant="side"
        itemsPerView={3}
        itemsPerViewTablet={2}
        itemsPerViewMobile={1}
        gap={24}
        loop={false}
        enableMousewheel={true}
        thumbsPosition="title"
      />
      
      {/* با thumbs در پایین */}
      <UniversalSliderSection
        data={olympiadLeadersData}
        CardComponent={OlympiadLeaderCard}
        title="مربیان المپیاد - نسخه Bottom Thumbs"
        description="بهترین اساتید برای آمادگی المپیادهای علمی"
        titleVariant="side"
        itemsPerView={2}
        itemsPerViewTablet={1}
        itemsPerViewMobile={1}
        gap={32}
        loop={false}
        enableMousewheel={true}
        thumbsPosition="bottom"
      />

      {/* بدون thumbs */}
      <UniversalSliderSection
        data={olympiadLeadersData.slice(0, 2)}
        CardComponent={OlympiadLeaderCard}
        title="مربیان المپیاد - بدون Thumbs"
        description="کمتر از حد نیاز برای نمایش thumbs"
        titleVariant="centered"
        itemsPerView={2}
        itemsPerViewTablet={1}
        itemsPerViewMobile={1}
        gap={24}
        loop={false}
        enableMousewheel={true}
        hideSliderThumbs={false}
      />
    </div>
  );
}
