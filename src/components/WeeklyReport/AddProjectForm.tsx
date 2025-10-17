import { useState } from "react";
import CustomSelect from "../ui/CustomSelect";
import { Info, Minus, Plus } from "lucide-react";
import { projectOptions, typeOfWork } from "../../constants/data";
import { DialogClose } from "../ui/dialog";

const AddProjectForm = () => {
  const [work, setWork] = useState("");
  const [project, setProject] = useState("");
  const [hours, setHours] = useState<number>(1);

  const handleDecreaseHours = () => {
    if (hours > 1) {
      setHours(hours - 1);
    }
  };

  const handleIncreseHours = () => {
    setHours(hours + 1);
  };

  return (
    <form className="flex flex-col gap-3">
      <div className="flex flex-col gap-1 w-full">
        <div className="flex gap-1 ">
          <label
            htmlFor="project"
            className="text-[#111928] font-medium text-sm"
          >
            Select Project
          </label>
          <span>*</span>
          <Info className="w-3 text-[#9CA3AF]" />
        </div>
        <CustomSelect
          value={project}
          options={projectOptions}
          onChange={setProject}
          placeholder="Project Name"
          className="w-full "
        />
      </div>

      <div className="flex flex-col gap-1 w-full">
        <div className="flex gap-1 ">
          <label
            htmlFor="project"
            className="text-[#111928] font-medium text-sm"
          >
            Type of work
          </label>
          <span>*</span>
          <Info className="w-3 text-[#9CA3AF]" />
        </div>
        <CustomSelect
          value={work}
          options={typeOfWork}
          onChange={setWork}
          placeholder="Bug fixes"
          className="w-full "
        />
      </div>

      <div className="flex flex-col gap-1 w-full">
        <div className="flex gap-1 ">
          <label
            htmlFor="project"
            className="text-[#111928] font-medium text-sm"
          >
            Type of work
          </label>
          <span>*</span>
        </div>
        <textarea
          name=""
          id=""
          placeholder="Write text here..."
          className="resize-none border-2 active:ring-0 p-2 rounded-md border-[#D1D5DB] placeholder:text-[#6B7280]"
          rows={5}
        ></textarea>
        <span className="text-[#6B7280] w-full text-start text-sm">
          A note for extra info
        </span>
      </div>

      <div className="flex flex-col gap-1 w-full">
        <div className="flex gap-1 ">
          <label
            htmlFor="project"
            className="text-[#111928] font-medium text-sm"
          >
            Hours
          </label>
          <span>*</span>
        </div>

        <div className="border-2 border-[#D1D5DB] flex items-center rounded-lg w-fit">
          <div
            className="bg-[#F3F4F6] active:bg-gray-200 rounded-l-lg px-2 py-1 text-[#111928]"
            onClick={handleDecreaseHours}
          >
            <Minus />
          </div>
          <span className="border-x-2 select-none px-3 py-1 border-[#D1D5DB] flex">
            {hours}
          </span>
          <div
            className="bg-[#F3F4F6] px-2 rounded-r-lg py-1 text-[#111928]"
            onClick={handleIncreseHours}
          >
            <Plus />
          </div>
        </div>
      </div>

      <div className="flex gap-2 w-full">
        <input
          type="text"
          className="text-white bg-[#1C64F2] rounded-md px-2 py-1 text-sm text-center w-1/2"
          value="Add entry"
        />
        <DialogClose asChild>
          <button className="text-[#111928] text-sm border-2 border-[#E5E7EB] rounded-md px-2 py-1 w-1/2">
            Cancel
          </button>
        </DialogClose>
      </div>
    </form>
  );
};

export default AddProjectForm;
