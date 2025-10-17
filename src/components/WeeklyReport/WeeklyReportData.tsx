import { Ellipsis } from "lucide-react";
import DialogBox from "../ui/DialogBox";
import AddProjectForm from "./AddProjectForm";
import AddTaskButton from "../Button/AddTaskButton";
import { formatShortDate } from "../../utils/formatDate";
import type { WeeklyDataType } from "../types/weeklyDataType";
import HoverComponent from "../ui/HoverComponent";

type workType = {
  task: string;
  project: string;
  hours: number;
};

const WeeklyReportData = ({ weeklyData }: WeeklyDataType) => {
  return (
    <div className="flex gap-5 p-2 select-none">
      <span className="text-[#111928] font-semibold w-32 text-lg">
        {formatShortDate(weeklyData.date)}
      </span>

      <div className="flex flex-col gap-2 w-full">
        {weeklyData.work.map((work: workType) => (
          <div className="flex justify-between border-2 border-[#E5E7EB] rounded-md p-2">
            <span className="text-[#111928] font-medium">{work.task}</span>
            <div className="flex gap-2 items-center">
              <span className="text-[#9CA3AF] font-medium">
                {work.hours} hrs
              </span>
              <span className="text-[#1E429F] bg-[#E1EFFE] rounded-md px-2 py-1 text-sm font-medium">
                {work.project}
              </span>
              <HoverComponent
                trigger={<Ellipsis className="text-[#6B7280]" />}
                children={
                  <div className="flex items-center flex-col gap-2 ">
                    <span className="text-[#374151] hover:bg-gray-50 w-full py-2 text-center">Edit</span>
                    <span className="text-[#E02424] w-full text-center hover:bg-gray-50 py-2">Delete</span>
                  </div>
                }
              />
            </div>
          </div>
        ))}

        <DialogBox
          title="Add new Entry"
          trigger={<AddTaskButton />}
          children={<AddProjectForm />}
        />
      </div>
    </div>
  );
};

export default WeeklyReportData;
