import { Plus } from "lucide-react";

const AddTaskButton = () => {
  return (
    <div className="border-dashed border-2 border-[#E5E7EB] rounded-md p-2 flex items-center justify-center text-[#6B7280] gap-2 hover:text-[#1A56DB] hover:bg-[#E1EFFE] cursor-pointer active:scale-95">
      <Plus /> <span>Add new task</span>
    </div>
  );
};

export default AddTaskButton;
