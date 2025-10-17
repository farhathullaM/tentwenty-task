import type {
  Path,
  FieldValues,
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";

import type { LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";

interface InputProps<T extends FieldValues> {
  label?: string;
  type?: string;
  inputName: Path<T>;
  register: UseFormRegister<T>;
  required: boolean;
  errors: FieldErrors<T>;
  placeholder: string;
  icon?: LucideIcon;
  className?: string;
  placeholderText?: string;
}

const InputBox = <T extends FieldValues>({
  label,
  type = "text",
  inputName,
  register,
  required,
  errors,
  placeholder,
  icon: Icon,
  className,
  placeholderText,
}: InputProps<T>) => {
  return (
    <div className="flex w-full flex-col gap-2">
      {label && (
        <div className="flex gap-2">
          <label className="text-sm text-[#111928] font-medium">{label}</label>
          {required && (
            <span className="text-red-500 text-sm font-semibold">*</span>
          )}
        </div>
      )}
      <div
        className={cn(
          "border-2 gap-2 items-center w-full border-[#D1D5DB] flex rounded-[8px] py-2 px-2",
          className
        )}
      >
        {Icon && <Icon className="w-5 h-5 " />}
        <input
          type={type}
          {...register(inputName)}
          placeholder={placeholder}
          className={cn(
            "outline-none placeholder:text-[#6B7280] text-sm w-full",
            placeholderText
          )}
        />
      </div>
      {errors?.[inputName] && (
        <p className="text-xs text-red-500">
          {String(errors[inputName]?.message)}
        </p>
      )}
    </div>
  );
};

export default InputBox;
