import { useRouter } from "next/router";
import SubHeading from "@/components/common/Headings/SubHeading";
import Sidebar from "@/components/Layouts/Sidebar";
import CodePreview from "@/components/common/code/CodePreview";

export default function TailwindComponentDynamicRoute() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="w-full flex flex-row ">
      <Sidebar />
      <div className="m-5 flex-1">
        <SubHeading className="text-center text-black font-bold">
          Tailwind <span className="text-cyan capitalize">{slug}</span> -
          SundarUI
        </SubHeading>
        <CodePreview />
      </div>
    </div>
  );
}
