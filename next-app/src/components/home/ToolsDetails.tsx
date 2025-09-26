import StarIcon from "@/assets/icons/star.svg";
import { TOOLBOX_DETAIL } from "@/static/home/9-toolBoxDetails";


export const ToolsDetails = () => {
  return (
    <div className="flex flex-col">
        {/* Header */}
      <div className="flex flex-col p-6 md:py-8 md:px-10 items-center">
        <div className="inline-flex items-center justify-center gap-2">
          <StarIcon className="size-9 text-emerald-300" />
          <h3 className="font-serif text-3xl">{TOOLBOX_DETAIL.sectionHeader}</h3>
        </div>
        <p className="lg:text-base text-sm max-w-lg text-white/60 mt-2 leading-relaxed text-center mx-auto">
          {TOOLBOX_DETAIL.sectionDescription}
        </p>
      </div>
       {/* Major Interests */}
      <div className="px-6 md:px-10 mb-10 mt-4">
        <h4 className="text-xl font-semibold mb-2">{TOOLBOX_DETAIL.mainSection.sectionHeading}</h4>
        <p className="text-sm text-white/60 mb-4">{TOOLBOX_DETAIL.mainSection.sectionDescription}</p>
        <div className="flex flex-wrap md:gap-2">
          {TOOLBOX_DETAIL.mainSection.sectionItems.map((item, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-sm rounded-full bg-emerald-900/40 text-emerald-200 border border-emerald-700/40"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Subsections */}
      <div className="px-6 md:px-10 space-y-10">
        {TOOLBOX_DETAIL.subsections.map((section, idx) => (
          <div key={idx}>
            <h4 className="text-xl font-semibold mb-2">{section.sectionHeading}</h4>
            <p className="text-sm text-white/60 mb-4">{section.sectionDescription}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pb-4">
              {section.sectionItems.map((tool, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition"
                >
                  <tool.iconType className="size-10 mb-2 text-emerald-300" />
                  <span className="text-sm text-center">{tool.title}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};
