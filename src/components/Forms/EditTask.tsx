import InputBox from "../ui/InputBox";
import Textarea from "../ui/Textarea";
import { SheetClose } from "../ui/sheet";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import SubmitButton from "../ui/SubmitButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateTaskSchema } from "./updateTaskSchema";
import useTaskActions from "../../hooks/useTaskActions";
import type { TaskAllType, TaskUpdateType } from "./taskType";

const EditTask = ({ task }: { task: TaskAllType }) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const { update, updated, updating } = useTaskActions();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskUpdateType>({
    mode: "onChange",
    resolver: yupResolver(updateTaskSchema),
  });

  const setValues = () => {
    reset({
      title: task.title,
      description: task.description,
      priority: task.priority,
      dueDate: task.dueDate,
      status: task.status,
    });
  };

  useEffect(() => {
    setValues();
  }, [task]);

  const onSubmit = (data: TaskUpdateType) => {
    update({ formData: data, id: task._id });
  };

  useEffect(() => {
    if (updated) {
      closeRef.current?.click();
    }
  }, [updated]);
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
          errors={errors}
          register={register}
          inputName="status"
          placeholder="Status(pending,in-progress,completed)"
          label="Status"
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
        <SubmitButton text="Edit Task" disabled={updating} />
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

export default EditTask;
