import { cn } from "../../lib/utils";

const SubmitButton = ({
  text,
  submittingText,
  disabled,
  className,
}: {
  text: string;
  submittingText?: string;
  disabled?: boolean;
  className?: string;
}) => {
  return (
    <button
      disabled={disabled}
      type="submit"
      className={cn(
        `bg-[#014075] text-[#F9F9F9] px-4 py-2 rounded-md hover:bg-[#023a68] text-center w-1/2 active:bg-[#00294a] active:scale-95 ${
          disabled ? "cursor-not-allowed" : "cursor-pointer"
        }`,
        className
      )}
    >
      {disabled ? submittingText || "Submitting..." : text}
    </button>
  );
};

export default SubmitButton;
