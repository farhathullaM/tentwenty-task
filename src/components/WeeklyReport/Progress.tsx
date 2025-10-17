import ToolTipCard from "../ui/ToolTipCard";

const Progress = () => {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-medium text-lg text-[#6B7280] text-end">100%</span>
      <ToolTipCard
        trigger={
          <div className="bg-[#E5E7EB] w-48 z-0 h-2 rounded-sm max-lg:w-44 max-md:w-40 max-sm:w-32">
            <div className="bg-[#FF8A4C] w-1/2 z-10 h-2 rounded-sm" />
          </div>
        }
      />
    </div>
  );
};

export default Progress;
