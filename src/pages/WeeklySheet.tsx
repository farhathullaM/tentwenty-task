import { useQuery } from "@tanstack/react-query";
import { getWeeklyWorks } from "../services/timeSheet_api";
import Progress from "../components/WeeklyReport/Progress";
import type { WeeklyDataPassType } from "../components/types/weeklyDataType";
import WeeklyReportData from "../components/WeeklyReport/WeeklyReportData";

const WeeklySheet = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["weeklydata"],
    queryFn: () => getWeeklyWorks(),
  });

  console.log(data);

  return (
    <div className="bg-white w-[90vw] rounded-md shadow-sm mt-5 flex p-5 flex-col h-fit gap-5 max-md:p-3 max-md:mt-0">
      <div className="flex justify-between items-center">
        <h3 className="text-[#111928] text-xl font-semibold">
          This Weeks Timesheet
        </h3>
      <Progress />
      </div>

      <span className="text-[#6B7280] font-normal text-[14px]">
        21 - 26 January, 2024
      </span>

      {isLoading ? (
        <span>Loading...</span>
      ) : isError ? (
        <span>Something went wrong</span>
      ) : (
        data?.map((item: WeeklyDataPassType) => (
          <WeeklyReportData weeklyData={item} />
        ))
      )}
    </div>
  );
};

export default WeeklySheet;
