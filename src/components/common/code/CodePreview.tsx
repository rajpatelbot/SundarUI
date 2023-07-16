import { useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineCopy, AiOutlineEye } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";

import { Languages } from "@/helper/constant";

import SubText from "../Headings/SubText";
import BodyText from "../Headings/BodyText";

interface CodePreviewProps {
  code: string;
  language: string;
}

export default function CodePreview({ code, language }: CodePreviewProps) {
  const router = useRouter();
  const { slug } = router.query;
  const [preview, setPreview] = useState<boolean>(false);

  return (
    <div className="my-5 w-full">
      <header className="flex items-center justify-between">
        <div className="flex-1">
          <BodyText className="capitalize">{slug}</BodyText>
        </div>
        <div className="flex items-center">
          <div
            className="flex space-x-1 rounded-lg bg-slate-100 p-0.5"
            role="tablist">
            <button
              className={`flex items-center rounded-md py-[0.4375rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${
                !preview ? "bg-white shadow" : null
              }`}
              onClick={() => setPreview(false)}>
              <AiOutlineEye className="text-xl" />
              <SubText className="sr-only lg:not-sr-only lg:ml-1 text-slate-900">
                Preview
              </SubText>
            </button>
            <button
              className={`flex items-center rounded-md py-[0.4375rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${
                preview ? "bg-white shadow" : null
              }`}
              onClick={() => setPreview(true)}>
              <BsCodeSlash />
              <SubText className="sr-only lg:not-sr-only lg:ml-2 text-slate-600">
                Code
              </SubText>
            </button>
          </div>
          <div className="relative hidden sm:block mx-4">
            <select
              name="language"
              id="language"
              className="form-select h-9 w-full rounded-lg border  bg-transparent bg-none p-0 pl-3.5 pr-[1.875rem] font-medium text-slate-900 focus:shadow-none focus-visible:ring-2 focus-visible:ring-sky-500 sm:text-sm">
              {Languages.map((language, key) => (
                <option key={key} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </div>
          <button className="group relative hidden h-9 w-9 items-center justify-center sm:flex">
            <AiOutlineCopy className="h-5 w-5 stroke-slate-400 transition group-hover:rotate-[-4deg] group-hover:stroke-slate-600" />
          </button>
        </div>
      </header>

      {preview ? (
        <>
          {language === "html" && (
            <div dangerouslySetInnerHTML={{ __html: code }} />
          )}
          {language === "react" && <code>{code}</code>}
          {language === "typescript" && <code>{code}</code>}
        </>
      ) : (
        <pre>
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
}
