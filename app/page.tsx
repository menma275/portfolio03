import { WorkList } from "@/components/WorkList";
import { TabNavigation } from "@/components/TabNavigation";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <TabNavigation activeTab="works" />
      <div className="transition-all duration-300">
        <div className="flex flex-col gap-8">
          <WorkList />
        </div>
      </div>
    </div>
  );
}
