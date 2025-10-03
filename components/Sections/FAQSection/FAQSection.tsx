import * as React from "react"
import { CusAccordion } from "@/components/CusAccordion/CusAccordion";
import { faqData } from "@/data/faqData";
import { PageTitle } from "@/components/PageTitle/PageTitle";


type FAQSectionPropsType = {

}





export const FAQSection: React.FC<FAQSectionPropsType> = (props) => {

    const {
      
    } = props;

    

    return (
      <div className="flex flex-col gap-3 items-center w-full">
        <div className="w-full max-w-7xl mx-auto px-3">
          <PageTitle
            variant="side"
            title="جواب تمام سوالاتت اینجاست"
            description="پیش از تصمیم‌گیری، این سوال و جواب‌ها را ببین تا همه‌چیز برات روشن بشه"
          />
        </div>
        <CusAccordion
          items={faqData}
        />
      </div>
    )
}

