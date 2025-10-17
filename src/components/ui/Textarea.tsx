
import type {
  UseFormRegister,
  FieldErrors,
  FieldValues,
  Path,
} from "react-hook-form";
import { cn } from "../../lib/utils";

interface TextareaProps<T extends FieldValues> {
  label: string;
  inputName: Path<T>;
  register: UseFormRegister<T>;
  required?: boolean;
  errors: FieldErrors<T>;
  placeholder?: string;
  rows?: number;
  className?: string;
}

const Textarea = <T extends FieldValues>({
  label,
  inputName,
  register,
  required = false,
  errors,
  placeholder = "",
  rows = 4,
  className,
}: TextareaProps<T>) => {
  return (
    <div className="flex w-full flex-col gap-1">
      <div>
        {label && <label className="text-sm text-text-primary">{label}</label>}
        {required && (
          <span className="text-red-500 text-sm font-semibold">*</span>
        )}
      </div>
      <textarea
        {...register(inputName, { required })}
        placeholder={placeholder}
        rows={rows}
        className={cn(
          "outline-none placeholder:text-[#989898] resize-none text-sm w-full border-2 border-gray-300 rounded-md py-2 px-2",
          className
        )}
      />

      {errors?.[inputName] && (
        <p className="text-xs text-red-500 mt-1">
          {String(errors[inputName]?.message)}
        </p>
      )}
    </div>
  );
};

export default Textarea;
