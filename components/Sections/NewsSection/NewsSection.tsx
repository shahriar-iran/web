import * as React from "react"
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { ArticleCard } from "@/components/ArticleCard/ArticleCard";
import { Icon } from "@iconify/react";


type NewsSectionPropsType = {

}





export const NewsSection: React.FC<NewsSectionPropsType> = (props) => {

    const {
      
    } = props;

    

    return (
      <div className="flex flex-col gap-4 w-full max-w-7xl mx-auto px-3">
          <PageTitle
            variant="side"
            title="جدیدترین اخبار شهریار ایران"
            description="ایپسوم متن ساختگی با تولید سادگی نـامفــــــهوم از صنعت..."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
            <div className="flex flex-col gap-4">
              <ArticleCard
                title="گزارش تصویری | دورهمی شاعرانه به مناسبت سالروز بزرگداشت سعدی"
                footerItems={[
                  {
                    icon: (
                      <Icon icon="solar:calendar-bold-duotone" width="20" height="20" />
                    ),
                    value: "02 اردیبهشت 1395"
                  },
                ]}
              />
              <ArticleCard
                title="گزارش تصویری | دورهمی شاعرانه به مناسبت سالروز بزرگداشت سعدی"
                footerItems={[
                  {
                    icon: (
                      <Icon icon="solar:calendar-bold-duotone" width="20" height="20" />
                    ),
                    value: "02 اردیبهشت 1395"
                  },
                ]}
              />
              <ArticleCard
                title="گزارش تصویری | دورهمی شاعرانه به مناسبت سالروز بزرگداشت سعدی"
                footerItems={[
                  {
                    icon: (
                      <Icon icon="solar:calendar-bold-duotone" width="20" height="20" />
                    ),
                    value: "02 اردیبهشت 1395"
                  },
                ]}
              />
            </div>
            <div className="flex flex-col gap-4">
              <ArticleCard
                title="گزارش تصویری | دورهمی شاعرانه به مناسبت سالروز بزرگداشت سعدی"
                footerItems={[
                  {
                    icon: (
                      <Icon icon="solar:calendar-bold-duotone" width="20" height="20" />
                    ),
                    value: "02 اردیبهشت 1395"
                  },
                ]}
              />
              <ArticleCard
                title="گزارش تصویری | دورهمی شاعرانه به مناسبت سالروز بزرگداشت سعدی"
                footerItems={[
                  {
                    icon: (
                      <Icon icon="solar:calendar-bold-duotone" width="20" height="20" />
                    ),
                    value: "02 اردیبهشت 1395"
                  },
                ]}
              />
              <ArticleCard
                title="گزارش تصویری | دورهمی شاعرانه به مناسبت سالروز بزرگداشت سعدی"
                footerItems={[
                  {
                    icon: (
                      <Icon icon="solar:calendar-bold-duotone" width="20" height="20" />
                    ),
                    value: "02 اردیبهشت 1395"
                  },
                ]}
              />
            </div>
            <div className="flex flex-col gap-4">
              <ArticleCard
                title="گزارش تصویری | دورهمی شاعرانه به مناسبت سالروز بزرگداشت سعدی"
                footerItems={[
                  {
                    icon: (
                      <Icon icon="solar:calendar-bold-duotone" width="20" height="20" />
                    ),
                    value: "02 اردیبهشت 1395"
                  },
                ]}
              />
              <ArticleCard
                title="گزارش تصویری | دورهمی شاعرانه به مناسبت سالروز بزرگداشت سعدی"
                footerItems={[
                  {
                    icon: (
                      <Icon icon="solar:calendar-bold-duotone" width="20" height="20" />
                    ),
                    value: "02 اردیبهشت 1395"
                  },
                ]}
              />
              <ArticleCard
                title="گزارش تصویری | دورهمی شاعرانه به مناسبت سالروز بزرگداشت سعدی"
                footerItems={[
                  {
                    icon: (
                      <Icon icon="solar:calendar-bold-duotone" width="20" height="20" />
                    ),
                    value: "02 اردیبهشت 1395"
                  },
                ]}
              />
            </div>
          </div>
      </div>
    )
}

