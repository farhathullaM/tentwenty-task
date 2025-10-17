import { Ellipsis } from "lucide-react";
import DialogBox from "../ui/DialogBox";
import AddProjectForm from "./AddProjectForm";
import AddTaskButton from "../Button/AddTaskButton";
import { formatShortDate } from "../../utils/formatDate";
import type { WeeklyDataType } from "../types/weeklyDataType";
import HoverComponent from "../ui/HoverComponent";
import EditDelete from "../Button/EditDelete";

type workType = {
  task: string;
  project: string;
  hours: number;
};

const WeeklyReportData = ({ weeklyData }: WeeklyDataType) => {
  return (
    <div className="flex gap-5 p-2 select-none max-md:flex-col">
      <span className="text-[#111928] font-semibold w-32 text-lg">
        {formatShortDate(weeklyData.date)}
      </span>

      <div className="flex flex-col gap-2 w-full">
        {weeklyData.work.map((work: workType) => (
          <div className="flex justify-between border-2 border-[#E5E7EB] rounded-md p-2">
            <span className="text-[#111928] font-medium">{work.task}</span>
            <div className="flex gap-2 items-center">
              <span className="text-[#9CA3AF] font-medium text-nowrap">
                {work.hours} hrs
              </span>
              <span className="text-[#1E429F] text-nowrap bg-[#E1EFFE] rounded-md px-2 py-1 text-sm font-medium">
                {work.project}
              </span>
              <HoverComponent
                trigger={<Ellipsis className="text-[#6B7280]" />}
                children={<EditDelete />}
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
