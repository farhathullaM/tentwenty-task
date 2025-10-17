type StatusType = "completed" | "missing" | "incomplete";

const StatusBox = ({ status }: { status: StatusType }) => {
  if (status === "completed") {
    return (
      <div className="bg-[#DEF7EC] text-center w-fit rounded-md text-[#03543F] px-2 py-1 text-sm font-medium">
        COMPLETED
      </div>
    );
  }
  if (status === "missing") {
    return (
      <div className="bg-[#FDF6B2] text-center w-fit rounded-md text-[#723B13] px-2 py-1 text-sm font-medium">
        MISSING
      </div>
    );
  }
  if (status === "incomplete") {
    return (
      <div className="bg-[#FCE8F3] text-center w-fit rounded-md text-[#99154B] px-2 py-1 text-sm font-medium">
        INCOMPLETE
      </div>
    );
  }
};

export default StatusBox;
