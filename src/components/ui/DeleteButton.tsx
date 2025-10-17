import { Trash } from "lucide-react";

const DeleteButton = () => {
  return (
    <div className="flex gap-2 items-center justify-center bg-gray-200 rounded-md py-1 hover:bg-gray-300 active:bg-gray-400  px-4 text-gray-700 cursor-pointer">
      <Trash className="w-4" />
      <span>Delete</span>
    </div>
  );
};

export default DeleteButton;
