import Layoutheader from "../../Components/Layoutheader";
import { Faqsdata } from "../../data/Faqsdata";

const Faqs = () => {
  return (
    <div className="padding-px py-24">
      <div className="space-y-4 maxWidth m-auto">
        <Layoutheader
          title={"FAQs"}
          desc={"Answers to Your Most Commonly Asked Questions."}
        />
        {Faqsdata.map((data) => (
          <details
            key={data.key}
            className="group border-l-4 border-violet bg-white p-6"
          >
            <summary className="flex items-center justify-between cursor-pointer">
              <h3 className="font-medium">{data.que}</h3>

              <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </summary>
            <p className="mt-4 leading-relaxed">{data.ans}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
