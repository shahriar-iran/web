import * as React from "react";
import { UniversalSliderSection } from "@/components/UniversalSliderSection/UniversalSliderSection";
import { OlympiadLeaderCard, type OlympiadLeader } from "@/components/Cards/OlympiadLeaderCard/OlympiadLeaderCard";

type OlympiadLeadersSectionProps = {
  leaders: OlympiadLeader[];
  title?: string;
  description?: string;
  className?: string;
}

export const OlympiadLeadersSection: React.FC<OlympiadLeadersSectionProps> = ({
  leaders,
  title = "ســــرگـــروه‌هـای بــــاشگـاه الـــــمپیـاد",
  description = "دبیرستــــان غـــــیردولتی شــــهریار ایـــــران",
  className = ""
}) => {
  return (
    <UniversalSliderSection
      title={title}
      description={description}
      titleVariant="side"
      itemsPerView={3}
      itemsPerViewTablet={2}
      itemsPerViewMobile={1}
      gap={12}
      loop={false}
      enableMousewheel={true}
      hasBackground={true}
      backgroundClass="bg-primary-50"
      showSliderThumbs={true}
      slideCount={leaders.length}
      className={className}
    >
      {leaders.map((leader) => (
        <OlympiadLeaderCard
            key={leader.id}
            data={leader}
        />
      ))}
    </UniversalSliderSection>
  );
};
