import Textarea from "../ui/Textarea";
import InputBox from "../ui/InputBox";
import { SheetClose } from "../ui/sheet";
import { useForm } from "react-hook-form";
import { taskSchema } from "./tastSchema";
import { useEffect, useRef } from "react";
import type { TaskType } from "./taskType";
import SubmitButton from "../ui/SubmitButton";
import { yupResolver } from "@hookform/resolvers/yup";
import useTaskActions from "../../hooks/useTaskActions";

const AddTask = () => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const { create, creating, created } = useTaskActions();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskType>({
    mode: "onChange",
    resolver: yupResolver(taskSchema),
  });

  const onSubmit = (data: TaskType) => {
    create({ formData: data });
  };

  useEffect(() => {
    if (created) {
      closeRef.current?.click();
    }
  }, [created]);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 p-4 justify-between h-full overflow-y-scroll pb-5"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="flex flex-col gap-3">
        <InputBox
          errors={errors}
          register={register}
          inputName="title"
          placeholder="Title"
          label="Title"
          required
        />

        <Textarea
          errors={errors}
          register={register}
          inputName="description"
          placeholder="Description"
          label="Description"
          required
        />

        <InputBox
          errors={errors}
          register={register}
          inputName="priority"
          placeholder="Priority(low,medium,high)"
          label="priority"
          required
        />

        <InputBox
          type="date"
          errors={errors}
          register={register}
          inputName="dueDate"
          placeholder="Date"
          label="Date"
          required
        />
      </div>

      <div className="flex gap-3">
        <SubmitButton text="Add Task" disabled={creating} />
        <SheetClose asChild>
          <button
            ref={closeRef}
            className="text-[#7F7F7F] border-[#E6E6E6] border-2 px-2 text-center w-1/2 rounded-md cursor-pointer active:bg-[#E6E6E6] active:text-[#7F7F7F]"
          >
            Cancel
          </button>
        </SheetClose>
      </div>
    </form>
  );
};

export default AddTask;
