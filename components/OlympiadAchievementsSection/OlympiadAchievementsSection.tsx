import * as React from "react";
import { UniversalSliderSection } from "@/components/UniversalSliderSection/UniversalSliderSection";
import { OlympiadAchievementCard } from "@/components/Cards/OlympiadAchievementCard/OlympiadAchievementCard";
import { olympiadAchievementsData } from "@/data/olympiadAchievements";

type OlympiadAchievementsSectionProps = {
  title?: string;
  description?: string;
  className?: string;
}

export const OlympiadAchievementsSection: React.FC<OlympiadAchievementsSectionProps> = ({
  title = "(افــــــتخــارات باشگــــــاه المپیـــــــــــاد)",
  description = "(شــهریار ایـــران، اولــین مــدرسه هیــبریدی ایـــران)",
  className = ""
}) => {
  return (
    <UniversalSliderSection
      title={title}
      description={description}
      titleVariant="centered"
      itemsPerView={3}
      itemsPerViewTablet={2}
      itemsPerViewMobile={1}
      gap={24}
      loop={false}
      enableMousewheel={true}
      hasBackground={false}
      showSliderThumbs={true}
      slideCount={olympiadAchievementsData.length}
      className={className}
    >
      {olympiadAchievementsData.map((achievement) => (
        <OlympiadAchievementCard key={achievement.id} data={achievement} />
      ))}
    </UniversalSliderSection>
  );
};
