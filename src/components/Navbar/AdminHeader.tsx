import { ChevronDown } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const AdminHeader = () => {
  const { user } = useAuth();
  return (
    <div className="h-fit bg-white w-full flex justify-between items-center p-4 ">
      <div className="flex gap-3 text-[#111928]">
        <h1 className="font-semibold text-lg items-center cursor-pointer">
          ticktock
        </h1>
        <h4 className=" text-lg items-center cursor-pointer">Timesheets</h4>
      </div>

      <div className="text-[#6B7280] font-semibold text-base flex gap-1 items-center">
        <span>{user?.name}</span>
        <ChevronDown />
      </div>
    </div>
  );
};

export default AdminHeader;
