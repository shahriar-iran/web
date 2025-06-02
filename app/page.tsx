import { Tab } from "@/components/Tab/Tab";
import { Icon } from "@iconify/react/dist/iconify.js";




export default function Home() {
    return (
      <section className="pt-[72px] md:pt-[104px]">
        <div className="text-justiify pt-20">
          <Tab
          items={[
            {
              id: 1,
              title: "دربــــــــارۀ مـــــــــا"
            },
            {
              id: 2,
              title: "دربــــــــارۀ مـــــــــا"
            },
            {
              id: 3,
              title: "دربــــــــارۀ مـــــــــا"
            },
            {
              id: 4,
              title: "دربــــــــارۀ مـــــــــا"
            },
          ]}
          theme="secondary"
          withIcon={false}
          />
        </div>
      </section>
    );
}
